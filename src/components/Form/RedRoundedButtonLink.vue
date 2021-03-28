<template>
<div class="red-btn btn">
    <a :target="target" :href="href">
    {{ textContent }}
    </a>
</div>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
            required: true
        },
        textContent: {
            type: String,
            required: true
        },
        target: {
            type: String,
            required: false,
            default: '_self'
        }
    },
    methods: {
        scrollMeTo (refName) {
            var element = this.$refs[refName]
            var top = element.offsetTop

            window.scrollTo(0, top)
        }
    }
}
</script>
