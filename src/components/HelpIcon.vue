<template>
    <font-awesome-icon icon="info-circle" @click.stop="openModal"/>
</template>

<script>
    export default {
        name: 'HelpIcon',
        props: {
            code: undefined
        },
        methods: {
            openModal () {
                this.$emit('openModal', {
                    header: this.code,
                    body: this.code
                });
            }
        }
    };
</script>
