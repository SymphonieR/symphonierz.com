<template>
    <section id="process" class="wrapper medium-background">
        <h1>Work process</h1>
        <ul id="process-step-list">
            <li v-for="(currentStep, index) in steps" :key="currentStep.name" class="process-step-element"
            data-aos="zoom-in" data-aos-duration="300">
                <div class="process-icon">
                    <img :src="currentStep.icon"/>
                </div>
                <h2>{{ index + 1 }}. {{ currentStep.name }}</h2>
                <p>{{ currentStep.description }}</p>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'ProcessSection',
    data () {
        return {
            steps: [
                {
                    name: 'Describe your idea',
                    icon: '/static/img/lightbulb.svg',
                    description: `Describe your idea, your requirements and your constraints through our online form`
                },
                {
                    name: 'Quotation and plan',
                    icon: '/static/img/money.svg',
                    description: `After 2 days, I will come back to you with a quotation and a plan for your project`
                },
                {
                    name: 'Design',
                    icon: '/static/img/document-gear.svg',
                    description: `After upfront payment, I will provide a first design in 1 week. 
                    I will iterate on this design from your feedbacks`
                },
                {
                    name: 'Implementation',
                    icon: '/static/img/sent-mail.svg',
                    description: `The implementation will follow the validated design. 
                    The product will be yours after final payment`
                }
            ]
        }
    }
}
</script>

<style scoped>
#process {
    padding-top: 3em;
    color: white!important;
}

#process-step-list {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
}

.process-step-element {
    width: 250px;
    margin: 2em 1em;
    padding: 4em 2em 2em 2em;
    border-radius: 10px;
}

.process-icon {
    width: 5em;
    margin: 0 auto;
}

.process-step-element h2 {
    margin: 1em 0 0.5em 0;
    font-size: 1.25em;
    font-family: 'Oswald';
    font-weight: 500;
    color: white;
}

h1, p {
    color: white;
}

h1::after {
    background: white;
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
