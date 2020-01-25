<template>
    <font-awesome-icon icon="info-circle" @click.stop="openModal" :title="modalData.header"/>
</template>

<script>
    import ModalData from '../assets/modalData';

    export default {
        name: 'helpIcon',
        props: {
            code: undefined
        },
        data () {
            return {
                modalData: ModalData[this.code] || {}
            };
        },
        methods: {
            openModal () {
                this.$emit('openModal', this.modalData);
            }
        }
    };
</script>
