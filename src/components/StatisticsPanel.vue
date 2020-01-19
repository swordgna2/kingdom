<template>
    <div class="statistics-container" v-if="myKingdom.year">
        <div class="statistics-group" v-for="(group, groupIndex) in statisticsScheme" :key="groupIndex">
            <div class="statistics-group-caption" @click="toggleGroup(groupIndex)">
                <font-awesome-icon icon="plus" v-if="groupsCollapsed[groupIndex]"/>
                <font-awesome-icon icon="minus" v-else/>
                &nbsp;{{ group.caption }}
                <help-icon v-if="group.help" :code="group.help" @openModal="openModal"/>
            </div>
            <div class="statistics-group-data" v-if="!groupsCollapsed[groupIndex]">
                <div class="statistics-list-row" v-for="(item, itemIndex) in group.sub" :key="itemIndex">
                    <div class="statistics-list-caption">{{ getItemName(item) }}</div>
                    <div class="statistics-list-value">
                        <span v-if="getItemType(item, group) === 'Boolean'">
                            <span v-if="myKingdom[groupIndex][itemIndex]"><font-awesome-icon icon="check-square"/>&nbsp;да</span>
                            <span v-else><font-awesome-icon icon="times-circle"/>&nbsp;нет</span>
                        </span>
                        <span v-else-if="getItemType(item, group) === 'kToPercent'">
                            <font-awesome-icon icon="exclamation-triangle" class="bad-condition" v-if="myKingdom[groupIndex][itemIndex] < 0.333"/>
                            <font-awesome-icon icon="check-square" class="good-condition" v-else-if="myKingdom[groupIndex][itemIndex] > 0.667"/>
                            {{ convertKToPercent(myKingdom[groupIndex][itemIndex]) }}
                        </span>
                        <span v-else>
                            {{ myKingdom[groupIndex][itemIndex] }}
                        </span>
                    </div>
                    <div class="statistics-list-dimension">{{ getItemDimension(item, group) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import statisticsScheme from '../assets/statisticsScheme.json';
    import KingdomClass from '../classes/KingdomClass';
    import HelpIcon from './HelpIcon';

    export default {
        name: 'StatisticsPanel',
        components: {
            HelpIcon
        },
        props: {
            myKingdom: KingdomClass
        },
        data () {
            return {
                statisticsScheme: statisticsScheme,
                groupsCollapsed: {}
            };
        },
        methods: {
            toggleGroup (groupIndex) {
                this.$set(this.groupsCollapsed, groupIndex, !this.groupsCollapsed[groupIndex]);
            },
            getItemName (item) {
                return typeof item === 'object' ? item.caption : item;
            },
            getItemType (item, group) {
                return (typeof item === 'object' && item !== null) ? item.type || group.type : group.type;
            },
            convertKToPercent (k, precision) {
                k = isNaN(k) ? 0 : k;
                precision = isNaN(precision) ? 0 : precision.toFixed(0);
                return (k * 100).toFixed(precision);
            },
            getItemDimension (item, group) {
                const type = (typeof item === 'object' && item !== null) ? item.type || group.type : group.type;
                if (type === 'Boolean') {
                    return '';
                }
                if (type === 'kToPercent') {
                    return '%';
                }
                return (typeof item === 'object' && item !== null) ? item.dimension || group.dimension : group.dimension;
            },
            openModal (data) {
                this.$emit('openModal', data);
            }
        }
    };
</script>
