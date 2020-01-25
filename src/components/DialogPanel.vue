<template>
    <div class="dialog-container">
        <component :is="componentName" @openModal="openModal" @done="doneListener" v-bind="componentOptions" :myKingdom="myKingdom"/>
    </div>
</template>

<script>
    const components = {
        startDialog: () => import('../dialogs/startDialog'),
        distributeWorkers: () => import('../dialogs/distributeWorkers'),
        war: () => import('../dialogs/war')
    };

    export default {
        name: 'dialogPanel',
        components,
        props: {
            myKingdom: Object
        },
        data () {
            return {
                componentName: 'start-dialog',
                componentOptions: {}
            };
        },
        methods: {
            openModal (data) {
                this.$emit('openModal', data);
            },
            doneListener (options) {
                switch (this.componentName) {
                case 'start-dialog':
                    this.startGameWithOptions(options);
                    this.startNewYear();
                    break;
                case 'distribute-workers':
                    this.war();
                    break;
                default:
                    break;
                }
            },
            startGameWithOptions (options) {
                this.$emit('set-kingdom-with-code', options.selectedKingdom);
                this.myKingdom.difficulty = options.selectedDifficulty;
            },
            startNewYear () {
                this.myKingdom.startNewYear();
                this.$emit('log', 'Начат новый, ' + this.myKingdom.year + '-й год правления.');
                // this.componentName = '';
                // this.componentOptions = {
                //     myKingdom: this.myKingdom
                // };
                this.componentName = 'distribute-workers';
            },
            war () {
                if (this.myKingdom.people.warriors > 0) {
                    // this.componentName = '';
                    // this.componentOptions = {
                    //
                    // }
                    this.componentName = 'war';
                }
            }
        }
    };
</script>
