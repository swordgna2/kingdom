<template>
    <v-app id="inspire">
        <div class="main-wrapper">
            <header-panel
                v-if="myKingdom.year"
                :my-kingdom="myKingdom"
                @openModal="openModal"
            />
            <div class="main-container">
                <div class="main-container-inner">
                    <log-panel ref="log"/>
                    <dialog-panel
                        :my-kingdom="computedKingdom"
                        @set-kingdom-with-code="setKingdomWithCode"
                        @log="log"
                        @openModal="openModal"
                    />
                    <statistics-panel
                        :my-kingdom="myKingdom"
                        @openModal="openModal"
                    />
                </div>
            </div>
            <footer-panel @openModal="openModal"/>
            <modal ref="modal"/>
        </div>
    </v-app>
</template>

<script>
    import Vue from 'vue';
    import Vuetify from 'vuetify/lib';
    import HeaderPanel from './components/HeaderPanel';
    import LogPanel from './components/LogPanel';
    import DialogPanel from './components/DialogPanel';
    import StatisticsPanel from './components/StatisticsPanel';
    import FooterPanel from './components/FooterPanel';
    import Modal from './components/Modal';
    import KingdomClass from './classes/KingdomClass';

    export default {
        name: 'app',
        vuetify: new Vuetify(),
        components: {
            HeaderPanel,
            LogPanel,
            DialogPanel,
            StatisticsPanel,
            FooterPanel,
            Modal
        },
        data () {
            return {
                myKingdom: new KingdomClass(),
                isModalVisible: false,
                show: false
            };
        },
        computed: {
            computedKingdom: function () {
                return this.myKingdom;
            }
        },
        created () {
            KingdomClass.autoSetKingdoms();
        },
        methods: {
            setKingdomWithCode (kingdomCode) {
                const kingdom = KingdomClass.kingdoms[kingdomCode];
                const kingdomClassKeys = Object.keys(kingdom);
                for (let i = 0; i < kingdomClassKeys.length; i++) {
                    const key = kingdomClassKeys[i];
                    Vue.set(this.myKingdom, key, kingdom[key]);
                }
            },
            log (message) {
                this.$refs.log.addMessage(message);
            },
            openModal (data) {
                this.$refs.modal.openModal(data);
            }
        }
    };
</script>
