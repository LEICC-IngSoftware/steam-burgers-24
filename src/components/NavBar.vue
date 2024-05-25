<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                <div class="mx-auto">
                    <img src="/icono-hamburguesa-96.png" height="50px" />
                </div>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <RouterLink to="/" class="nav-link">Inicio</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/menu" class="nav-link">Menu</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/promociones" class="nav-link">Promociones</RouterLink>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
        </div>
    </nav>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    import {ref} from 'vue';
    const router = useRouter()
    var currentPageName = ref("");
    var currentPath = ref("");

    router.beforeEach((to, from, next) => {
        currentPageName.value = to.name;
        currentPath.value = to.path;
        next();
    });
</script>

<style>
    .navbar-nav .nav-link.active {
        font-weight: 600;
    }
    @media (max-width: 992px) {
        .center {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 85%;
        }
    }
</style>