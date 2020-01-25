<template>
    <div class="text-center">
        <v-dialog v-model="show" :width="width">
            <v-card>
                <v-card-title :class="'title ' + titleColorClass + ' lighten-2'" primary-title>
                    <span v-html="header"/>
                    <v-spacer/>
                    <font-awesome-icon icon="exclamation-triangle" v-if="type === 'alert'"/>
                    <help-icon v-if="help" :code="help" @openModal="openModal"/>
                </v-card-title>
                <v-card-text/>
                <component :is="componentName" v-bind="componentData"/>
                <v-card-text class="subtitle-1" v-html="body" v-if="body"/>
                <v-divider/>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn :color="btnColorProperty" text @click="hideModal">
                        Закрыть
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import Vuetify from 'vuetify/lib';
    import HelpIcon from './HelpIcon';

    const components = {
        // DistributeWorkers: () => import('../dialogs/distributeWorkers.vue')
        HelpIcon
    };

    export default {
        name: 'modal',
        components,
        vuetify: new Vuetify(),
        data () {
            return {
                show: false,
                width: 500,
                titleColorClass: 'grey',
                header: '',
                type: 'default',
                help: '',
                componentName: '',
                componentData: {},
                body: '',
                btnColorProperty: 'primary'
            };
        },
        methods: {
            openModal (data) {
                this.reset();
                this.setWidth(data.width);
                this.setHeader(data.header);
                this.setType(data.type);
                this.setHelp(data.help);
                this.setComponent(data);
                this.setBody(data.body);
                this.showModal();
            },
            reset () {
                this.hideModal();
                this.width = 500;
                this.titleColorClass = 'grey';
                this.header = '';
                this.type = 'default';
                this.help = '';
                this.body = '';
                this.btnColorProperty = 'primary';
            },
            hideModal () {
                this.show = false;
            },
            setWidth (widthData) {
                if (isNaN(widthData)) {
                    this.width = 500;
                } else {
                    this.width = widthData;
                }
            },
            setHeader (headerData) {
                if (typeof headerData === 'object' && headerData !== null) {
                    this.header = Object.values(headerData).join('');
                } else {
                    this.header = headerData;
                }
            },
            setType (typeData) {
                if (typeData) {
                    this.type = typeData;
                    if (typeData === 'alert') {
                        this.titleColorClass = 'red';
                        this.btnColorProperty = 'red';
                        this.header = this.header || 'Внимание';
                    }
                } else {
                    this.type = 'dedault';
                }
            },
            setHelp (helpData) {
                if (helpData) {
                    this.help = helpData;
                } else {
                    this.help = '';
                }
            },
            setComponent (data) {
                if (typeof data.component === 'string') {
                    this.componentData = data;
                    this.componentName = data.component;
                } else {
                    this.componentName = '';
                }
            },
            setBody (bodyData) {
                if (typeof bodyData === 'object' && bodyData !== null) {
                    this.body = Object.values(bodyData).join('');
                } else {
                    this.body = bodyData;
                }
            },
            showModal () {
                this.show = true;
            }
        }
    };
</script>
