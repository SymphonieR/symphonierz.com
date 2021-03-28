<template>
    <section id="contact" class="wrapper flex-column flex-justify-center flex-align-center medium-background">
        <h1>Let's talk!</h1>
        <p id="subtitle">Are you ready? Let's talk about your project. First, do you want to hire a freelancer or an employee?</p>
        <div id="contact-form-wrapper">
            <nav-underline :elements="menu"></nav-underline>
            <form>
                <p id="freelancer" class="black-text">
                    Super! I would love to hear about your idea. Let's take some time to discuss your needs and visions.
                    I will come back to you in one week with a quote after receiving this form. You will be able to track the progress
                    of your project from this page at anytime.
                </p>
                <ul class="process">
                    <li class="process-element"><span class="process-element-step"></span>Request a quotation</li>
                    <li class="process-element"><span class="process-element-step"></span>Upfront 50% payment</li>
                    <li class="process-element"><span class="process-element-step"></span>Track project progress</li>
                    <li class="process-element"><span class="process-element-step"></span>Final 50% payment</li>
                    <li class="process-element"><span class="process-element-step"></span>Final results!</li>
                </ul>
                <input type="submit" class="red-btn btn" value="Send quote request"/>
            </form>
        </div>
    </section>
</template>

<script>
import ProcessSection from '../Process/ProcessSection.vue'
import NavUnderline from '../Navigation/NavUnderline.vue'

export default {
    components: { ProcessSection, NavUnderline },
    name: 'ContactSection',
    data () {
        return {
            menu: [
                'Hire a freelancer',
                'Hire an employee',
                'Other request'
            ],
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
        toggleService: function (event) {
            console.log(event)
        }
    }
}
</script>

<style scoped>
.black-text {
    color: grey;
}

#contact {
    padding: 3em 0;
    color: white!important;
}

#freelancer {
    width: 80%;
    margin: 0 auto;
}

.process {
    display: flex;
    justify-content: center;
    margin: 2em 0;
}

.process-element:after {
    content: "";
    width: calc(100% + 20px);
    display: block;
    height: 3px;
    background: #e9ebed;
    position: relative;
    bottom: calc(3em - 2px);
    left: 50%;
}

.process-element:last-child:after {
    display: none;
}

.process-element {
    margin: 0 10px;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #a6abafe8;
    font-size: 0.85em;
}

.process-element:first-child {
    color: #31343bcc;
    font-weight: 500;
}

.process-element:first-child .process-element-step {
    background: #116fff;
}

.process-element:first-child .process-element-step:before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 4px solid #116fff54;
    position: relative;
    top: -4px;
    left: -4px;
}

.process-element-step {
    background: #e9ebed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: block;
    z-index: 10;
    margin-bottom: 1em;
}

h1, #subtitle {
    color: white;
}

h1 {
    letter-spacing: 2px;
}

#subtitle {
    margin: 2em;
    width: 35%;
}

h1::after {
    background: white;
}

#contact-form-wrapper {
    background: white;
    width: 70%;
    border-radius: 10px;

    padding: 2em 5em;
}

select {
    background: transparent;
    border: none;
    font-size: inherit;
    font-family: inherit;
    color: white;
    font-weight: bold;
    border-bottom: 2px solid white;
    padding-bottom: 2px;
}

select {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
}

@media screen and (max-width: 1200px) {
    .process-step-element {
        width: 400px;
        padding-bottom: 0;
        padding-top: 0em;
    }
}

@media screen and (max-width: 600px) {
    .process-step-element {
        width: 320px;
    }
}
</style>
