<template>
    <div>
        <header>
            Начало игры 22222
        </header>
        <section>
            <p>Выберите страну, за которую играете:</p>
            <p><label>
                <select v-if="options" v-model="selected">
                    <option v-for="(option, index) in options" :key="index" :value="index">
                        {{ option }}
                    </option>
                </select>
            </label>&nbsp;<button name="random" @click="flushKingdom">случайная</button></p>
            <p>Выберите сложность:</p>
            <p><label>
                <select>
                    <option value="easy">легко</option>
                    <option value="normal" selected>нормально</option>
                    <option value="difficult">сложно</option>
                </select>
            </label></p>
        </section>
        <footer>
            <button name="proceed">Продолжить</button>
        </footer>
    </div>
</template>

<script>
    import kingdomNames from '../assets/kingdom-names.json';
    import KingdomClass from '../classes/KingdomClass';
    import { getIntegerRandom } from '../helpers/randomHelper.js';

    export default {
        name: 'SelectKingdom',
        data () {
            return {
                selected: undefined,
                options: kingdomNames
            };
        },
        methods: {
            flushKingdom () {
                this.selected = getIntegerRandom(0, Object.values(KingdomClass.names).length);
            }
        }
    };
</script>
