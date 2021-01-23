"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table = void 0;
const main_1 = require("./main");
/**
 *
 * table
 * @export
 * @class table
 */
class table {
    /**
     * Creates an instance of table.
     * @memberof table
     */
    constructor() {
        void 0;
    }
    /**
     *
     * createTable
     * @param {string} key
     * @memberof table
     */
    createTable(key) {
        main_1.db.set(key, []);
    }
    /**
     *
     * set
     * @param {*} key
     * @param {*} value
     * @memberof table
     */
    set(key, value) {
        main_1.db.push(key, value);
    }
    /**
     *
     * filter
     * @param {*} key
     * @param {*} callback
     * @returns
     * @memberof table
     */
    filter(key, callback) {
        const fetched = main_1.db.fetch(key);
        const arr = [];
        for (const x of fetched) {
            if (callback(x))
                arr.push(x);
        }
        return arr;
    }
    /**
     *
     * find
     * @param {*} key
     * @param {*} callback
     * @returns
     * @memberof table
     */
    find(key, callback) {
        return this.filter(key, callback)[0];
    }
}
exports.table = table;
