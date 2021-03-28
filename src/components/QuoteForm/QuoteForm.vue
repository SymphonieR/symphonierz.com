<template>
    <div>
        <component :is="activeForm" :sectionIndex="activeFormIndex" @submit="handleSubmit" @back="handleBack"></component>
    </div>
</template>

<script>
import QuoteFormServices from './QuoteFormServices.vue'
import QuoteFormBusinessInfo from './QuoteFormBusinessInfo.vue'
import QuoteFormProjectDescription from './QuoteFormProjectDescription.vue'
import QuoteFormInspirations from './QuoteFormInspirations.vue'
import QuoteFormContactInfo from './QuoteFormContactInfo.vue'
import QuoteFormSummary from './QuoteFormSummary.vue'

export default {
    components: {
        QuoteFormServices,
        QuoteFormBusinessInfo,
        QuoteFormProjectDescription,
        QuoteFormInspirations,
        QuoteFormContactInfo,
        QuoteFormSummary
    },
    data () {
        return {
            formComponents: [
                'QuoteFormServices',
                'QuoteFormContactInfo',
                'QuoteFormBusinessInfo',
                'QuoteFormProjectDescription',
                'QuoteFormInspirations',
                'QuoteFormSummary'
            ],
            activeFormIndex: 0
        }
    },
    computed: {
        activeForm: function () {
            return this.formComponents[this.activeFormIndex]
        }
    },
    methods: {
        handleSubmit: function () {
            if (this.activeFormIndex < this.formComponents.length - 1) {
                this.activeFormIndex++
            }
        },
        handleBack: function () {
            if (this.activeFormIndex > 0) {
                this.activeFormIndex--
            }
        }
    }
}
</script>
