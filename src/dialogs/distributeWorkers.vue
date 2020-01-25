<template>
    <v-container v-if="ready">
        <v-footer>
            Распределите население
        </v-footer>
        <v-row>
            <v-col cols="9">
                <v-slider v-model="peasantsDistributed" :max="peasants + notDistributed" step="10" ticks label="Крестьяне"/>
            </v-col>
            <v-col cols="3">{{ peasantsDistributed }}</v-col>
        </v-row>
        <v-row>
            <v-col cols="9">
                <v-slider v-model="workersDistributed" :max="workers + notDistributed" step="10" ticks label="Рабочие"/>
            </v-col>
            <v-col cols="3">{{ workersDistributed }}</v-col>
        </v-row>
        <v-row>
            <v-col cols="9">
                <v-slider v-model="warriorsDistributed" :max="warriors + notDistributed" step="10" ticks label="Воины"/>
            </v-col>
            <v-col cols="3">{{ warriorsDistributed }}</v-col>
        </v-row>
        <v-row>
            <v-col cols="9">
                <v-slider v-model="priestsDistributed" :max="priests + notDistributed" step="10" ticks label="Священники"/>
            </v-col>
            <v-col cols="3">{{ priestsDistributed }}</v-col>
        </v-row>
        <v-row>
            <v-col cols="9">
                Не распределены
            </v-col>
            <v-col cols="3">
                {{ notDistributed }}
            </v-col>
        </v-row>
        {{ maxPeople }}
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
    export default {
        name: 'DistributeWorkers',
        props: {
            myKingdom: Object
        },
        data () {
            return {
                kingdom: this.myKingdom,
                peasants: this.myKingdom.people.peasants,
                workers: this.myKingdom.people.workers,
                warriors: this.myKingdom.people.warriors,
                priests: this.myKingdom.people.priests,
                peasantsDistributed: 0,
                workersDistributed: 0,
                warriorsDistributed: 0,
                priestsDistributed: 0,
                maxPeople: 0
            };
        },
        computed: {
            ready () {
                return this.myKingdom.year;
            },
            notDistributed () {
                return this.maxPeople - this.peasantsDistributed - this.workersDistributed - this.warriorsDistributed - this.priestsDistributed;
            }
        },
        methods: {
            proceed () {
                alert('Дальше делать');
            }
        },
        created () {
            this.maxPeople = this.myKingdom.getPeopleCount();
            this.peasantsDistributed = this.myKingdom.people.peasants;
            this.workersDistributed = this.myKingdom.people.workers;
            this.warriorsDistributed = this.myKingdom.people.warriors;
            this.priestsDistributed = this.myKingdom.people.priests;
        }
    };
</script>
