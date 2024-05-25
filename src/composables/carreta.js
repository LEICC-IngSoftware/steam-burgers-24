import { computed, ref, watch } from 'vue';

export function usarCarreta() {
    const STORAGE_KEY = 'carreta';

    const carreta = ref([]);

    //Cargar lo que tenemos en localStorage
    const cargarCarreta = () => {
        const datosCarreta = localStorage.getItem(STORAGE_KEY);
        if (datosCarreta) {
            carreta.value = JSON.parse(datosCarreta);
        }
    }

    //Actualizar la carreta en localStorage
    watch(carreta, (nuevaCarreta) => {
        console.log(nuevaCarreta);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(nuevaCarreta));
    }, { deep: true });

    //Agregar un producto a la carreta
    const agregarProducto = (producto, cantidad) => {
        const productoCarreta = carreta.value.find(productoArreglo => productoArreglo.id === producto.id);
        console.log(productoCarreta);
        if (productoCarreta) {
            productoCarreta.cantidad = cantidad;
            if (cantidad === 0) {
                carreta.value = carreta.value.filter(productoArreglo => productoArreglo.id !== producto.id);
            }
        } else {
            carreta.value.push({...producto, "cantidad": cantidad});
            console.log(carreta.value);
        }
    }

    const vaciarCarreta = () => {
        carreta.value = [];
    }

    const cantidadProductos = computed(() => {
        return carreta.value.reduce((total, producto) => {
            return total + producto.cantidad
        }, 0);
    });

    const precioTotal = computed(() => {
        return carreta.value.reduce((total, producto) => {
            return total + producto.cantidad*producto.precio
        }, 0);
    });

    //Inicializar carreta
    cargarCarreta();

    return {
        carreta,
        agregarProducto,
        cantidadProductos,
        precioTotal,
        vaciarCarreta
    };
}