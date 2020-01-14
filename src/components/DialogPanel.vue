<template>
    <div class="dialog-container">
        <component :is="componentName" @done="doneListener" v-bind="componentOptions"/>
    </div>
</template>

<script>
    import KingdomClass from '../classes/KingdomClass';

    const components = {
        StartDialog: () => import('../dialogs/startDialog.vue'),
        DistributeWorkers: () => import('../dialogs/distributeWorkers.vue')
    };

    export default {
        name: 'DialogPanel',
        components,
        props: {
            reignProp: Object,
            kingdomProp: Object
        },
        data () {
            return {
                reign: this.reignProp,
                myKingdom: this.kingdomProp,
                componentName: 'start-dialog',
                componentOptions: {}
            };
        },
        created () {
            this.reign.dialogComponent = this;
        },
        methods: {
            doneListener (options) {
                if (this.componentName === 'start-dialog') {
                    this.startGameWithOptions(options);
                }
            },
            startGameWithOptions (options) {
                this.myKingdom = KingdomClass.kingdoms[options.selectedKingdom];
                this.reign.difficulty = options.selectedDifficulty;
                this.reign.myKingdom = this.myKingdom;
                this.reign.startNewYear();
            }
        }
    };
</script>
