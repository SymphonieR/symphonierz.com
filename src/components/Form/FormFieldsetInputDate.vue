<template>
    <fieldset>
        <label>{{ label }}</label>
        <input type="date" class="form-input"/>
    </fieldset>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang='css' scoped>
@import 'form.css';
</style>
