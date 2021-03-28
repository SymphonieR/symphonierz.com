<template>
    <div>
        <quote-form-section title='Let&#39;s check one last time...' :sectionIndex="sectionIndex"
            @submit="handleSubmit" @back="$emit('back', sectionIndex)" submitButtonText="Send">
        </quote-form-section>
    </div>
</template>

<script>
import QuoteFormSection from './QuoteFormSection.vue'

export default {
    props: {
        sectionIndex: {
            type: Number,
            required: true
        }
    },
    components: { QuoteFormSection },
    methods: {
        handleSubmit: function () {
            this.$emit('submit', this.sectionIndex)
        }
    }
}
</script>
