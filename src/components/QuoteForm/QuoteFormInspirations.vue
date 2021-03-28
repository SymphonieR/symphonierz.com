<template>
    <div>
        <quote-form-section title='Finally, your inspirations...' :sectionIndex="sectionIndex"
            @submit="handleSubmit" @back="$emit('back', sectionIndex)">
            <form-fieldset-text-area label="Have you already found designed that you liked? Please paste your links here:" :rows="5"></form-fieldset-text-area>
            <form-fieldset-input-file label="Do you have any additional documents, mockups, etc?"></form-fieldset-input-file>
        </quote-form-section>
    </div>
</template>

<script>
import FormFieldsetInputFile from '../Form/FormFieldsetInputFile.vue'
import FormFieldsetTextArea from '../Form/FormFieldsetTextArea.vue'
import QuoteFormSection from './QuoteFormSection.vue'

export default {
    props: {
        sectionIndex: {
            type: Number,
            required: true
        }
    },
    components: { FormFieldsetTextArea, FormFieldsetInputFile, QuoteFormSection },
    methods: {
        handleSubmit: function () {
            this.$emit('submit', this.sectionIndex)
        }
    }
}
</script>

<style>
</style>
