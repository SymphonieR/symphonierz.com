<template>
    <fieldset>
        <ul class="checkbox-button-wrapper">
            <li v-for="(item, index) in options" :key="item.name" class="checkbox-button-item">
                <form-checkbox-button
                :id="index"
                :label="item.name"
                :icon="item.icon"
                @select="handleCheckboxSelect"></form-checkbox-button>
            </li>
        </ul>
    </fieldset>
</template>

<script>
import FormCheckboxButton from './FormCheckboxButton.vue'

export default {
    components: { FormCheckboxButton },
    props: {
        options: {
            type: Array,
            required: true
        }
    },
    data () {
        return {
            activeButtonIdList: [0]
        }
    },
    computed: {
        computedOptions: function () {
            let options = []
            this.computedOptions.map(function (item, key) {
                options.push({
                    name: item.name,
                    icon: item.icon,
                    isActive: false
                })
            })

            return options
        }
    },
    methods: {
        handleCheckboxSelect: function (currentId) {
        }
    }
}
</script>

<style lang='css' scoped>
@import 'form.css';

.checkbox-button-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}

.checkbox-button-item {
    width: 30%;
    margin: 0.5em 4px;
}
</style>
