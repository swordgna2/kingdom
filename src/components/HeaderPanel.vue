<template>
    <div class="main-header">
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
