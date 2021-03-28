<template>
    <fieldset class="file-upload-wrapper">
        <label>{{ label }}</label>
        <input type="file" :id="inputId" class="form-input" :name="inputId"/>
        <label :for="inputId" class="form-input file-upload-label">
            <span><img class="download-icon" src="/static/img/iconfinder_download_172460.svg"/></span>
            <span>Select or drop a file</span>
        </label>
    </fieldset>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        }
    },
    computed: {
        inputId: function () {
            return 'file-upload-input-' + this.label
        }
    }
}
</script>

<style lang='css' scoped>
@import 'form.css';
.file-upload-wrapper {
    position: relative;
}

input[type="file"] {
    opacity: 0;
    z-index: 10;
    position: relative;
}

input[type="file"], .file-upload-label {
    height: 8em;
}

.download-icon {
    width: 40px;
    margin-bottom: 0.8em;
}

.file-upload-label {
    border: 1px dashed grey;
    background: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 1.5em;
    z-index: 5;
}
</style>
