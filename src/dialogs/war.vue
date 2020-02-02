<template>
    <v-container>
        <v-row>
            <v-col cols="11">
                Будем воевать ?
            </v-col>
            <v-col cols="1">
                <help-icon code="not-ready" @openModal="openModal"/>
            </v-col>
        </v-row>
        <v-row v-for="(neighborId, index) in myKingdom.neighbors" :key="index">
            <v-col cols="4">
                {{ getNeighborName(neighborId) }}
            </v-col>
            <v-col cols="2">
                {{ getNeighborMood(neighborId) }} %
            </v-col>
            <v-col cols="3">
                <v-btn @click="sendScouts(neighborId)">
                    <span v-if="scouts[neighborId]">Не разведывать</span>
                    <span v-else>Разведать</span>
                </v-btn>
            </v-col>
            <v-col cols="3">
                <v-btn v-if="!scouts[neighborId]" @click="warWith(neighborId)">
                    Война !
                </v-btn>
            </v-col>
            <v-col cols="10" v-if="scouts[neighborId]">
                <v-slider v-model="scoutsSent[neighborId]" :max="Math.min(10, scoutsLeft + scoutsSent[neighborId])" step="1" label="Разведчики" @input="recalculateScoutsLeft"/>
            </v-col>
            <v-col cols="1" v-if="scouts[neighborId]">
                {{ scoutsSent[neighborId] }}
            </v-col>
            <v-col cols="1" v-if="scouts[neighborId]">
                <help-icon code="not-ready" @openModal="openModal"/>
            </v-col>
        </v-row>
        <v-footer>
            <v-spacer/>
            <v-btn @click="proceed">
                Ни с кем не воевать
            </v-btn>
            <v-spacer/>
        </v-footer>
    </v-container>
</template>

<script>
    import HelpIcon from '../components/HelpIcon';
    import KingdomClass from '../classes/KingdomClass';
    import { convertKToPercent } from '../helpers/convertHelper';

    export default {
        name: 'war',
        props: {
            myKingdom: Object
        },
        data () {
            return {
                scouts: {},
                scoutsSent: {},
                scoutsLeft: 0
            };
        },
        components: {
            HelpIcon
        },
        methods: {
            openModal (data) {
                this.$emit('openModal', data);
            },
            getNeighborName (neighborId) {
                return KingdomClass.kingdoms[neighborId].getName();
            },
            getNeighborMood (neighborId) {
                const mood = KingdomClass.kingdoms[neighborId].getAverageMood();
                return convertKToPercent(mood, 0);
            },
            sendScouts (neighborId) {
                this.$set(this.scouts, neighborId, !this.scouts[neighborId]);
                this.scoutsSent[neighborId] = 0;
                this.recalculateScoutsLeft();
            },
            recalculateScoutsLeft () {
                let scoutsLeft = this.myKingdom.people.priests;
                for (const i in this.scoutsSent) {
                    if (this.scoutsSent[i] > 0) {
                        scoutsLeft -= this.scoutsSent[i];
                    }
                }
                this.scoutsLeft = scoutsLeft;
            },
            warWith (neighborId) {
                this.myKingdom.warWith(neighborId);
                if (this.myKingdom.warResults.error) {
                    this.$emit('openModal', {
                        type: 'alert',
                        body: this.myKingdom.warResults.errorMessage
                    });
                }
                this.$emit('openModal', {
                    body: 'Смотрите результаты войны в консоли (разработка)'
                });
                console.log('Результаты войны:', this.myKingdom.warResults);
            },
            proceed () {
                this.$emit('done', {
                    scouts: this.scouts,
                    scoutsSent: this.scoutsSent
                });
            }
        },
        created () {
            this.recalculateScoutsLeft();
            console.log('Война');
        }
    };
</script>
