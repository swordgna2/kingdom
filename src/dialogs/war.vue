<template>
    <v-container>
        Война
    </v-container>
</template>

<script>
    export default {
        name: 'war',
        props: {
            myKingdom: Object
        },
        created () {
            console.log('Война');
        }
    };
</script>
