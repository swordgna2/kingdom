<template>
    <div class="main-wrapper">
        <!--<p>Have a crown: <font-awesome-icon icon="crown"/></p>-->
        <HeaderPanel
            v-bind:reign="reign"
            v-bind:kingdom="myKingdom"
        />
        <div class="main-container">
            <div class="main-container-inner">
                <LogPanel/>
                <DialogPanel
                    v-bind:dialog-data="dialogData"
                />
                <StatisticsPanel/>
                <button
                    type="button"
                    class="btn"
                    @click="showModal"
                >
                    Open Modal!
                </button>

                <modal
                    v-show="isModalVisible"
                    @close="closeModal"
                />
            </div>
        </div>
        <FooterPanel/>
    </div>
</template>

<script>
    import HeaderPanel from './components/HeaderPanel';
    import LogPanel from './components/LogPanel';
    import DialogPanel from './components/DialogPanel';
    import StatisticsPanel from './components/StatisticsPanel';
    import Modal from './components/Modal';
    import FooterPanel from './components/FooterPanel';
    import ReignClass from './classes/ReignClass';
    import KingdomClass from './classes/KingdomClass';

    export default {
        name: 'app',
        components: { HeaderPanel, LogPanel, DialogPanel, StatisticsPanel, Modal, FooterPanel },
        data () {
            return {
                dialogData: {
                    header: 'Название королевства',
                    message: 'Выберите название Вашего королевства'
                },
                reign: new ReignClass(),
                myKingdom: new KingdomClass(),
                isModalVisible: false
            };
        },
        methods: {
            showModal () {
                this.isModalVisible = true;
            },
            closeModal () {
                this.isModalVisible = false;
            }
        },
        created () {
            this.myKingdom.autoSetKingdoms();
        }
    };
</script>
