<template>
    <v-container>
        <v-row>
            <v-col cols="11">
                Распределите работы
            </v-col>
            <v-col cols="1">
                <help-icon code="not-ready" @openModal="openModal"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="1">
                <font-awesome-icon icon="utensils"/>
            </v-col>
            <v-col cols="8">
                <v-slider v-model="crops" :max="myKingdom.jobs.crops" step="1" label="Посевы" @input="onCropsInput"/>
            </v-col>
            <v-col cols="3" class="mt-1">{{ crops }}</v-col>
        </v-row>
        <v-row>
            <v-col cols="1">
                <font-awesome-icon icon="flag"/>
            </v-col>
            <v-col cols="8">
                <v-label>
                    Поиск новых земель
                </v-label>
            </v-col>
            <v-col cols="3">
                {{ findNewLands }}
            </v-col>
        </v-row>
        <div class="list-item"/>
        <v-row class="list-item">
            <v-col cols="1">
                <font-awesome-icon icon="cube"/>
            </v-col>
            <v-col cols="8">
                <v-slider v-model="logging" :max="loggingAndMining" step="1" label="Добыча [лес] / [руда]" @input="onLoggingInput"/>
            </v-col>
            <v-col cols="3" class="mt-1">{{ logging }} / {{ mining }}</v-col>
        </v-row>
        <v-footer>
            <v-spacer/>
            <v-btn @click="proceed">
                Продолжить
            </v-btn>
            <v-spacer/>
        </v-footer>
    </v-container>
</template>

<script>
    import HelpIcon from '../components/HelpIcon';

    export default {
        name: 'distributeJobs',
        components: {
            HelpIcon
        },
        props: {
            myKingdom: Object,
            testMode: Boolean
        },
        data () {
            return {
                crops: 0,
                findNewLands: 0,
                logging: 0,
                mining: 0,
                loggingAndMining: 0
            };
        },
        methods: {
            openModal (data) {
                this.$emit('openModal', data);
            },
            onCropsInput () {
                this.findNewLands = this.myKingdom.people.peasants - this.crops;
            },
            onLoggingInput () {
                this.mining = this.loggingAndMining - this.logging;
            },
            proceed () {
                this.myKingdom.jobs.crops = this.crops;
                this.myKingdom.jobs.findNewLands = this.findNewLands;
                this.myKingdom.jobs.logging = this.logging;
                this.myKingdom.jobs.mining = this.mining;
                this.$emit('done');
            }
        },
        created () {
            this.crops = this.myKingdom.jobs.crops;
            this.findNewLands = this.myKingdom.jobs.findNewLands;
            this.logging = this.myKingdom.jobs.logging;
            this.mining = this.myKingdom.jobs.mining;
            this.loggingAndMining = this.logging + this.mining;
            if (this.testMode) {
                this.proceed();
            }
        }
    };
</script>
