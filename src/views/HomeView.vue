<template>
  <div class="background">
    <h1 class="title">Steam Burgers</h1>
    <Button titulo="Ver menu" tipo="btn-warning" url="/menu"></Button>
  </div>
</template>

<script setup>
  import Button from '@/components/Button.vue';
</script>

<style>
  .title {
    color: #ffffff;
    font-family: "Pacifico", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 46px;
    padding-top: 20px;
  }
  .background {
    text-align: center;
    background-image: url("/fondo-hamburguesa.jpg");
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: center;
    --background-size: cover;
    background-color: #101010;
    background-size: contain;
    height: 100vh;
  }
</style>