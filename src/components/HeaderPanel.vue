<template>
    <div id="header">
        <span>Королевство {{ kingdomName }}</span>
        <span>Год {{ year }}-й</span>
    </div>
</template>

<script>
    import kingdomNames from '../assets/kingdom-names.json'

    export default {
        name: 'Header',
        props: {
            year: Number,
            kingdom: Object
        },
        data () {
            return {
                kingdomNames: kingdomNames
            }
        },
        computed: {
            kingdomName: function () {
                if (this.kingdom.live) {
                    return kingdomNames[this.kingdom.code]
                } else {
                    return ''
                }
            }
        }
    }
</script>

<style scoped>
    #header {
        position: relative;
        padding: 10px;
        background: #f0f0f0;
        box-shadow: 0 0 4px silver;
        z-index: 2;
    }

    #header span + span {
        margin-left: 10px;
    }
</style>
