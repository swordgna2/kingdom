<template>
    <div class="main-wrapper">
        <v-app id="inspire">
            <div class="text-center">
                <v-dialog
                    v-model="dialog"
                    width="500"
                >
                    <template v-slot:activator="{ on }">
                        <v-btn
                            color="red lighten-2"
                            dark
                            v-on="on"
                        >
                            Click Me
                        </v-btn>
                    </template>

                    <v-card>
                        <v-card-title
                            class="headline grey lighten-2"
                            primary-title
                        >
                            Privacy Policy
                        </v-card-title>

                        <v-card-text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </v-card-text>

                        <v-divider/>

                        <v-card-actions>
                            <v-spacer/>
                            <v-btn
                                color="primary"
                                text
                                @click="dialog = false"
                            >
                                I accept
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>
            <!--<div class="text-center">
                <v-dialog
                    v-model="dialog"
                    width="500"
                >
                    <template v-slot:activator="{ on }">
                        <v-btn
                            color="red lighten-2"
                            dark
                            v-on="on"
                        >
                            Click Me
                        </v-btn>
                    </template>

                    <v-card>
                        <v-card-title
                            class="headline grey lighten-2"
                            primary-title
                        >
                            Privacy Policy
                        </v-card-title>

                        <v-card-text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </v-card-text>

                        <v-divider/>

                        <v-card-actions>
                            <v-spacer/>
                            <v-btn
                                color="primary"
                                text
                                @click="dialog = false"
                            >
                                I accept
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>-->
            <HeaderPanel
                v-if="myKingdom.year"
                :my-kingdom="myKingdom"
            />
            <div class="main-container">
                <div class="main-container-inner">
                    <LogPanel ref="log"/>
                    <DialogPanel
                        :my-kingdom="computedKingdom"
                        @set-kingdom-with-code="setKingdomWithCode"
                        @log="log"
                    />
                    <StatisticsPanel
                        :my-kingdom="myKingdom"
                    />
                </div>
            </div>
            <FooterPanel/>
        </v-app>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Vuetify from 'vuetify/lib';
    import HeaderPanel from './components/HeaderPanel';
    import LogPanel from './components/LogPanel';
    import DialogPanel from './components/DialogPanel';
    import StatisticsPanel from './components/StatisticsPanel';
    import FooterPanel from './components/FooterPanel';
    import KingdomClass from './classes/KingdomClass';

    export default {
        name: 'app',
        components: {
            HeaderPanel,
            LogPanel,
            DialogPanel,
            StatisticsPanel,
            FooterPanel
        },
        vuetify: new Vuetify(),
        data () {
            return {
                myKingdom: new KingdomClass(),
                isModalVisible: false,
                dialog: false
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
