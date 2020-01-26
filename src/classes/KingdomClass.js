import kingdomNames from '../assets/kingdomNames';
import { getIntegerRandom, getBooleanRandom } from './../helpers/randomHelper';
import { average, convertKToPercent } from './../helpers/convertHelper';

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
            warriors: getIntegerRandom(34, 68),
            priests: getIntegerRandom(16, 32)
        };

        this.jobs = {
            crops: 0, // посевы
            logging: 0, // заготовка леса
            mining: 0 // добыча руды
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
            let mood = average(neighbor.mood);
            mood = convertKToPercent(mood, 0);
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
    };

    /**
     * Получить общее количество населения.
     *
     * @returns {number}
     */
    getPeopleCount () {
        return this.people.peasants + this.people.warriors + this.people.workers + this.people.priests;
    };

    /**
     * Автоматически распределить работы.
     */
    distributeJobsAuto () {
        this.jobs.crops = 0;
        this.jobs.findNewLands = 0;
        this.jobs.logging = 0;
        this.jobs.mining = 0;

        this.jobs.crops = Math.min(this.geo.plain, this.people.peasants);
        this.jobs.findNewLands = Math.max(this.people.peasants - this.geo.plain, 0);
        const woodsAndMountains = this.geo.woods + this.geo.mountains;
        if (woodsAndMountains) {
            this.jobs.logging = Math.min(this.geo.woods, Math.floor(this.people.workers * this.geo.woods / woodsAndMountains));
            this.jobs.mining = Math.min(this.geo.mountains, Math.floor(this.people.workers * this.geo.mountains / woodsAndMountains));
            let workersRest = this.people.workers - this.jobs.logging - this.jobs.mining;
            if (workersRest > 0) {
                if (this.jobs.logging < this.geo.woods) {
                    const workersToLogging = Math.min(this.geo.woods - this.jobs.logging, workersRest);
                    this.jobs.logging += workersToLogging;
                    workersRest -= workersToLogging;
                }
                if (this.jobs.mining < this.geo.mountains) {
                    const workersToMining = Math.min(this.geo.mountains - this.jobs.mining, workersRest);
                    this.jobs.mining += workersToMining;
                }
            }
        }
    }
}
