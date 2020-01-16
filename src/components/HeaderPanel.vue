<template>
    <div class="main-header">
        <span v-if="myKingdom.code">Королевство {{ kingdomName }}</span>
        <span v-if="myKingdom.year">Год {{ myKingdom.year }}-й</span>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            year: Number,
            myKingdom: Object
        },
        computed: {
            kingdomName () {
                return this.myKingdom.getName();
            }
        }
    };
</script>
