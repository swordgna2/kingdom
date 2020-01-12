<template>
    <div class="dialog-container">
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
