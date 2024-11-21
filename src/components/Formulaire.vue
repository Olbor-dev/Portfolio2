<script setup>
import { ref, reactive } from 'vue'

/*const props = defineProps({
    id: String
});*/

const AfficheMessageErreur = ref(false)

    const message = ref({
        name: '',
        mail: '',
        tel: '',
        object: '',
        msg: '',
    })

    function sendMail(message) {
        if (message.name.length < 1 
        || message.mail.length < 1
        || message.object.length < 1 
        || message.msg.length < 1 ){
            AfficheMessageErreur.value = true
        }else {
            AfficheMessageErreur.value = false
            let mailto
            if(message.tel) {
                mailto = `mailto:hugo.melin01@gmail.com?subject=${message.object}&body=Je%20suis%20%3A%20${message.name}%0AVoici%20mon%20mail%20%3A%20${message.mail}%0AVoici%20mon%20téléphone%20%3A%20${message.tel}%0A%0A${message.msg}`
            }else {
                mailto = `mailto:hugo.melin01@gmail.com?subject=${message.object}&body=Je%20suis%20%3A%20${message.name}%0AVoici%20mon%20mail%20%3A%20${message.mail}%0A%0A${message.msg}`
            }
            location.href = mailto
        }
    }

</script>

<template>
    <h1>Mon formulaire</h1>
    <div id="contact">
        <div class="messageErreur" v-if="AfficheMessageErreur">
            <span class="material-symbols-outlined">cancel</span>
            <p>Tous les champs doivent être renseignés</p>
        </div>
    
        <div class="form__grid">
            <input v-model="message.name" type="text" name="name"  id="name" placeholder="Nom...">
            <input v-model="message.mail" type="email" name="mail" id="mail" placeholder="Email...">
            <input v-model="message.tel" type="tel" name="tel" id="tel" placeholder="Téléphone...">
            <input v-model="message.object" type="text" name="object" id="object" placeholder="Objet...">
            <textarea v-model="message.msg" name="message" id="message" placeholder="Message..."></textarea>
            <button class="CTA" @click="sendMail(message)">Envoyer</button>
        </div>
    </div>
</template>

<style scoped>
</style>