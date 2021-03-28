<template>
    <fieldset :class="className">
        <slot></slot>
    </fieldset>
</template>

<script>
export default {
    props: {
        elementsCount: {
            type: String,
            required: true
        }
    },
    computed: {
        className: function () {
            return 'form-grid grid-' + this.elementsCount
        }
    }
}
</script>

<style lang='css' scoped>
@import 'form.css';

.form-grid {
    display: flex;
}

.form-grid fieldset {
    flex: 1;
}

.grid-2 > fieldset:first-child {
    margin-right: 0.3em;
}

.grid-2 > fieldset:last-child {
    margin-left: 0.3em;
}

</style>
