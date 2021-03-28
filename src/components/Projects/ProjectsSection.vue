<template>
    <section id="projects" class="wrapper flex-center flex-justify-center flex-align-center">
        <h1>Projects</h1>
        <div class="content">
            <div class="project-element" v-for="(currentProject) in projects" :key="currentProject.name">
                <img class="project-img" :src="currentProject.image"/>
                <div class="project-content">
                    <h3>{{ currentProject.category }}</h3>
                    <h2>{{ currentProject.name }}</h2>
                    <p>{{ currentProject.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ProjectsSection',
    data () {
        return {
            projects: [
                {
                    category: 'Mechanical design',
                    name: 'Electric skateboard kit',
                    image: '/static/img/pulley.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
                {
                    category: 'Full-stack development',
                    name: 'E-commerce website',
                    image: '/static/img/laptop.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
                {
                    category: 'Video game development',
                    name: 'Wander, rythm of silence',
                    image: '/static/img/pulley.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
            ]
        }
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
    position: relative;
    top: 4em;
}

h2 {
    font-family: 'Oswald';
    font-weight: 500;
    text-align: left;
    font-size: 2.6em!important;
    color: black;
    margin-bottom: 20px;
    margin-top: 0;
}

h3 {
    font-family: 'Montserrat';
    font-weight: 500;
    font-variant: small-caps;
    letter-spacing: 5px;
    text-transform: lowercase;
    text-align: left;
    font-size: 0.85em!important;
    color: grey;
    margin-bottom: 0;
}

p {
    line-height: 1.7em;
}

button {
    background: none;
    border: none;
    color: inherit;
}

.project-img {
    height: 300px;
}

.project-element {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.project-element:nth-child(2n+1) {
    background: white;
    flex-direction: row-reverse;
}

.project-element:nth-child(2n) {
    flex-direction: row;
}

.project-content {
    width: 30%;
}

.content {
    width: 100%;
}
</style>
