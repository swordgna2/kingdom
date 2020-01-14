<template>
    <div class="dialog-container">
        <component :is="componentName" @done="doneListener" v-bind="componentOptions"/>
    </div>
</template>

<script>
    const components = {
        SelectKingdom: () => import('./../dialogs/selectKingdom.vue'),
        SelectKingdom2: () => import('./../dialogs/selectKingdom2.vue')
    };

    export default {
        name: 'DialogPanel',
        components,
        data () {
            return {
                dialog: 'selectKingdom',
                componentName: 'select-kingdom',
                componentOptions: { qwe: 1, qwe2: 'qwe' }
            };
        },
        methods: {
            doneListener (e) {
                console.log(e);
                this.componentName = 'select-kingdom2';
            }
        }
    };
</script>
