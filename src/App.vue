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
import MainMenu from './components/Navigation/MainMenu.vue'
import HomeSection from './components/Home/HomeSection.vue'
import ExperiencesSection from './components/Experiences/ExperiencesSection.vue'
import ProjectsSection from './components/Projects/ProjectsSection.vue'
import ContactSection from './components/Contact/ContactSection.vue'
import ProcessSection from './components/Process/ProcessSection.vue'
import ContactForm from './components/Contact/ContactForm.vue'

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
