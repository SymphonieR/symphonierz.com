<template>
  <div id="app" class="light-background">
        <main-menu></main-menu>
        <home-section></home-section>
        <experiences-section></experiences-section>
        <projects-section></projects-section>
        <contact-section></contact-section>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu'
import HomeSection from './components/HomeSection'
import ExperiencesSection from './components/ExperiencesSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
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
        ContactForm,
        ContactSection
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
