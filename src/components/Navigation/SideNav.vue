<template>
    <div class="side-nav-wrapper">
        <ul class="process-vertical">
            <li class="process-vertical-element"><span class="process-vertical-element-step"></span>Services</li>
            <li class="process-vertical-element"><span class="process-vertical-element-step"></span>Contact info</li>
            <li class="process-vertical-element"><span class="process-vertical-element-step"></span>Business info</li>
            <li class="process-vertical-element"><span class="process-vertical-element-step"></span>Project description</li>
            <li class="process-vertical-element"><span class="process-vertical-element-step"></span>Inspirations</li>
            <li class="process-vertical-element"><span class="process-vertical-element-step"></span>Summary</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SideNav'
}
</script>

<style scoped>
.side-nav-wrapper {
    background: white;
    border-radius: 10px;
    padding: 3.5em 3.5em;
    height: 450px;
}

.process-vertical-element:after {
    display: block;
    content: "";
    height: calc(100% + 0px);
    width: 3px;
    background: #e9ebed;
    position: relative;
    top: 0px;
}

.process-vertical-element:last-child:after {
    display: none;
}

.process-vertical-element {
    height: 50px;
    width: 150px;
    color: #a6abafe8;
    font-size: 0.85em;
}

.process-vertical-element:first-child {
    color: #31343bcc;
    font-weight: 500;
}

.process-vertical-element:first-child .process-vertical-element-step {
    background: #116fff;
}

.process-vertical-element:first-child .process-vertical-element-step:before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 4px solid #116fff54;
    position: relative;
    top: -4px;
    left: -4px;
}

.process-vertical-element-step {
    background: #e9ebed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: inline-block;
    z-index: 10;
    position: relative;
    top: 10px;
    left: -8px;
}
</style>
