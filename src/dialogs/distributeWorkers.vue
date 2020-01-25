<template>
    <v-container v-if="ready">
        <v-row>
            <v-col cols="12">
                Распределите население
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="1">
                <font-awesome-icon icon="user"/>
            </v-col>
            <v-col cols="8">
                <v-slider v-model="peasantsDistributed" :max="myKingdom.people.peasants" step="1" label="Крестьяне" @input="onSliderInput"/>
            </v-col>
            <v-col cols="1" class="mt-1">{{ peasantsDistributed }}</v-col>
            <v-col cols="2">
                <v-btn v-if="notDistributed" @click="distributeToPeasants" title="Добавить крестьян">
                    <font-awesome-icon icon="angle-double-left"/>
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="1">
                <font-awesome-icon icon="user"/>
            </v-col>
            <v-col cols="8">
                <v-slider v-model="workersDistributed" :max="myKingdom.people.workers" step="1" label="Рабочие" @input="onSliderInput"/>
            </v-col>
            <v-col cols="1" class="mt-1">{{ workersDistributed }}</v-col>
            <v-col cols="2">
                <v-btn v-if="notDistributed" @click="distributeToWorkers" title="Добавить рабочих">
                    <font-awesome-icon icon="angle-double-left"/>
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="1">
                <font-awesome-icon icon="user"/>
            </v-col>
            <v-col cols="8">
                <v-slider v-model="warriorsDistributed" :max="myKingdom.people.warriors" step="1" label="Воины" @input="onSliderInput"/>
            </v-col>
            <v-col cols="1" class="mt-1">{{ warriorsDistributed }}</v-col>
            <v-col cols="2">
                <v-btn v-if="notDistributed" @click="distributeToWarriors" title="Добавить воинов">
                    <font-awesome-icon icon="angle-double-left"/>
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="1">
                <font-awesome-icon icon="user"/>
            </v-col>
            <v-col cols="8">
                <v-slider v-model="priestsDistributed" :max="myKingdom.people.priests" step="1" label="Священники" @input="onSliderInput"/>
            </v-col>
            <v-col cols="1" class="mt-1">{{ priestsDistributed }}</v-col>
            <v-col cols="2">
                <v-btn v-if="notDistributed" @click="distributeToPriests" title="Добавить священников">
                    <font-awesome-icon icon="angle-double-left"/>
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="1">
                <font-awesome-icon icon="user-times"/>
            </v-col>
            <v-col cols="8">
                Не распределены
            </v-col>
            <v-col cols="3">
                {{ notDistributed }}
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="1"/>
            <v-col cols="8">
                Итого
            </v-col>
            <v-col cols="3">
                {{ maxPeople }}
            </v-col>
        </v-row>
        <v-footer>
            <v-spacer/>
            <v-btn :disabled="Boolean(notDistributed)" @click="proceed">
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
                peasantsDistributed: 0,
                workersDistributed: 0,
                warriorsDistributed: 0,
                priestsDistributed: 0,
                maxPeople: 0,
                notDistributed: 0
            };
        },
        computed: {
            ready () {
                return this.myKingdom.year;
            }
        },
        methods: {
            onSliderInput () {
                this.notDistributed = this.maxPeople - this.peasantsDistributed - this.workersDistributed - this.warriorsDistributed - this.priestsDistributed;
            },
            updatePeopleWithSliders () {
                this.myKingdom.people.peasants = this.peasantsDistributed;
                this.myKingdom.people.workers = this.workersDistributed;
                this.myKingdom.people.warriors = this.warriorsDistributed;
                this.myKingdom.people.priests = this.priestsDistributed;
            },
            distributeToPeasants () {
                this.updatePeopleWithSliders();
                this.myKingdom.people.peasants += this.notDistributed;
                this.peasantsDistributed += this.notDistributed;
                this.notDistributed = 0;
                this.maxPeople = this.myKingdom.getPeopleCount();
            },
            distributeToWorkers () {
                this.updatePeopleWithSliders();
                this.myKingdom.people.workers += this.notDistributed;
                this.workersDistributed += this.notDistributed;
                this.notDistributed = 0;
                this.maxPeople = this.myKingdom.getPeopleCount();
            },
            distributeToWarriors () {
                this.updatePeopleWithSliders();
                this.myKingdom.people.warriors += this.notDistributed;
                this.warriorsDistributed += this.notDistributed;
                this.notDistributed = 0;
                this.maxPeople = this.myKingdom.getPeopleCount();
            },
            distributeToPriests () {
                this.updatePeopleWithSliders();
                this.myKingdom.people.priests += this.notDistributed;
                this.priestsDistributed += this.notDistributed;
                this.notDistributed = 0;
                this.maxPeople = this.myKingdom.getPeopleCount();
            },
            proceed () {
                this.$emit('done');
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
