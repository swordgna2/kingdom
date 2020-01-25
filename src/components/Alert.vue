<template>
    <div class='alert success'>
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'alert'
    };
</script>

<style scoped>
    .alert {
        padding: 12px 20px;
        border-radius: 5px;
        border: 1px solid transparent;
        font-size: 16px;
    }

    .success {
        background-color: #dff0d8;
        border-color: #d0e9c6;
        color: #3c763d;
    }
</style>
