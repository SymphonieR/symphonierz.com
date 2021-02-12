<template>
  <div id="app" class="light-background">
        <main-menu></main-menu>
        <home-section></home-section>
        <experiences-section></experiences-section>
        <projects-section></projects-section>
        <process-section></process-section>
        <contact-form ref="test"></contact-form>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu'
import HomeSection from './components/HomeSection'
import ExperiencesSection from './components/ExperiencesSection'
import ProjectsSection from './components/ProjectsSection'
import ProcessSection from './components/ProcessSection'
import ContactForm from './components/ContactForm'

import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
    name: 'App',
    components: {
        MainMenu,
        HomeSection,
        ExperiencesSection,
        ProjectsSection,
        ProcessSection,
        ContactForm
    },
    created: function () {
        AOS.init()
    },
    methods: {
        scrollMeTo (refName) {
            console.log(this.$root)
            console.log(this.$root.$refs)
            var element = this.$root.$refs[refName]
            var top = element.offsetTop

            window.scrollTo(0, top)
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Average&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rokkitt:wght@500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

html {
    scroll-behavior: smooth;
}

* {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    font-family: 'Roboto';
    font-weight: 200;
    text-align: justify;

    color: #727689;
}

input {
    border: none;
}

ol, ul {
    list-style: none;
}

h1 {
    font-size: 2.2em;
    font-weight: 700;
    margin: 0.3em 0 0.2em 0;
    font-family: 'Bebas Neue';
    text-transform: uppercase;
    letter-spacing: 15px;
    color: black;
}

h1::after {
    display: block;
    content: "";
    height: 5px;
    width: 57px;
    background: black;
    margin: 0 auto;
    top: 10px;
    position: relative;
}

a {
    color: inherit;
    text-decoration: none;
}

.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
}

.height-100vh {
    min-height: 100vh;
}

.medium-background
{
    background-color: #586D8E;
    color: white;
}

.light-background
{
    background-color: #f2f4f9;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45%;

    padding: 1em 0 0 0;
}

.line {
    display: flex;
}

.line:last-child {
    margin-bottom: 80px;
}

.btn {
    font-family: inherit;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2em;
    text-align: center;
}

.red-btn {
    background: #c75656;
    color: white;
    font-weight: 400;
    width: 120px;

    font-size: 0.8em;
    height: 30px;

    margin: 1.5em 0.5em 0 0.5em;
}

.color-red {
    color: #c75656;
}

.color-blue {
    color: #284fc4;
}

.cursor-pointer {
    cursor: pointer;
}
</style>
