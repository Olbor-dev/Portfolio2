<script setup>

import { ref, reactive } from 'vue'

const AfficheMessageErreur = ref(false)

    const message = ref({
        name: '',
        mail: '',
        tel: '',
        objet: '',
        msg: '',
    })

    function sendMail(message) {
        if (message.name.length < 1 
        || message.mail.length < 1
        || message.objet.length < 1 
        || message.msg.length < 1 ){
            AfficheMessageErreur.value = true
        }else {
            AfficheMessageErreur.value = false
            let mailto
            if(message.tel) {
                mailto = `mailto:olbor.dev@gmail.com?subject=${message.objet}&body=Je%20suis%20%3A%20${message.name}%0AVoici%20mon%20mail%20%3A%20${message.mail}%0AVoici%20mon%20téléphone%20%3A%20${message.tel}%0A%0A${message.msg}`
            }else {
                mailto = `mailto:olbor.dev@gmail.com?subject=${message.objet}&body=Je%20suis%20%3A%20${message.name}%0AVoici%20mon%20mail%20%3A%20${message.mail}%0A%0A${message.msg}`
            }
            location.href = mailto
            Object.keys(message).forEach(key => {
                message[key] = ''; // Efface les valeurs avec une chaîne vide
            });
        }
    }
    

</script>

<template>

<div>    
    <h1>Formulaire pour me contacter</h1>
    <div>
        <div class="messageErreur" v-if="AfficheMessageErreur">
            <p>Qu'est-ce que j'ai dit !!!</p>
        </div>
        <hr>
        <p>Attention, il faut remplir tous les champs en rouge.</p>
        <hr>
        <div class="form__grid">
            <input v-model="message.name" type="text" name="name"  id="name" placeholder="Nom...">
            <input v-model="message.mail" type="email" name="mail" id="mail" placeholder="Email...">
            <input v-model="message.tel" type="tel" name="tel" id="tel" placeholder="Téléphone...">
            <input v-model="message.object" type="text" name="objet" id="objet" placeholder="Objet...">
            <textarea v-model="message.msg" name="message" id="message" placeholder="Message..."></textarea>
            <button class="CTA" @click="sendMail(message)">Envoyer</button>
        </div>
        <hr>
    </div>
</div>

</template>

<style scoped>

div {
    font-family: 'Chivo Variable', sans-serif;
}


h1 {
    margin-left: 2%;
}

p {
    margin: auto;
    text-align: center;
    font-size: small;
    
}

.form__grid {
        margin : auto 2%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px 2%;
 }

input {
        height: 25px;
}

input:focus, textarea:focus {
        box-shadow: -4px 4px 10px #060640;
}

#name {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        border-color: red;
}

#mail {
        grid-column: 2 / 4;
        grid-row: 1 / 2;
        border-color: red;
}

#tel {
    grid-column: 2 / 4;
    grid-row: 2 / 3;
}

.CTA {
        width: 50%;
        margin: 15px auto;
        grid-column: 1 / 3;
        grid-row: 5 / 6;
}

#objet {
        grid-column: 1 / 2;
        grid-row: 2 / 2;
        border-color: red;
}

#message {
        grid-column: 1 / 4;
        grid-row: 3 / 5;
        border-color: red;
}

.messageErreur {
        display: flex;
        align-items: center;
        background-color: rgba(255, 0, 0, 0.35);
        border: 1px solid red;
        border-radius: 15px;
        padding: 5px;
}

.messageErreur * {
        color: red;
        font-size: 0.9em;
}

</style>