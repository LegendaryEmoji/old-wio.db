import { table } from "./table";
/**
 *
 * db
 * @class db
 */
declare class db {
    /**
     *
     * table
     * @static
     * @memberof db
     */
    static table: typeof table;
    /**
     *
     * fetch
     * @static
     * @param {string} userData
     * @returns {*}
     * @memberof db
     */
    static fetch(userData: string): any;
    /**
     *
     * set
     * @static
     * @param {string} userData
     * @param {*} value
     * @memberof db
     */
    static set(userData: string, value: any): void;
    /**
     *
     * add
     * @static
     * @param {string} userData
     * @param {number} value
     * @returns {void}
     * @memberof db
     */
    static add(userData: string, value: number): void;
    /**
     *
     * delete
     * @static
     * @param {*} userData
     * @memberof db
     */
    static delete(userData: any): void;
    /**
     *
     * fetchAll
     * @static
     * @returns {object}
     * @memberof db
     */
    static fetchAll(): object;
    /**
     *
     * has
     * @static
     * @param {string} userData
     * @returns {(true | false)}
     * @memberof db
     */
    static has(userData: string): true | false;
    /**
     *
     * arrayDeleteVal
     * @static
     * @param {string} userData
     * @param {*} value
     * @memberof db
     */
    static arrayDeleteVal(userData: string, value: any): void;
    /**
     *
     * arrayHas
     * @static
     * @param {string} userData
     * @param {*} value
     * @returns {boolean}
     * @memberof db
     */
    static arrayHas(userData: string, value: any): boolean;
    /**
     *
     * clearDB
     * @static
     * @memberof db
     */
    static clearDB(): void;
    /**
     *
     * deleteDataEach
     * @static
     * @param {string} userData
     * @memberof db
     */
    static deleteDataEach(userData: string): void;
    /**
     *
     * includes
     * @static
     * @param {string} userData
     * @returns {Array<any>}
     * @memberof db
     */
    static includes(userData: string): Array<any>;
    /**
     *
     * objectDeleteKey
     * @static
     * @param {string} userData
     * @param {*} key
     * @memberof db
     */
    static objectDeleteKey(userData: string, key: any): void;
    /**
     *
     * push
     * @static
     * @param {string} userData
     * @param {*} value
     * @memberof db
     */
    static push(userData: string, value: any): void;
    /**
     *
     * startsWith
     * @static
     * @param {string} userData
     * @returns {(Array<any> | null)}
     * @memberof db
     */
    static startsWith(userData: string): Array<any> | null;
    /**
     *
     * backup
     * @static
     * @param {string} file
     * @memberof db
     */
    static backup(file: string): void;
    /**
     *
     * filter
     * @static
     * @param {*} func
     * @returns {*}
     * @memberof db
     */
    static filter(func: any): any;
    /**
     *
     * find
     * @static
     * @param {*} callback
     * @returns {*}
     * @memberof db
     */
    static find(callback: any): any;
    /**
     *
     * backupLoad
     * @static
     * @param {string} file
     * @memberof db
     */
    static backupLoad(file: string): void;
    /**
     *
     * substr
     * @static
     * @param {string} userData
     * @param {number} value
     * @memberof db
     */
    static subbstr(userData: string, value: number): void;
}
export { db };
