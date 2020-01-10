<template>
    <div id="dialog">
        <div>{{ dialogData.header }}</div>
        <div>{{ dialogData.message }}</div>
    </div>
</template>

<script>
    export default {
        name: 'DialogPanel',
        props: {
            dialogData: Object
        }
    }
</script>

<style scoped>
    #dialog {
        position: relative;
        padding: 10px;
        background: white;
        flex: 1;
    }
</style>
