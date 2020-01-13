<template>
    <div class="dialog-container">
        <SelectKingdom v-if="dialog === 'selectKingdom'"/>
    </div>
</template>

<script>
    import SelectKingdom from './../dialogs/selectKingdom.vue';

    export default {
        name: 'DialogPanel',
        components: { SelectKingdom },
        data () {
            return {
                dialog: 'selectKingdom'
            };
        }
    };
</script>
