<template>
    <div class="container" v-if="!comentario_enviado">
        <h2 class="mt-4 mb-4">Envianos tus comentarios</h2>
        <form @submit.prevent="enviarComentario">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                <input type="text" class="form-control" placeholder="" v-model="nombre">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Correo electrónico</label>
                <input type="email" class="form-control" placeholder="" v-model="email" required>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label" >Comentarios</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" v-model="comentarios" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" :disabled="enviando">Hacer pedido</button>
        </form>
    </div>
</template>

<script setup>
    import { ref, defineModel } from 'vue';
    const nombre = defineModel('nombre');
    const comentarios = defineModel('comentarios');
    const email = defineModel('email');

    const enviando = ref(false);
    const comentario_enviado = ref(false);

    async function enviarComentario() {
        
    }

</script>

<style>
</style>