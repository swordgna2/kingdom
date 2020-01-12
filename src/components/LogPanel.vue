<template>
    <div class="log-container">
        <div class="list-item"
             v-bind:key="logItem.id"
             v-for="logItem in log"
        >
            {{ logItem }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LogPanel',
        data () {
            return {
                log: [
                    'Начата игра'
                ]
            };
        }
    };
</script>
