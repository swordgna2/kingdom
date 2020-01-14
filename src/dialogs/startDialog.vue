<template>
    <div>
        <header class="dialog-header">
            Начало игры
        </header>
        <section class="dialog-section">
            <p>Выберите королевство, за которую играете:</p>
            <p><label>
                <select v-if="kingdomOptions" v-model="selectedKingdom">
                    <option v-for="(option, index) in kingdomOptions" :key="index" :value="index">
                        {{ option }}
                    </option>
                </select>
            </label>&nbsp;<button name="random" @click="flushKingdom">случайное</button></p>
            <p>Выберите сложность:</p>
            <p><label>
                <select v-model="selectedDifficulty">
                    <option v-for="(option, index) in difficultyOptions" :key="index" :value="index">
                        {{ option }}
                    </option>
                </select>
            </label></p>
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
