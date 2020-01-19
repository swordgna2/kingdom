<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="500">
            <v-card>
                <v-card-title :class="'title ' + titleColorClass + ' lighten-2'" primary-title>
                    {{ header }}
                    <v-spacer/>
                    <font-awesome-icon icon="exclamation-triangle" v-if="type === 'alert'"/>
                </v-card-title>
                <v-card-text/>
                <v-card-text>
                    {{ body }}
                </v-card-text>
                <v-divider/>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn :color="btnColorProperty" text @click="dialog = false">
                        Закрыть
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import Vuetify from 'vuetify/lib';

    export default {
        name: 'Modal',
        vuetify: new Vuetify(),
        data () {
            return {
                dialog: false,
                type: 'default',
                titleColorClass: 'grey',
                header: '',
                body: '',
                btnColorProperty: 'primary'
            };
        },
        methods: {
            openModal (data) {
                this.reset();
                this.header = data.header;
                this.body = data.body;
                this.type = data.type || 'default';
                if (data.type === 'alert') {
                    this.titleColorClass = 'red';
                    this.btnColorProperty = 'red';
                    this.header = data.header || 'Внимание';
                }
                this.dialog = true;
            },
            reset () {
                this.dialog = false;
                this.header = '';
                this.body = '';
                this.titleColorClass = 'grey';
                this.btnColorProperty = 'primary';
            }
        }
    };
</script>
