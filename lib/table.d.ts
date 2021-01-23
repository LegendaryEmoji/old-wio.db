/**
 *
 * table
 * @export
 * @class table
 */
export declare class table {
    /**
     * Creates an instance of table.
     * @memberof table
     */
    constructor();
    /**
     *
     * createTable
     * @param {string} key
     * @memberof table
     */
    createTable(key: string): void;
    /**
     *
     * set
     * @param {*} key
     * @param {*} value
     * @memberof table
     */
    set(key: any, value: any): void;
    /**
     *
     * filter
     * @param {*} key
     * @param {*} callback
     * @returns
     * @memberof table
     */
    filter(key: any, callback: any): any;
    /**
     *
     * find
     * @param {*} key
     * @param {*} callback
     * @returns
     * @memberof table
     */
    find(key: any, callback: any): any;
    5: any;
}
