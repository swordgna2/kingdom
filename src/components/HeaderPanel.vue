<template>
    <div class="main-header">
        <span v-if="kingdom.code">Королевство {{ kingdomName }}</span>
        <span v-if="reign.number">Год {{ reign.number }}-й</span>
    </div>
</template>

<script>
    import ReignClass from '../classes/ReignClass';
    import KingdomClass from '../classes/KingdomClass';

    export default {
        name: 'Header',
        props: {
            reign: ReignClass,
            kingdom: KingdomClass
        },
        computed: {
            kingdomName () {
                return this.kingdom.getName();
            }
        }
    };
</script>
