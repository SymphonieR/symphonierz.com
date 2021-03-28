<template>
    <fieldset>
        <label>{{ label }}</label>
        <textarea class='form-input' :rows="rows"/>
    </fieldset>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        rows: {
            type: Number,
            required: true
        }
    }
}
</script>

<style lang='css' scoped>
@import 'form.css';

textarea {
    resize: none;
    height: auto!important;
}
</style>
