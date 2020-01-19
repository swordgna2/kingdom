<template>
    <font-awesome-icon icon="info-circle" @click.stop="openModal"/>
</template>

<script>
    import ModalData from '../assets/modalData';

    export default {
        name: 'HelpIcon',
        props: {
            code: undefined
        },
        methods: {
            openModal () {
                this.$emit('openModal', ModalData[this.code]);
            }
        }
    };
</script>
