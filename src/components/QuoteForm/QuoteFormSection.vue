<template>
    <form>
        <h2><span class="number">{{ sectionIndex + 1 }}</span>{{ title }}</h2>
        <slot></slot>
        <div class="button-wrapper">
            <input type="button" value="Go back" @click.prevent="$emit('back')" v-if="shouldDisplayBackButton"/>
            <input type="submit" :value="submitButtonText" @click.stop.prevent="$emit('submit')"/>
        </div>
    </form>
</template>

<script>
export default {
    props: {
        sectionIndex: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        shouldDisplayBackButton: {
            type: Boolean,
            required: false,
            default: true
        },
        submitButtonText: {
            type: String,
            required: false,
            default: 'Next'
        }
    }
}
</script>

<style lang='css' scoped>
h2 {
    margin: 1em 0 0.5em 0;
    font-size: 1.25em;
    font-family: 'Oswald';
    font-weight: 500;
    color: black;
    display: flex;
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

.button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 2em;
}

input[type="submit"], input[type="button"] {
    font-size: 0.85em;
    font-weight: 500;
    border-radius: 3px;
    width: 100px;
    height: 30px;
    text-align: center;
    margin: 0 5px;
}

input[type="submit"] {
    background: #2b3ea6;
    color: white;
}

input[type="button"] {
    background: none;
    border: 1px solid grey;
}
</style>
