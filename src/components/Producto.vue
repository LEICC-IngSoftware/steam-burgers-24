<template>
    <div class="producto row">
        <div class="col-6 offset-md-2 col-md-4">
            <h3 class="producto__nombre">{{producto.nombre}}</h3>
            <p class="producto__descripcion">{{producto.descripcion}}</p>
            <p class="producto__precio">{{precio_formato}}</p>
            <BotonCantidad cantidad="0" @update:quantity="cambiarCantidad"></BotonCantidad>
            
        </div>
        <div class="col-6 col-md-4 producto__contenedor">
            <img :src="producto.url_imagen" class="producto__imagen" />
        </div>
    </div>
</template>

<script setup>
    import { ref, toRefs } from 'vue';
    import BotonCantidad from '@/components/BotonCantidad.vue'
    import { usarCarreta } from '@/composables/carreta';

    const props = defineProps(['producto']);
    const { producto } = toRefs(props);
    const precio_formato = ref('Q. 0.00');

    precio_formato.value = "Q." + (Math.round(producto.value.precio * 100) / 100).toFixed(2);

    const { agregarProducto} = usarCarreta();

    function cambiarCantidad(cantidad) {
        agregarProducto(producto.value,cantidad);
    }
</script>

<style>
    .producto {
        padding: 20px;
        border-bottom: 1px solid #000;
    }
    .producto__nombre {
        color: black; 
        font-size: 20px; 
        font-weight: 700; 
        line-height: 50px; 
        word-wrap: break-word;
        margin: 0;
        padding: 0;
    }
    .producto__descripcion {
        color: black; 
        font-size: 16px; 
        font-family: Roboto; 
        font-weight: 400; 
        line-height: 22px; 
        word-wrap: break-word;
    }
    .producto__imagen {
        max-width: 200px;
        max-height: 200px;
    }
    .producto__precio {
        padding-top: 18px;
        color: black; 
        font-size: 20px; 
    }
    .producto__contenedor {
        text-align: center;
    }
</style>