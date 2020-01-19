<template>
    <div class="main-footer">
        <span @click="openStatistics" style="cursor: pointer;">Статистика</span>
        <span @click="openHelp" style="cursor: pointer;">Помощь</span>
    </div>
</template>

<script>
    import ModalData from '../assets/modalData';

    export default {
        name: 'FooterPanel',
        methods: {
            openStatistics () {
                this.$emit('openModal', ModalData['not-ready']);
            },
            openHelp () {
                this.$emit('openModal', ModalData['not-ready']);
            }
        }
    };
</script>
