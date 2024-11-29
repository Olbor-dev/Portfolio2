<script setup>
import { ref } from 'vue'
import Modale from './Modale.vue'

let modal = ref(false)
let projets = ref(0)

</script>

<template>
    <div>
        <h1>Mes créations</h1>
        <ul class="img__bordure__polaroid">
            <li @click="modal=true; projets=1">
                <h3>Mon CV en HTML et CSS</h3>
                <img class="img__mini__creation" src="@/assets/img/CV-Olivier-Bordage.png" alt="Projet CV Olivier Bordage">
            </li>
            <li @click="modal=true; projets=2">
                <h3>Création d'un cahier des charges pour un site de e-commerce</h3>
                <img class="img__mini__creation" src="@/assets/img/Cahier-Charges-LaSocketterie.png" alt="Cahier des charges la Socketterie">
            </li>
            <li @click="modal=true; projets=3">
                <h3>Ajout d'un espace commmentaire dynamique</h3>
                <img class="img__mini__creation" src="@/assets/img/Espace-Commentaire.png" alt="Projet ajout d'un espace commentaire">
            </li>
        </ul>
        <modale v-if="modal" @close="modal = false" :projet="projets"></modale>
    </div>
</template>

<style scoped>

div {
    font-family: 'Chivo Variable', sans-serif;
}

h1 {
    margin-left: 2%;
}

hr {
    width: 40%;
    border-width: 5px;
    border-style: outset;
}

.img__mini__creation {
    height: 120px;
    width: 100px;
    border: solid blue;
}

.img__bordure__polaroid img {
    display: inline-block;
    background: white;
    padding: 10px;
    padding-bottom: 30px; /* Simule l'espace large en bas */
    border: 1px solid #ddd;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    text-align: center;
    max-width: 300px; /* Ajustez selon vos besoins */
}

li {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
    margin: 1em;
}

li:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3); /* Ombre en bas à droite */
}

h3 {
    margin: 1em;
}

ul {
    margin-bottom: 30px;
}

</style>