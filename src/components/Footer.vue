<script setup>
</script>

<template>
    <footer>
    <h1>FOOTER</h1>
        <div class="social">
            <a href="https://www.linkedin.com/in/olivier-bordage-48b3a9aa/" target="_blank" rel="external">
                <img src="@/assets/img/linkedin-48.png" alt="Logo LinkedIn">
            </a>
            <a href="https://github.com/Olbor-dev" target="_blank" rel="external">
                <img src="@/assets/img/github-48.png" alt="Logo GitHub">
            </a>
            <address>
                <strong>Olivier Bordage</strong><br>
                Olbor-dev<br>
                Montcuq en quercy blanc (46800)<br>
                <a href="mailto:olbor.dev@gmail.com">Mail : olbor.dev@gmail.com</a><br>
                <a href="tel:+33668454664">Tel : 06 68 45 46 64</a>
            </address>
        </div>
        <div>
            <p><small>Mise à jour du site le <time datetime="2024-11-29">29 novembre 2024</time></small></p>
            <p>© Copyright Olivier Bordage</p>
        </div>
    </footer>
</template>

<style scoped>

footer {
    display: flex;
    flex-direction: column;
    background-color: beige;
}

h1 {
    display: none;
}

.social {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
    margin-top: 10px;
}

p {
    text-align: center;
    margin: 10px;
}
</style>