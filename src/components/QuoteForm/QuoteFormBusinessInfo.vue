<template>
    <div>
        <quote-form-section title='About your business...' :sectionIndex="sectionIndex"
            @submit="handleSubmit" @back="$emit('back', sectionIndex)">
            <form-fieldset-text-area label='What are your company values?' :rows="3"></form-fieldset-text-area>
            <form-fieldset-text-area label='Who are your target customers?' :rows="3"></form-fieldset-text-area>
        </quote-form-section>
    </div>
</template>

<script>
import FormFieldsetTextArea from '../Form/FormFieldsetTextArea.vue'
import QuoteFormSection from './QuoteFormSection.vue'

export default {
    props: {
        sectionIndex: {
            type: Number,
            required: true
        }
    },
    components: { QuoteFormSection, FormFieldsetTextArea },
    methods: {
        handleSubmit: function () {
            this.$emit('submit', this.sectionIndex)
        }
    }
}
</script>

<style>
</style>
