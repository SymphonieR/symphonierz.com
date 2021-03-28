<template>
    <div>
        <sandwich-menu></sandwich-menu>
        <div class="wrapper height-100vh light-background">
            <nav-underline :elements="menu"></nav-underline>
            <div class="width-65 flex-row">
                <quote-form class="quote-form flex-1"></quote-form>
                <side-nav></side-nav>
            </div>
        </div>
    </div>
</template>

<script>
import NavUnderline from './components/Navigation/NavUnderline.vue'
import QuoteForm from './components/QuoteForm/QuoteForm.vue'
import SideNav from './components/Navigation/SideNav.vue'
import SandwichMenu from './components/Navigation/SandwichMenu.vue'

export default {
    components: { NavUnderline, QuoteForm, SideNav, SandwichMenu },
    data () {
        return {
            menu: [
                'Request a quote',
                'Upfront 50% payment',
                'Track project progress',
                'Final 50% payment',
                'Get deliverables and enjoy'
            ]
        }
    }
}
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 2em;
}

.quote-form {
    padding: 0 3em;
}
</style>
