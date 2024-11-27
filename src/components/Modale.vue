<script setup>

const props = defineProps({
    modal: Boolean,
    projet: Number,
})
const modal = false
const creations = ([
    { 
        name: "Mon CV - Olivier Bordage",
        createDate: "02/09/2024",
        usedTech: "HTML, CSS, ",
        webLink: "",
        gitLink: "",
    },
    { 
        name: "Le cahier des charges de laSocketerie",
        createDate: "11/09/2024",
        usedTech: "Aucune",
        webLink: "",
        gitLink: "",
    },
    { 
        name: "La dynamisation d'un espace commentaire",
        createDate: "11/10/2024",
        usedTech: "HTML, CSS, JS",
        webLink: "",
        gitLink: "",
    },
])

console.log('Modal modal :' + modal)

</script>

<template>

    <div class="bloc__modale">
        <div class="overlay">
            <button @click="$emit('close')">X</button>
        </div>
        <div class="modale">
            <div class="modale__button">
                <h1>{{ creations[projet - 1].name }}</h1>
                <p>Créé le {{ creations[projet - 1].createDate }}</p>
                <p>Technologies utilisées : {{ creations[projet - 1].usedTech }}</p>
                <p>Lien Web : {{ creations[projet - 1].webLink }}</p>
                <p>Lien GITHUB : {{ creations[projet - 1].gitLink }}</p>
            </div>
        </div>
    </div>
    
</template>

<style scoped>

    .bloc__modale {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .overlay {
        background-color: rgba(0, 0, 0, 0.4);
        position: fixed;
        top: 20%;
        bottom: 20%;
        left: 20%;
        right: 20%;
        width: 60%;
        height: 60%;
        z-index: 1;
        border-radius: 20px;
         
    }

    .modale {
        
        background: white;
        z-index: 2;
        padding: 1%;
        
    }

    button {
        position: absolute;
        top: 15px;
        right: 15px;
        border-radius: 10px;
    }

</style>