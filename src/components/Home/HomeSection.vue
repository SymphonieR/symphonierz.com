<template>
    <section id="home" class="wrapper flex-column flex-justify-center flex-align-center height-100vh">
        <div class="content">
            <logo-image id="logo"></logo-image>
            <p id="moto">Building for your needs</p>
            <p>
                I believe in elegance and simplicity over complexity.
                I will use the best tool for your need, not the latest trendy technology for the sake of buzzword.
            </p>
        </div>
    </section>
</template>

<script>
import LogoImage from './LogoImage.vue'

export default {
    components: {
        LogoImage
    }
}
</script>
<style scoped>
#moto {
    font-size: 1.4em;
    font-family: Montserrat;
    text-transform: lowercase;
    font-variant: small-caps;
    letter-spacing: 7px;
    font-weight: 500;
    text-align: center;
    margin-top: 1em;
    color:#070748 !important;
}

p {
    font-size: 0.95em;
    margin: 0.5em 0;
    line-height: 25px;
    color: #010108a3 !important;
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
