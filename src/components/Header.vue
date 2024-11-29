<script setup>

import { ref } from 'vue'

</script>

<template>
    <header>
        <RouterLink to="/">
            <img src="@/assets/img/Portrait-Olbor-dev.jpg" alt="Olbordev logo">
        </RouterLink>
        <nav>
            <ul>
                <RouterLink to="/">A propos</RouterLink>
                <RouterLink :to="{name: 'projets'}">Projets</RouterLink>
                <RouterLink :to="{name: 'contact'}">Me contacter</RouterLink>
            </ul>
        </nav>
    </header>
</template>

<style scoped>

header {
    font-family: 'Caveat Variable', cursive;
    width: 100%;
    background-image: url("../assets/img/HeaderFond.jpg");
    background-origin: border-box;
    background-size: 100% 198%;
}

ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.5em;
    margin: auto;
    padding-left: 0em;
    padding-right: 0em;
    padding-bottom: 0.2em;
    background-color: black;
}

a {
    text-decoration: none;
    color: white;
}

a:hover {
    text-decoration: underline;
}

a:active, a:focus{
     color:yellow;
}

</style>