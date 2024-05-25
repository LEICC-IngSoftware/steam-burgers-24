<template>
    <button type="button" :class="button_class">
        <RouterLink :to="url" class="nav-link">{{ titulo }}</RouterLink>
    </button>
</template>

<script setup>
    import { ref, toRefs } from 'vue';

    const props = defineProps(['titulo','url','tipo']);
    const { titulo, url, tipo } = toRefs(props);

    const button_class = ref("btn btn-lg");
    button_class.value = tipo.value + " " + button_class.value;
</script>

<style>
    .btn-light {
        background-color: #CFCFCD !important;
        border: 1px solid #262626 !important;
    }
</style>