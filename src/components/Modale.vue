<script setup>

const props = defineProps(['modal', 'projet']);
const modal = false;

const emit = defineEmits(['close']);

const creations = [
    { 
        name: "Mon CV - Olivier Bordage",
        createDate: "02/09/2024",
        usedTech: "HTML, CSS, ",
        webLink: "Non",
        gitLink: "https://github.com/Olbor-dev/devoir-cv-olivier",
    },
    { 
        name: "Le cahier des charges de laSocketerie",
        createDate: "11/09/2024",
        usedTech: "Aucune",
        webLink: "Non",
        gitLink: "Non",
    },
    { 
        name: "La dynamisation d'un espace commentaire",
        createDate: "11/10/2024",
        usedTech: "HTML, CSS, JS",
        webLink: "Non",
        gitLink: "https://github.com/Olbor-dev/espace-commentaire",
    },
]

</script>

<template>
    <div class="modal__background" @click="$emit('close')"></div>
    <div class="bloc__modale">
        <div>
            <button @click="$emit('close')">X</button>
        </div>
        <div class="modale">
            <div>
                <h1>{{ creations[projet - 1].name }}</h1>
                <p>Créé le {{ creations[projet - 1].createDate }}</p>
                <p>Technologies utilisées : {{ creations[projet - 1].usedTech }}</p>
                <p>Lien Web : 
                    <a
                        v-if="creations[projet - 1].webLink !== 'Non'"
                        :href="creations[projet - 1].webLink" target="_blank" rel="external"
                        >
                        {{ creations[projet - 1].webLink }}
                    </a>
                </p>
                <p>Lien GITHUB : 
                    <a
                        v-if="creations[projet - 1].gitLink !== 'Non'"
                        :href="creations[projet - 1].gitLink" target="_blank" rel="external"
                        >
                        {{ creations[projet - 1].gitLink }}
                    </a>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>

.modal__background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.5);
}

.bloc__modale {
    position: fixed;
    top: 5%;
    left: 10%;
    background-color: white;
    border: 1px solid #060640;
    border-radius: 25px;
    box-sizing: border-box;
    height: 90%;
    width: 80%;
    padding: 2em;
    overflow: auto;
}

button {
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 10px;
    background-color: rgb(239, 102, 102);
}

button:hover {
    zoom: 105%;
}

.modal__background:hover {
    background-color: rgba(0,0,0,0.6); 
}

a {
    text-decoration: none;
    color: blue;
}

</style>