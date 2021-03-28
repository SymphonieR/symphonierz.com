<template>
    <nav>
        <div class="hamburger hamburger-container">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
</template>

<script>
export default {
}
</script>

<style scoped>
.hamburger {
    position: absolute;
    top: 30px;
    left: 30px;
    width: 45px;
    height: 45px;
    background: #2b3ea6;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding: 11px 0;
}

.hamburger span {
    display: block;
    background: white;
    height: 3px;
    border-radius: 2px;
    width: 60%;
}
</style>
