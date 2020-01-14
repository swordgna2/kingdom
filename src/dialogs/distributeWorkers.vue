<template>
    <div>
        <header class="dialog-header">
            Распределить население
        </header>
        <section class="dialog-section">
            <div class="list-item">
                <p>Надо делать...</p>
            </div>
        </section>
        <footer class="dialog-footer">
            <button name="proceed" @click="proceed">Продолжить</button>
        </footer>
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
        },
        methods: {
            proceed () {
                alert('Дальше делать');
            }
        }
    };
</script>
