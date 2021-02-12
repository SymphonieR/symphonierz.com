<template>
    <section id="home" class="wrapper height-100vh">
        <div class="content">
            <logo-image id="logo"></logo-image>
            <h1>Building for your needs</h1>
            <p>
                I am a jack of all trades and build softwares, websites, games, to 3D models. I believe in elegance and simplicity over complexity.
                I will use the best tool for your need, not the latest trendy technology for the sake of buzzword.
            </p>
            <p>
                My commitment is straightforward: makes your idea happens.
            </p>
            <div id="button-wrapper">
                <red-rounded-button-link text-content="Hire me" href="#contact"></red-rounded-button-link>
                <red-rounded-button-link text-content="Download CV" href=""></red-rounded-button-link>
            </div>
            <a href="#experiences" id="scroll">Scroll</a>
        </div>
    </section>
</template>

<script>
import RedRoundedButtonLink from './RedRoundedButtonLink.vue'
import LogoImage from './LogoImage.vue'

export default {
    components: {
        RedRoundedButtonLink,
        LogoImage
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500&display=swap');

h1 {
    font-size: 1.5em;
    font-family: Montserrat;
    text-transform: lowercase;
    font-variant: small-caps;
    letter-spacing: 5px;
    font-weight: 500;
    text-align: center;
    margin-top: 1em;
}

p {
    font-size: 1.2em;
    margin: 0.5em 0;
}

.content {
    width: 35%;
}

#logo {
  height: 250px;
}

#button-wrapper {
    display: flex;
    justify-content: center;
}

#scroll {
    text-transform: uppercase;
    position: absolute;
    bottom: 5em;
    display: inline-block;
    left: calc(50% - 40px);
    font-size: 0.8em;
    font-weight: 500;
    letter-spacing: 1px;
    width: 80px;
    text-align: center;
    animation: bounce 0.8s infinite alternate;
}

#scroll::before {
    content: "\276E";
    font-size: 3.5em;
    position: absolute;
    top: 5px;
    left: calc(50% - 15px);
    transform: rotate(-90deg);
}

@keyframes bounce {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-5px);
  }
}

@media screen and (max-width: 1200px) {
  .content {
    width: 50%;
  }
}

@media screen and (max-width: 800px) {
  .content {
    width: 75%;
  }
}

</style>
