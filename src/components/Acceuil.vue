<script setup>
import Formulaire from './Formulaire.vue';

</script>

<template>
    <div>
        <h1>Bienvenue chez Olbor-dev</h1>
        <section>
            <p>Jeune développeur de site Web encore en formation, je vous présente mon portfolio actuel ainsi que mon désir de poursuivre dans cette voie du développement.
                J'ai 56 ans, et je suis prêt à mettre, mes expériences, mon énergie et ma passion au service de vous mes futures clients. N'hésitez pas à me contacter à l'aide du formulaire (un des exercices du jour),
                ou plus directement (voir mes coordonnées).
            </p>
            <span>Olivier Bordage</span>
        </section>
        <section>
            <hr>
            <h2>Mes créations</h2>
            <ul class="img__bordure__polaroid">
                <li>
                    <h3>Mon CV en HTML et CSS</h3>
                    <img class="img__mini__creation" src="@/assets/img/CV-Olivier-Bordage.png" alt="Projet CV Olivier Bordage">
                </li>
                <li>
                    <h3>Création d'un cahier des charges pour un site de e-commerce</h3>
                    <img class="img__mini__creation" src="@/assets/img/Cahier-Charges-LaSocketterie.png" alt="Cahier des charges la Socketterie">
                </li>
                <li>
                    <h3>Ajout d'un espace commmentaire dynamique</h3>
                    <img class="img__mini__creation" src="@/assets/img/Espace-Commentaire.png" alt="Projet ajout d'un espace commentaire">
                </li>
            </ul>
        </section>
        <section>
            <hr>
            <Formulaire></Formulaire>
        </section>
    </div>
</template>

<style scoped>
    div {
        font-family: 'Chivo Variable', sans-serif;
        /*display: flex;
        flex-direction: column;
        align-items: center;
        width: auto;*/
    }

    h1 {
        /*display: block;*/
        margin: 2%;
        font-size: 1.6em;
        text-shadow: 1px 1px 2px gray;
    }

    span {
        color: blue;
        display: block;
        text-align: right;
        margin: 1% 4% 0% 0%;
        font-family: 'Caveat Variable', cursive;
        font-size: 2em;
        rotate: -4deg;
        text-shadow: 1px 1px 2px black;
        
    }

    p {
        margin-left: 10%;
        margin-right: 5%;
        text-align: justify;
        text-indent: 20px;
        font-style: italic;
    }

    h2 {
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

    h3 {
        margin: 1em;
    }
</style>