<template>
    <div class="main-wrapper">
        <!--<p>Have a crown: <font-awesome-icon icon="crown"/></p>-->
        <HeaderPanel
            v-bind:year="year"
            v-bind:kingdom="myKingdom"
        />
        <div class="main-container">
            <div class="main-container-inner">
                <DialogPanel
                    v-bind:dialog-data="dialogData"
                />
                <StatisticsPanel/>
            </div>
        </div>
        <FooterPanel/>
    </div>
</template>

<script>
    import HeaderPanel from './components/HeaderPanel'
    import StatisticsPanel from './components/StatisticsPanel'
    import DialogPanel from './components/DialogPanel'
    import FooterPanel from './components/FooterPanel'
    import KingdomClass from './classes/KingdomClass'

    export default {
        name: 'app',
        components: { FooterPanel, DialogPanel, StatisticsPanel, HeaderPanel },
        data () {
            return {
                dialogData: {
                    header: 'Название королевства',
                    message: 'Выберите название Вашего королевства'
                },
                year: 1,
                myKingdom: new KingdomClass()
            }
        }
    }
</script>
