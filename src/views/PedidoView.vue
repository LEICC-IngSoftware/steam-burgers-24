<template>
    <div class="container">
        <h2 class="mt-4 mb-4">Pedido</h2>
        <div v-if="carreta.length === 0" class="mt-2">Tu pedido esta vacio</div>
        <div v-else>
            <div v-for="producto in carreta" :key="producto.id" class="row">
                <div class="col-3">
                    <img :src="producto.url_imagen" class="producto__imagen" />
                </div>
                <div class="col-5">
                    <b class="producto__nombre">{{ producto.nombre }}</b>
                    <p>{{ producto.descripcion }}</p>
                </div>
                <div class="col-4">
                    <BotonCantidad :id="producto.id" :cantidad="producto.cantidad" @update:quantity="cambiarCantidad"></BotonCantidad>
                    <div class="producto__total">Q.{{ (producto.precio * producto.cantidad).toFixed(2) }}</div>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-7">
            </div>
            <div class="col-5 producto__total">
                Total: Q.{{ precioTotal.toFixed(2) }}
            </div>
        </div>
    </div>
    <div class="container mt-4" v-if="!pedido_realizado && carreta.length > 0">
        <h3>Datos de envio</h3>
        <form @submit.prevent="hacerPedido">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                <input type="text" class="form-control" placeholder="" v-model="nombre">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label" required>Dirección</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" v-model="direccion" required></textarea>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Telefono</label>
                <input type="tel" class="form-control" id="exampleFormControlInput1" placeholder="55555555" v-model="telefono" minlength="8" maxlength="8" size="8">
            </div>
            <button type="submit" class="btn btn-primary" :disabled="enviando">Hacer pedido</button>
        </form>
    </div>
    <div class="container" v-else-if="pedido_realizado">
        <div class="alert alert-success" role="alert">
            Su pedido fue realizado y nos estaremos comunicando para la entrega.
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import BotonCantidad from '@/components/BotonCantidad.vue';
    import supabase from '../supabase/init';
    import { usarCarreta } from '@/composables/carreta';
    const { carreta, agregarProducto, vaciarCarreta, precioTotal } = usarCarreta();

    const nombre = defineModel('nombre')
    const direccion = defineModel('direccion')
    const telefono = defineModel('telefono')

    const enviando = ref(false);
    const pedido_realizado = ref(false);

    async function cambiarCantidad(cantidad, id) {
        const { data, error } = await supabase
            .from('productos')
            .select('*')
            .eq('id', id)
            .limit(1)
            .single();
        console.log(data);
        agregarProducto(data,cantidad);
    }

    async function hacerPedido() {
        enviando.value = true;
    
        const { data, error } = await supabase
            .from('pedidos')
            .insert({ nombre: nombre.value, direccion: direccion.value, telefono: telefono.value })
            .select();

        console.log(data);
        const pedido_id = data[0].id;

        carreta.value.forEach(async (producto) => {
            const { error } = await supabase
            .from('pedidos_productos')
            .insert({ pedido_id: pedido_id, producto_id: producto.id, cantidad: producto.cantidad, precio_unitario: producto.precio });
        });
        vaciarCarreta();
        pedido_realizado.value = true;
    }
</script>

<style>
    .producto_nombre {
        font-size: 20px;
        font-weight: bold;
    }
    .producto_descripcion {
        font-size: 12px;
        font-weight: bold;
    }
    .producto__imagen {
        width: 100%;
        max-width: 200px;
        max-height: 200px;
    }
    .producto__total {
        margin-top: 10px;
        font-size: 20px;
    }
</style>