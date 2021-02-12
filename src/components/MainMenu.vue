<template>
    <nav :class="{ scrolled: isScrolled }">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#experiences">Work</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'MainMenu',
    data () {
        return {
            scrollPosition: null
        }
    },
    computed: {
        isScrolled: function () {
            return this.scrollPosition > 0
        }
    },
    methods: {
        updateScroll () {
            this.scrollPosition = window.scrollY
            console.log(this.scrollPosition)
        }
    },
    mounted () {
        window.addEventListener('scroll', this.updateScroll)
    }
}
</script>

<style scoped>
nav {
    color: #12121294;
}

.scrolled ul {
    background: white;
}

nav ul {
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;

    background-color: none;
    z-index: 10;
    border-bottom: 1px solid #f1f1f1;
}

nav li {
    margin: 1.2em 1em;
    display: inline-block;
    width: 80px;
    text-align: center;
}

nav a {
    transition-delay: 200ms;
}

nav a:hover {
    color: black;
    font-weight: 500;
}

@media screen and (max-width: 800px) {
    nav {
        display: none;
    }
}
</style>
