<script setup>
import Formulaire from './Formulaire.vue';
import Projets from './Projets.vue';

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
        <section class="section__projets">
            <hr>
            <Projets></Projets>
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

    hr {
        width: 40%;
        border-width: 5px;
        border-style: outset;
        
    }

    /*.section__projets :deep(h2) {
        margin-left: 10%;
    }*/

    

</style>