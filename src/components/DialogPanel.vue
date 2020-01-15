<template>
    <div class="dialog-container">
        <component :is="componentName" @done="doneListener" v-bind="componentOptions"/>
    </div>
</template>

<script>
    const components = {
        StartDialog: () => import('../dialogs/startDialog.vue'),
        DistributeWorkers: () => import('../dialogs/distributeWorkers.vue')
    };

    export default {
        name: 'DialogPanel',
        components,
        props: {
            myKingdom: Object
        },
        $watch: {
            myKingdom: function (val) {
                console.log(val);
            }
        },
        data () {
            return {
                componentName: 'start-dialog',
                componentOptions: {}
            };
        },
        methods: {
            doneListener (options) {
                if (this.componentName === 'start-dialog') {
                    this.startGameWithOptions(options);
                }
            },
            startGameWithOptions (options) {
                this.$emit('set-kingdom-with-code', options.selectedKingdom);
                this.myKingdom.difficulty = options.selectedDifficulty;
                this.startNewYear();
            },
            startNewYear () {
                this.myKingdom.startNewYear();
                this.$emit('log', 'Начат новый, ' + this.myKingdom.year + '-й год правления.');
                this.componentName = 'distribute-workers';
            }
        }
    };
</script>
