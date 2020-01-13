import kingdomNames from '../assets/kingdom-names.json';
import { randomHelper, getBooleanRandom } from '../helpers/randomHelper.js';

export default class KingdomClass {
    /**
     * Страны.
     */
    static kingdoms = [];

    /**
     * Соседи.
     */
    neighbors = [];

    /**
     * Автоматически создать все страны.
     */
    autoSetKingdoms () {
        const kingdomsCount = Object.values(KingdomClass.names).length;
        for (let i = 0; i < kingdomsCount; i++) {
            const newKingdom = new KingdomClass();
            newKingdom.code = i;
            newKingdom.setKingdomDefaults();
            KingdomClass.kingdoms[i] = newKingdom;
        }
        for (let j = 0; j < KingdomClass.kingdoms.length; j++) {
            KingdomClass.kingdoms[j].addRandomNeighbor();
            KingdomClass.kingdoms[j].addRandomNeighbor();
        }
        for (let k = 0; k < KingdomClass.kingdoms.length; k++) {
            if (KingdomClass.kingdoms[k].neighbors.length < 3) {
                KingdomClass.kingdoms[k].addRandomNeighbor();
            }
        }
    };

    /**
     * Наименования стран.
     */
    static names = kingdomNames;

    /**
     * Установить умолчания для страны.
     */
    setKingdomDefaults () {
        this.geo = {
            plain: randomHelper(1000, 2000),
            woods: randomHelper(500, 1000),
            mountains: randomHelper(500, 1000),
            sea: getBooleanRandom()
        };

        this.people = {
            peasants: randomHelper(100, 200),
            workers: randomHelper(50, 100),
            warriors: randomHelper(25, 50),
            priests: randomHelper(10, 20)
        };

        this.stocks = {
            money: randomHelper(1000, 2000),
            gold: randomHelper(10, 20),
            corn: this.geo.plain * randomHelper(5, 10),
            wood: this.geo.woods * randomHelper(5, 10),
            minerals: this.geo.mountains * randomHelper(5, 10)
        };

        this.pendingEvents = {
            seafaring: (this.geo.sea && Math.random() > 0.75) ? randomHelper(1, 3) : 0,
            wedding: 0,
            childBirth: 0
        };

        this.mood = {
            peasants: 0.5,
            workers: 0.5,
            warriors: 0.5,
            priests: 0.5
        };

        this.family = {
            wife: false,
            son: false,
            daughter: false
        };
    };

    /**
     * Добавить стране соседа.
     */
    addRandomNeighbor () {
        const neighborCode = randomHelper(0, KingdomClass.kingdoms.length - 1);
        if (this.neighbors.indexOf(neighborCode) === -1) {
            this.neighbors.push(neighborCode);
        }
        if (KingdomClass.kingdoms[neighborCode].neighbors.indexOf(this.code) === -1) {
            KingdomClass.kingdoms[neighborCode].neighbors.push(this.code);
        }
    };

    /**
     * Получить наименование страны.
     *
     * @returns {string}
     */
    getName () {
        return KingdomClass.names[this.code];
    };
}
