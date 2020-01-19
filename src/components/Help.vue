<template>
    <font-awesome-icon icon="info-circle" @click.stop="openModal"/>
</template>

<script>
    export default {
        name: 'Help',
        props: {
            code: undefined
        },
        methods: {
            openModal () {
                this.$emit('openModal', {
                    body: this.code
                });
            }
        }
    };
</script>
