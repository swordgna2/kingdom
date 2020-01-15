<template>
    <div class="main-header">
        <span v-if="kingdom.code">Королевство {{ kingdomName }}</span>
        <span v-if="kingdom.year">Год {{ kingdom.year }}-й</span>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            year: Number,
            kingdom: Object
        },
        computed: {
            kingdomName () {
                return this.kingdom.getName();
            }
        }
    };
</script>
