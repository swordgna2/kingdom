export default class ReignClass {
    /**
     * Год правления.
     *
     * @type {Number}
     */
    number = 0;

    /**
     * Сложность.
     *
     * @type {string}
     */
    difficulty = 'normal';

    /**
     * Королевство.
     *
     * @type {KingdomClass}
     */
    myKingdom;

    /**
     * Компонент диалогов.
     *
     * @type {Object}
     */
    dialogComponent;

    startNewYear () {
        this.dialogComponent.componentOptions.myKingdom = this.myKingdom;
        this.dialogComponent.componentName = 'distribute-workers';
    }
}
