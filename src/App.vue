<template>
    <div class="main-wrapper">
        <HeaderPanel
            v-bind:kingdom="myKingdom"
        />
        <div class="main-container">
            <div class="main-container-inner">
                <LogPanel ref="log"/>
                <DialogPanel
                    :my-kingdom="computedKingdom"
                    @set-kingdom-with-code="setKingdomWithCode"
                    @log="log"
                />
                <StatisticsPanel/>
                <!--<button
                    type="button"
                    class="btn"
                    @click="showModal"
                >
                    Open Modal!
                </button>
                <modal
                    v-show="isModalVisible"
                    @close="closeModal"
                >
                    <template v-slot:header="{ userText, userText1 }">
                        {{ userText('Hello') }}
                        {{ userText1('Hello1') }}
                    </template>
                    <template v-slot:body="{ bodyHtml }">
                        {{ bodyHtml }}
                    </template>
                    <template v-slot:footer="{ footerHtml }">
                        {{ footerHtml('footer HTML1') }}
                    </template>
                </modal>-->
            </div>
        </div>
        <FooterPanel/>
    </div>
</template>

<script>
    import Vue from 'vue';
    import HeaderPanel from './components/HeaderPanel';
    import LogPanel from './components/LogPanel';
    import DialogPanel from './components/DialogPanel';
    import StatisticsPanel from './components/StatisticsPanel';
    import FooterPanel from './components/FooterPanel';
    import KingdomClass from './classes/KingdomClass';

    export default {
        name: 'app',
        components: { HeaderPanel, LogPanel, DialogPanel, StatisticsPanel, FooterPanel },
        data () {
            return {
                myKingdom: new KingdomClass(),
                isModalVisible: false
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
            }
        }
    };
</script>
