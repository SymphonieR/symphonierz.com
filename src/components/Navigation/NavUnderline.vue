<template>
    <ul class="nav-underline">
        <li class="nav-underline-element" v-for="element in elements" :key="element">{{ element }}</li>
    </ul>
</template>

<script>
export default {
    name: 'NavUnderline',
    props: {
        elements: Array
    }
}
</script>

<style>
.nav-underline {
    display: flex;
    justify-content: center;
    margin: 0.5em 0 3em 0;
}

.nav-underline-element {
    padding: 0 30px 10px 30px;
    border-bottom: 3px solid #bcbcbc6b;
    color: #6c6c6c;
}

.nav-underline-element:first-child {
    border-bottom-color: black;
    color: black;
}
</style>
