<template>
    <div class="statistics-container" v-if="myKingdom.year">
        <span>Статистика</span>
        <div class="group" v-for="(group, groupIndex) in statisticsScheme" :key="groupIndex">
            <div class="group-caption"><font-awesome-icon icon="plus" v-if="group.collapsed"/><font-awesome-icon icon="minus" v-else/>&nbsp;{{ group.caption }}</div>
            <div class="group-data">
                <div class="list-row" v-for="(item, itemIndex) in group.sub" :key="itemIndex">
                    <div class="list-caption">{{ getItemName(item) }}</div>
                    <div class="list-value">{{ translateValueWithItemSettings(groupIndex, itemIndex, item) }}</div>
                    <div class="list-dimension">{{ getItemDimension(item, group) }}</div>
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
        },
        methods: {
            getItemName (item) {
                return typeof item === 'object' ? item.caption : item;
            },
            translateValueWithItemSettings (groupIndex, itemIndex, itemParameters) {
                const returnValue = this.myKingdom[groupIndex][itemIndex] + '!'; // value + '!';
                console.log(itemParameters, groupIndex, itemIndex, returnValue);
                return returnValue;
            },
            getItemDimension (item, group) {
                return (typeof item === 'object' ? item.dimension : '') || group.dimension;
            }
        }
    };
</script>
