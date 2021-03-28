<template>
    <div>
        <quote-form-section title='Who am I talking to?' :sectionIndex="sectionIndex"
            @submit="handleSubmit" @back="$emit('back', sectionIndex)">
            <form-fieldset-input-text label='Full Name'></form-fieldset-input-text>
            <form-fieldset-input-text label='Email'></form-fieldset-input-text>
            <form-fieldset-input-text label='Company'></form-fieldset-input-text>
        </quote-form-section>
    </div>
</template>

<script>
import FormFieldsetInputFile from '../Form/FormFieldsetInputFile.vue'
import FormFieldsetInputText from '../Form/FormFieldsetInputText.vue'
import QuoteFormSection from './QuoteFormSection.vue'

export default {
    props: {
        sectionIndex: {
            type: Number,
            required: true
        }
    },
    components: { QuoteFormSection, FormFieldsetInputFile, FormFieldsetInputText },
    methods: {
        handleSubmit: function () {
            this.$emit('submit', this.sectionIndex)
        }
    }
}
</script>

<style>
</style>
