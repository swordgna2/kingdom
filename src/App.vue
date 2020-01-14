<template>
    <div class="main-wrapper">
        <!--<p>Have a crown: <font-awesome-icon icon="crown"/></p>-->
        <HeaderPanel
            v-bind:year="reign.number"
            v-bind:kingdom="myKingdom"
        />
        <div class="main-container">
            <div class="main-container-inner">
                <LogPanel/>
                <DialogPanel
                    v-bind:reign-prop="reign"
                    v-bind:kingdom-prop="myKingdom"
                    @update-my-kingdom="updateMyKingdom"
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
    import HeaderPanel from './components/HeaderPanel';
    import LogPanel from './components/LogPanel';
    import DialogPanel from './components/DialogPanel';
    import StatisticsPanel from './components/StatisticsPanel';
    import FooterPanel from './components/FooterPanel';
    import ReignClass from './classes/ReignClass';
    import KingdomClass from './classes/KingdomClass';

    export default {
        name: 'app',
        components: { HeaderPanel, LogPanel, DialogPanel, StatisticsPanel, FooterPanel },
        data () {
            return {
                reign: new ReignClass(),
                myKingdom: new KingdomClass(),
                isModalVisible: false
            };
        },
        created () {
            this.myKingdom.autoSetKingdoms();
        },
        methods: {
            updateMyKingdom (myKingdom) {
                this.myKingdom = myKingdom;
            }
        }
    };
</script>
