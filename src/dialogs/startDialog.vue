<template>
    <div>
        <header class="dialog-header">
            Начало игры
        </header>
        <section class="dialog-section">
            <div class="list-item">
                <p><font-awesome-icon icon="globe-europe"/>&nbsp;Выберите королевство, за которое играете:</p>
                <p>
                    <label>
                        <select v-if="kingdomOptions" v-model="selectedKingdom">
                            <option v-for="(option, index) in kingdomOptions" :key="index" :value="index">
                                {{ option }}
                            </option>
                        </select>
                    </label>
                    &nbsp;<button name="random" @click="flushKingdom"><font-awesome-icon icon="random"/>&nbsp;случайное</button>
                </p>
            </div>
            <div class="list-item">
                <p><font-awesome-icon icon="graduation-cap"/>&nbsp;Выберите сложность:</p>
                <p>
                    <label>
                        <select v-model="selectedDifficulty">
                            <option v-for="(option, index) in difficultyOptions" :key="index" :value="index">
                                {{ option }}
                            </option>
                        </select>
                    </label>
                </p>
            </div>
        </section>
        <footer class="dialog-footer">
            <button name="proceed" @click="proceed">Продолжить</button>
        </footer>
    </div>
</template>

<script>
    import kingdomNames from './../assets/kingdom-names.json';
    import KingdomClass from './../classes/KingdomClass';
    import { getIntegerRandom } from './../helpers/randomHelper.js';

    export default {
        name: 'StartDialog',
        data () {
            return {
                selectedKingdom: undefined,
                kingdomOptions: kingdomNames,
                selectedDifficulty: 'normal',
                difficultyOptions: {
                    easy: 'легко',
                    normal: 'нормально',
                    difficult: 'сложно'
                }
            };
        },
        methods: {
            flushKingdom () {
                this.selectedKingdom = getIntegerRandom(0, Object.values(KingdomClass.names).length);
            },
            proceed () {
                if (this.selectedKingdom) {
                    this.$emit('done', {
                        selectedKingdom: this.selectedKingdom,
                        selectedDifficulty: this.selectedDifficulty
                    });
                } else {
                    alert('Выберите королевство, за которое играете.');
                }
            }
        }
    };
</script>
