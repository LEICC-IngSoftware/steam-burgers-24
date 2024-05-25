<template>
  <div class="boton-precio">
    <button @click="decrement" class="boton-simbolo">-</button>
    <span>{{ quantity }}</span>
    <button @click="increment" class="boton-simbolo">+</button>
  </div>
</template>

<script setup>
import { ref, toRefs } from 'vue';

const props = defineProps(['cantidad','id']);
const { cantidad, id } = toRefs(props);

const emit = defineEmits(['update:quantity']);

// State: quantity
const quantity = ref(cantidad.value);

// Method to increment the quantity
function increment() {
  quantity.value++;
  emit('update:quantity', quantity.value, id.value);
}

// Method to decrement the quantity
function decrement() {
  if (quantity.value > 0) {
    quantity.value--;
    emit('update:quantity', quantity.value, id.value);
  }
}
</script>

<style>
    .boton-precio {
        display: flex;
        justify-content: space-between;
        background-color: #EDAF11;
        text-align: center; 
        color: #010101; 
        font-size: 20px; 
        font-family: Roboto; 
        font-weight: 400; 
        line-height: 40px; 
        word-wrap: break-word;
        width: 160px;
    }
    .boton-simbolo {
        font-size: 24px;
        padding: 0 20px;
        background-color: #EDAF11;
        border: 0;
    }
    
</style>

