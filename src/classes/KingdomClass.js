import kingdomNames from '../assets/kingdomNames';
import { getIntegerRandom, getBooleanRandom } from './../helpers/randomHelper';

export default class KingdomClass {
    /**
     * Королевства.
     *
     * @type {Array}
     */
    static kingdoms = [];

    /**
     * Код королевства.
     *
     * @type {Number}
     */
    code = null;

    /**
     * Соседи.
     *
     * @type {Array}
     */
    neighbors = [];

    /**
     * Год.
     *
     * @type {number}
     */
    year = 0;

    /**
     * Автоматически создать все страны.
     */
    static autoSetKingdoms () {
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
            plain: getIntegerRandom(1000, 2000),
            woods: getIntegerRandom(500, 1000),
            mountains: getIntegerRandom(500, 1000),
            sea: getBooleanRandom()
        };

        this.people = {
            peasants: getIntegerRandom(100, 200),
            workers: getIntegerRandom(50, 100),
            warriors: getIntegerRandom(25, 50),
            priests: getIntegerRandom(10, 20)
        };

        this.stocks = {
            money: getIntegerRandom(1000, 2000),
            gold: getIntegerRandom(10, 20),
            corn: this.geo.plain * getIntegerRandom(5, 10),
            wood: this.geo.woods * getIntegerRandom(5, 10),
            minerals: this.geo.mountains * getIntegerRandom(5, 10)
        };

        this.pendingEvents = {
            seafaring: (this.geo.sea && Math.random() > 0.75) ? getIntegerRandom(1, 3) : 0,
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
        const neighborCode = getIntegerRandom(0, KingdomClass.kingdoms.length - 1);
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

    getHtmlWithNeighborsList () {
        const list = [];
        for (let i = 0; i < this.neighbors.length; i++) {
            const neighbor = KingdomClass.kingdoms[this.neighbors[i]];
            // let mood = functions.average(neighbor.mood);
            // mood = functions.convertKToPercent(mood, 0);
            // mood = functions.colorPercentValue(mood);
            const mood = 50;
            list.push('<div class="list-item">' + neighbor.getName() + '&nbsp;&rarr;&nbsp;' + mood + '&nbsp;%' + '</div>');
        }
        return list.join('');
    };

    /**
     * Начать новый год.
     */
    startNewYear () {
        this.year++;
        console.log('startNewYear', 'На этом моменте сбрасываются данные с прошлого года и добавляются новые параметры для текущего года.');
    }
}
