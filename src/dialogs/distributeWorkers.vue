<template>
    <div>
        Распределить население
    </div>
</template>

<script>
    export default {
        name: 'DistributeWorkers',
        props: {
            myKingdom: Object
        },
        data () {
            return {
                kingdom: this.myKingdom
            };
        },
        created () {
            console.log(this.kingdom);
        }
    };
</script>
