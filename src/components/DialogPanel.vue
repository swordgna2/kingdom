<template>
    <div class="dialog-container">
        <component :is="componentName" @openModal="openModal" @done="doneListener" v-bind="componentOptions" :myKingdom="myKingdom" :testMode="true"/>
    </div>
</template>

<script>
    const components = {
        startDialog: () => import('../dialogs/startDialog'),
        distributeWorkers: () => import('../dialogs/distributeWorkers'),
        distributeJobs: () => import('../dialogs/distributeJobs'),
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
                    this.distributeJobs();
                    break;
                case 'distribute-jobs':
                    this.war();
                    break;
                case 'war':
                    this.myKingdom.scouts = options.scouts;
                    this.warOtherCountries();
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
                this.componentName = 'distribute-workers';
            },
            distributeJobs () {
                this.myKingdom.distributeJobsAuto();
                this.componentName = 'distribute-jobs';
            },
            war () {
                if (this.myKingdom.people.warriors > 0) {
                    this.componentName = 'war';
                } else {
                    this.warOtherCountries();
                }
            },
            warOtherCountries () {
                this.myKingdom.warOtherCountries();
                console.log('Воюют остальные страны');
            }
        }
    };
</script>
