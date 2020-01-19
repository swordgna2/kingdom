<template>
    <span>
        <font-awesome-icon icon="exclamation-triangle" class="bad-condition" v-if="value < 0.333"/>
        <font-awesome-icon icon="check-square" class="good-condition" v-else-if="value > 0.667"/>
        {{ convertedValue }}
    </span>
</template>

<script>
    import { convertKToPercent } from './../helpers/convertHelper';

    export default {
        name: 'ValueKToPercent',
        props: {
            value: {
                type: Number,
                default: 0.5
            }
        },
        computed: {
            convertedValue () {
                return convertKToPercent(this.value);
            }
        }
    };
</script>
