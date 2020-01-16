<template>
    <div class="statistics-container" v-if="myKingdom.year">
        <span>Статистика</span>
        <div class="group" v-for="(group, groupIndex) in statisticsScheme" :key="groupIndex">
            <div class="group-caption"><font-awesome-icon icon="plus" v-if="group.expanded"/><font-awesome-icon icon="minus" v-else/>&nbsp;{{ group.caption }}</div>
            <div class="group-data">
                <div class="list-row" v-for="(item, itemIndex) in group.sub" :key="itemIndex">
                    <div class="list-caption">{{ typeof item === 'object' ? item.caption : item }}</div>
                    <div class="list-value">{{ myKingdom[groupIndex][itemIndex] }}</div>
                    <div class="list-dimension">{{ ( typeof item === 'object' ? item.dimension : '' ) || group.dimension }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import statisticsScheme from '../assets/statisticsScheme.json';
    import KingdomClass from '../classes/KingdomClass';

    export default {
        name: 'StatisticsPanel',
        props: {
            myKingdom: KingdomClass
        },
        data () {
            return {
                statisticsScheme: statisticsScheme
            };
        },
        created () {
            console.log(this.myKingdom);
        }
    };
</script>
