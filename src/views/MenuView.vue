<template>
    <div class="w-100 text-center d-flex justify-content-center p-5 mt-5" v-if="cargando">
        <div class="spinner-border text-warning me-3" role="status">
        </div>
        Cargando ...
    </div>
    <tabs class="" v-else>
        <tab name="Combos">
            <div v-for="producto in combos" :key="producto.id">
                <Producto :producto="producto" />
            </div>
        </tab>
        <tab name="Individual">
            <div v-for="producto in individuales" :key="producto.id">
                <Producto :producto="producto" />
            </div>
        </tab>
        <tab name="Bebidas">
            <div v-for="producto in bebidas" :key="producto.id">
                <Producto :producto="producto" />
            </div>
        </tab>
    </tabs>
    <div class="card pedido fixed-bottom">
        <Button titulo="Hacer pedido" tipo="btn-light" url="/pedido">Hacer pedido</Button>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import supabase from '../supabase/init';
    import Producto from '@/components/Producto.vue';
    import Button from '@/components/Button.vue'

    const menu = ref([]);
    const combos = ref([]);
    const bebidas = ref([]);
    const individuales = ref([]);
    const cargando = ref(true);

    async function obtenerMenu() {
        const { data, error } = await supabase.from('productos').select('*');
        if (!error) {
            menu.value = data;
            combos.value = menu.value.filter((producto) => producto.categoria === "Combos")
            bebidas.value = menu.value.filter((producto) => producto.categoria === "Bebidas");
            individuales.value = menu.value.filter((producto) => producto.categoria === "Individuales");
            cargando.value = false;
        }
    }

    onMounted(() => {
        obtenerMenu();
    })
</script>

<style>
    .tabs-component-tabs {
        text-decoration-style: none;
        list-style-type: none;
        display: flex;
        margin-top: 10px;
        margin-bottom: 0;
    }
    .tabs-component-tab {
        background-color: #EDAF11;
        color: #000;
        margin-right: 19px;
        padding: 5px;
    }
    .tabs-component-tab-a {
        text-decoration: none;
        color: #000;
        padding: 3px;
    }
    .tabs-component-tab .is-active {
        font-weight: bold;
    }
    .tabs-component-panels {
        border-top: 1px #000 solid;
        background-color: #EAEAEA;
    }
    .pedido {
        padding: 10px;
    }
</style>