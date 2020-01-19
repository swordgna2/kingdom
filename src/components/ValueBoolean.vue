<template>
    <span>
        <span v-if="value"><font-awesome-icon icon="check-square"/>&nbsp;да</span>
        <span v-else><font-awesome-icon icon="times-circle"/>&nbsp;нет</span>
    </span>
</template>

<script>
    export default {
        name: 'ValueBoolean',
        props: {
            value: {
                type: Boolean,
                default: false
            }
        }
    };
</script>
