<template>
    <div>
        <quote-form-section title='Which service(s) do you need?' :sectionIndex="sectionIndex" @submit="handleSubmit"
            :shouldDisplayBackButton="false">
            <form-fieldset-checkbox-button-list :options="services"></form-fieldset-checkbox-button-list>
        </quote-form-section>
    </div>
</template>

<script>
import FormFieldsetCheckboxButtonList from '../Form/FormFieldsetCheckboxButtonList.vue'
import QuoteFormSection from './QuoteFormSection.vue'

export default {
    props: {
        sectionIndex: {
            type: Number,
            required: true
        }
    },
    components: { QuoteFormSection, FormFieldsetCheckboxButtonList },
    data () {
        return {
            services: [
                {
                    name: '3D modelling',
                    icon: '/static/img/iconfinder_45_turn_modeling_model_3d_printer_technology_gadget_4854741.svg'
                },
                {
                    name: 'Webdesign',
                    icon: '/static/img/iconfinder_21_tablet_designer_drawing_brand_branding_design_typography_4488484.svg'
                },
                {
                    name: 'Front-end',
                    icon: '/static/img/iconfinder_50_chat_bot_messenger_code_development_developer_programmer_4479518.svg'
                },
                {
                    name: 'Back-end',
                    icon: '/static/img/iconfinder_19_server_network_cloud_technology_repository_storage_4818434.svg'
                },
                {
                    name: 'Game dev',
                    icon: '/static/img/iconfinder_10_gamepad_game_gamer_cybersport_gaming__4747693.svg'
                },
                {
                    name: 'Data science',
                    icon: '/static/img/iconfinder_36_statistics_metric_optimization_big_data_analytics_analyst_4797835.svg'
                }
            ]
        }
    },
    methods: {
        handleSubmit: function () {
            this.$emit('submit', this.sectionIndex)
        }
    }
}
</script>

<style lang='css'>
.quote-content {
    width: 70%;
}
</style>
