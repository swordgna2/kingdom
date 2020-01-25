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
        name: 'logPanel',
        data () {
            return {
                log: [
                    'Добро пожаловать!'
                ]
            };
        },
        methods: {
            addMessage (message) {
                this.log.push(message);
            }
        }
    };
</script>
