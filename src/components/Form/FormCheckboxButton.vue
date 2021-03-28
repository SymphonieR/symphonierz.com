<template>
    <button :class="[isActive ? 'checkbox-button-activated' : '', 'checkbox-button']" v-on:click.prevent="handleSelect">
        <input type="checkbox" class="checkbox" :id="label">
        <span class="checkbox-button-checkmark"></span>
        <div class="checkbox-button-content">
            <img class="checkbox-button-icon" :src="icon">
            <label class="checkbox-button-label" :for="label">{{ label }}</label>
        </div>
    </button>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            isActive: false
        }
    },
    created: function () {
        if (this.id === 0) {
            this.isActive = true
        }
    },
    methods: {
        handleSelect: function () {
            this.isActive = !this.isActive
            this.$emit('select', this.id)
        }
    }
}
</script>

<style lang='css' scoped>
@import 'form.css';

.checkbox-button {
    width: 100%;
    border: 1px solid #eeebeb;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    background: white;
}

.checkbox {
    visibility: hidden;
    position: relative;
    top: 20px;
}

.checkbox-button-checkmark {
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

.checkbox-button-label {
    margin: 1em 0 0 0;
    font-weight: 600;
}

.checkbox-button-activated .checkbox-button-checkmark {
    background: #2b3ea6e3;
    border: 1px solid #2b3ea6e3;
}

.checkbox-button-activated .checkbox-button-checkmark::after {
    content: "\2713";
    color: white;
    font-size: 1em;
    bottom: 3px;
    position: relative;
    left: 2px;
}

.checkbox-button-activated {
    border: 1px solid #2c3fa7ab;
    box-shadow: 2px 2px 1px #2b3ea640;
}

.checkbox-button-icon {
    width: 50px;
}

.checkbox-button-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 30px;
    width: 110px;
}
</style>
