<template>
    <div class="main-header">
        <span v-if="kingdom.code">Королевство {{ kingdomName }}</span>
        <span v-if="year">Год {{ year }}-й</span>
    </div>
</template>

<script>
    import KingdomClass from './../classes/KingdomClass';

    export default {
        name: 'Header',
        props: {
            year: Number,
            kingdom: KingdomClass
        },
        computed: {
            kingdomName () {
                return this.kingdom.getName();
            }
        }
    };
</script>
