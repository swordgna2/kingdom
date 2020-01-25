<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <font-awesome-icon icon="globe-europe"/>&nbsp;Выберите королевство, за которое играете:
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col cols="12" class="d-flex">
                    <v-combobox
                        v-model="selectedKingdom"
                        label="Выберите королевство"
                        item-value="id"
                        item-text="text"
                        :items="kingdomOptions"
                        filled
                    />
                    <v-btn @click="flushKingdom" class="ml-3 mt-5">
                        <font-awesome-icon icon="random"/>&nbsp;случайное
                    </v-btn>
                </v-col>
            </v-row>
            <v-row align="center">
                <v-col cols="12">
                    <font-awesome-icon icon="graduation-cap"/>&nbsp;Выберите сложность:
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-select
                        v-model="selectedDifficulty"
                        label="Выберите сложность"
                        item-value="id"
                        item-text="text"
                        :items="difficulty"
                        filled
                    />
                </v-col>
            </v-row>
        </v-container>
        <v-footer>
            <v-spacer/>
            <v-btn @click="proceed">
                Продолжить
            </v-btn>
            <v-spacer/>
        </v-footer>
    </div>
</template>

<script>
    import kingdomNames from './../assets/kingdomNames';
    import KingdomClass from './../classes/KingdomClass';
    import { getIntegerRandom } from './../helpers/randomHelper';

    export default {
        name: 'StartDialog',
        data () {
            return {
                selectedKingdom: null,
                selectedDifficulty: 'normal',
                difficultyOptions: {
                    easy: 'легко',
                    normal: 'нормально',
                    difficult: 'сложно'
                },
                difficulty: [
                    {
                        id: 'easy',
                        text: 'легко'
                    },
                    {
                        id: 'normal',
                        text: 'нормально'
                    },
                    {
                        id: 'difficult',
                        text: 'сложно'
                    }
                ]
            };
        },
        computed: {
            kingdomOptions () {
                return kingdomNames.map((value, index) => ({
                    id: index,
                    text: value
                }));
            }
        },
        methods: {
            flushKingdom () {
                const kingdomId = getIntegerRandom(0, Object.values(KingdomClass.names).length);
                this.selectedKingdom = {
                    id: kingdomId,
                    text: kingdomNames[kingdomId]
                };
            },
            proceed () {
                if (typeof this.selectedKingdom === 'object' && this.selectedKingdom !== null) {
                    this.$emit('done', {
                        selectedKingdom: this.selectedKingdom.id,
                        selectedDifficulty: this.selectedDifficulty
                    });
                } else {
                    this.$emit('openModal', {
                        type: 'alert',
                        body: 'Выберите королевство, за которое играете.'
                    });
                }
            }
        }
    };
</script>
