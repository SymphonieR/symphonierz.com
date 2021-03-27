<template>
    <section id="contact" class="wrapper medium-background">
        <h1>Let's talk!</h1>
        <p id="subtitle">Are you ready? Let's talk about your project. First, do you want to hire a freelancer or an employee?</p>
        <div id="contact-form-wrapper">
            <ul class="contact-selection">
                <li class="contact-selection-element">Hire a freelancer</li>
                <li class="contact-selection-element">Hire an employee</li>
                <li class="contact-selection-element">Other request</li>
            </ul>
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
                <h2><span class="number">1</span>Which service(s) do you need?</h2>
                <fieldset>
                    <ul id="services-wrapper">
                        <li v-for="(service) in services" :key="service.name" class="service-element">
                            <button class="service-button" v-on:click="toggleService">
                                <input type="checkbox" class="service-checkbox" :id="service.name">
                                <span class="service-checkmark"></span>
                                <div class="service-content">
                                    <img class="service-icon" :src="service.icon">
                                    <label class="service-label" :for="service.name">{{ service.name }}</label>
                                </div>
                            </button>
                        </li>
                    </ul>
                </fieldset>
                <h2><span class="number">2</span>A little bit about you...</h2>
                <fieldset>
                    <label>Full Name</label>
                    <input type="text" />
                </fieldset>
                <fieldset>
                    <label>Company</label>
                    <input type="text" />
                </fieldset>
                <fieldset>
                    <label>Email</label>
                    <input type="text" />
                </fieldset>
                <h2><span class="number">3</span>About your business...</h2>
                <fieldset>
                    <label>What are your company values?</label>
                    <input type="text" />
                </fieldset>
                <fieldset>
                    <label>Who are your target customers?</label>
                    <input type="text" />
                </fieldset>
                <h2><span class="number">4</span>The core of the subject: your project</h2>
                <fieldset>
                    <label>What technologies are you currently using?</label>
                    <input type="text" />
                </fieldset>
                <fieldset class="grid-2">
                    <fieldset>
                        <label>When do you need your project?</label>
                        <input type="date" />
                    </fieldset>
                    <fieldset>
                        <label>What is your budget?</label>
                        <input type="text" />
                    </fieldset>
                </fieldset>
                <fieldset>
                    <label>It's time to describe your project in more details...</label>
                    <textarea rows="10"></textarea>
                </fieldset>
                <h2><span class="number">5</span>Finally, your inspirations...</h2>
                <fieldset>
                    <label>Have you already found designed that you liked? Please paste your links here:</label>
                    <input type="text" />
                </fieldset>
                <fieldset id="file-dragger">
                    <label>Do you have any additional documents, mockups, etc?</label>
                    <input type="file" id="file-upload" name="file-upload"/>
                    <label for="file-upload" id="file-upload-label">
                        <span><img class="download-icon" src="/static/img/iconfinder_download_172460.svg"/></span>
                        <span>Select or drop a file</span>
                    </label>
                </fieldset>
                <input type="submit" class="red-btn btn" value="Send quote request"/>
            </form>
        </div>
    </section>
</template>

<script>
import ProcessSection from './ProcessSection'

export default {
    components: { ProcessSection },
    name: 'ContactSection',
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

h2 {
    margin: 1em 0 0.5em 0;
    font-size: 1.25em;
    font-family: 'Oswald';
    font-weight: 500;
    color: black;
    display: flex;
}

.contact-selection {
    display: flex;
    justify-content: center;
    margin: 0.5em 0 3em 0;
}

.contact-selection-element {
    padding: 0 30px 10px 30px;
    border-bottom: 3px solid #bcbcbc6b;
    color: #6c6c6c;
}

.contact-selection-element:first-child {
    border-bottom-color: black;
    color: black;
}

#services-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}

.service-element {
    width: 30%;
    margin: 0.5em 4px;
}

.service-button {
    width: 100%;
    border: 1px solid #eeebeb;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    background: white;
}

.service-checkbox {
    visibility: hidden;
    position: relative;
    top: 20px;
}

.service-checkmark {
    border: 1px solid lightgrey;
    display: block;
    height: 15px;
    width: 15px;
    border-radius: 3px;
    margin-right: 10px;
    position: relative;
    top: -40px;
    left: -20px;
}

.service-label {
    margin: 1em 0 0 0;
    font-weight: 600;
}

.service-checkbox:checked + .service-checkmark {
    background: #2b3ea6e3;
    border: 1px solid #2b3ea6e3;
}

.service-checkbox:checked + .service-checkmark::after {
    content: "\2713";
    color: white;
    font-size: 0.8em;
    bottom: 4px;
    position: relative;
    left: 2px;
}

.service-button.checked {
    border: 1px solid #2c3fa7ab;
    box-shadow: 2px 2px 1px #2b3ea640;
}

.service-icon {
    width: 50px;
}

.service-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 30px;
    width: 110px;
}

.number {
    display: inline-block;
    background: #2b3ea6;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font: inherit;
    color: white;
    margin-right: 10px;
    font-size: 0.8em;
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

label {
    display: block;
    margin-bottom: 0.3em;
    font-size: 0.9em;
}

input[type="text"],
input[type="file"], #file-upload-label,
input[type="date"], textarea {
    width: 100%;
    border: none;
    background: #e2e2e261;
    padding: 0.5em 0.7em;
    border-radius: 5px;

    font-weight: 500;
}

input[type="file"] {
    opacity: 0;
    z-index: 10;
    position: relative;
}

input[type="file"], #file-upload-label {
    height: 8em;
}

.download-icon {
    width: 40px;
    margin-bottom: 0.8em;
}

#file-upload-label {
    border: 1px dashed grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#file-dragger {
    position: relative;
}

#file-upload-label {
    position: absolute;
    top: 1.5em;
    z-index: 5;
}

input[type="submit"] {
    margin: 1em auto;
    position: relative;
    top: 1em;
}

textarea {
    resize: none;
}

fieldset {
    border: none;
}

form > fieldset {
    margin: 1em 0 1em 0;
}

.grid-2 {
    display: flex;
}

.grid-2 fieldset {
    flex: 1;
}

.grid-2 > fieldset:first-child {
    margin-right: 0.3em;
}

.grid-2 > fieldset:last-child {
    margin-left: 0.3em;
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
