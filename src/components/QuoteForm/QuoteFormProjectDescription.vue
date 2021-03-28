<template>
    <div>
        <quote-form-section title='The core of the subject: your project' :sectionIndex="sectionIndex"
            @submit="handleSubmit" @back="$emit('back', sectionIndex)">
            <form-fieldset-input-text label='What technologies are you currently using?'></form-fieldset-input-text>
            <form-fieldset-grid elementsCount='2'>
                <form-fieldset-input-date label='When do you need your project?'></form-fieldset-input-date>
                <form-fieldset-input-text label='What is your budget?'></form-fieldset-input-text>
            </form-fieldset-grid>
            <form-fieldset-text-area label="It's time to describe your project in more details..." :rows="7"></form-fieldset-text-area>
        </quote-form-section>
    </div>
</template>

<script>
import FormFieldsetInputText from '../Form/FormFieldsetInputText.vue'
import FormFieldsetTextArea from '../Form/FormFieldsetTextArea.vue'
import FormFieldsetGrid from '../Form/FormFieldsetGrid.vue'
import QuoteFormSection from './QuoteFormSection.vue'
import FormFieldsetInputDate from '../Form/FormFieldsetInputDate.vue'

export default {
    props: {
        sectionIndex: {
            type: Number,
            required: true
        }
    },
    components: { QuoteFormSection, FormFieldsetInputText, FormFieldsetTextArea, FormFieldsetGrid, FormFieldsetInputDate },
    methods: {
        handleSubmit: function () {
            this.$emit('submit', this.sectionIndex)
        }
    }
}
</script>

<style>
</style>
