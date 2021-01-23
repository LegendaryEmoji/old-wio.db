"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const fs_1 = require("fs");
const table_1 = require("./table");
const oku = () => JSON.parse(fs_1.readFileSync("./database.json", "utf8"));
const yazdir = (data) => fs_1.writeFileSync("./database.json", JSON.stringify(data, null, 2));
const err = (e) => TypeError(e);
try {
    oku();
}
catch (_a) {
    yazdir({});
}
/**
 *
 * db
 * @class db
 */
class db {
    /**
     *
     * fetch
     * @static
     * @param {string} userData
     * @returns {*}
     * @memberof db
     */
    static fetch(userData) {
        if (!userData)
            throw err("Çekilicek veri belirtilmedi.");
        const data = oku();
        return data[userData] ? data[userData] : null;
    }
    /**
     *
     * set
     * @static
     * @param {string} userData
     * @param {*} value
     * @memberof db
     */
    static set(userData, value) {
        if (!userData)
            throw err("Tanımlanmayan değer.");
        if (isNaN(value))
            if (!value)
                throw err("Tanımlanmayan değer.");
        const data = oku();
        data[userData] = value;
        yazdir(data);
    }
    /**
     *
     * add
     * @static
     * @param {string} userData
     * @param {number} value
     * @returns {void}
     * @memberof db
     */
    static add(userData, value) {
        const data = oku();
        if (isNaN(value))
            if (!value)
                throw err("Ekliyeceğim şeyi belirtmelisin.");
        if (typeof value != "number")
            throw err("Ekliyeceğim şey sayı türünden olmalıdır.");
        if (data[userData] === undefined)
            return this.set(userData, value);
        data[userData] += value;
        yazdir(data);
    }
    /**
     *
     * delete
     * @static
     * @param {*} userData
     * @memberof db
     */
    static delete(userData) {
        if (isNaN(userData)) {
            if (!userData)
                throw err("Neyi silmem gerektigini anlamadım.");
        }
        const data = oku();
        if (!data[userData] && data[userData] !== 0)
            throw err("Böyle bir veri yok ki sileyim.");
        delete data[userData];
        yazdir(data);
    }
    /**
     *
     * fetchAll
     * @static
     * @returns {object}
     * @memberof db
     */
    static fetchAll() {
        const data = oku();
        return data;
    }
    /**
     *
     * has
     * @static
     * @param {string} userData
     * @returns {(true | false)}
     * @memberof db
     */
    static has(userData) {
        const data = oku();
        return data[userData] ? true : false;
    }
    /**
     *
     * arrayDeleteVal
     * @static
     * @param {string} userData
     * @param {*} value
     * @memberof db
     */
    static arrayDeleteVal(userData, value) {
        if (!userData || !value)
            throw err("Parametreleri girin.");
        const data = this.fetch(userData);
        if (!Array.isArray(data))
            throw err("Veri Array olmak zorundadır.");
        if (!this.arrayHas(userData, value))
            throw err("Array'de böyle veri yok silemiyorum.");
        const newArr = [];
        data
            .filter((a) => a !== value)
            .forEach((a) => newArr.push(a));
        this.set(userData, newArr);
    }
    /**
     *
     * arrayHas
     * @static
     * @param {string} userData
     * @param {*} value
     * @returns {boolean}
     * @memberof db
     */
    static arrayHas(userData, value) {
        if (!userData || !value)
            throw err("Parametreleri girin.");
        const data = this.fetch(userData);
        if (!Array.isArray(data))
            throw err("Veri Array olmak zorundadır.");
        return data.indexOf(value) > -1 ? true : false;
    }
    /**
     *
     * clearDB
     * @static
     * @memberof db
     */
    static clearDB() {
        yazdir({});
    }
    /**
     *
     * deleteDataEach
     * @static
     * @param {string} userData
     * @memberof db
     */
    static deleteDataEach(userData) {
        if (!userData)
            throw err("Silmem gereken veriyi tanımlayın.");
        const allData = oku();
        let keys = Object.keys(allData);
        if (keys == "")
            throw err("Böyle bir veri yok silemem.");
        keys = keys.filter((a) => a.includes(userData));
        keys.forEach((a) => {
            this.delete(a);
        });
    }
    /**
     *
     * includes
     * @static
     * @param {string} userData
     * @returns {Array<any>}
     * @memberof db
     */
    static includes(userData) {
        if (!userData)
            throw err("Çekmem gereken veriyi belirtin.");
        const allData = oku();
        let keys = Object.keys(allData);
        keys = keys.filter((a) => a.includes(userData));
        if (keys === "")
            throw err("Databasede böyle veri yok.");
        return keys;
    }
    /**
     *
     * objectDeleteKey
     * @static
     * @param {string} userData
     * @param {*} key
     * @memberof db
     */
    static objectDeleteKey(userData, key) {
        if (!userData)
            throw err("Lütfen veriyi belirtin.");
        if (!key)
            throw err("Silinicek veriyi belirtin.");
        const f = this.has(userData);
        if (!f)
            throw err("Böyle bir veri yok.");
        const data = this.fetch(userData);
        if (typeof data != "object" || Array.isArray(data))
            throw err("Belirtilen veri object tipinde bir veri değil.");
        if (!data[key])
            throw err("Belirtilen veride böyle bir key yok.");
        delete data[key];
        this.set(userData, data);
    }
    /**
     *
     * push
     * @static
     * @param {string} userData
     * @param {*} value
     * @memberof db
     */
    static push(userData, value) {
        const data = oku();
        if (!Array.isArray(data[userData]))
            throw err("Girilen değer Array olmak zorundadır.");
        data[userData].push(value);
        yazdir(data);
    }
    /**
     *
     * startsWith
     * @static
     * @param {string} userData
     * @returns {(Array<any> | null)}
     * @memberof db
     */
    static startsWith(userData) {
        if (!userData)
            throw err("Bulunacak değer belirtilmedi..!");
        const data = oku();
        const arr = [];
        const res = [];
        const keys = Object.keys(data);
        keys
            .filter((a) => a.startsWith(userData))
            .forEach((a) => arr.push(a));
        arr.forEach((a) => {
            res.push(data[a]);
        });
        if (res.length === 0)
            return null;
        else
            return res;
    }
    /**
     *
     * backup
     * @static
     * @param {string} file
     * @memberof db
     */
    static backup(file) {
        if (!file)
            throw err("Yedekliyecegim dosyanın ismini yaz.");
        if (!file.endsWith(".json"))
            throw err("Yedekliyecegim dosya json uzantılı olmalı.");
        const data = oku();
        fs_1.writeFileSync(`./${file}`, JSON.stringify(data, null, 4));
    }
    /**
     *
     * filter
     * @static
     * @param {*} func
     * @returns {*}
     * @memberof db
     */
    static filter(func) {
        const arr = [];
        const all = this.fetchAll();
        for (const i in all) {
            if (func(all[i]))
                arr.push(all[i]);
        }
        return arr;
    }
    /**
     *
     * find
     * @static
     * @param {*} callback
     * @returns {*}
     * @memberof db
     */
    static find(callback) {
        return this.filter(callback)[0];
    }
    /**
     *
     * backupLoad
     * @static
     * @param {string} file
     * @memberof db
     */
    static backupLoad(file) {
        if (!file)
            throw err("Yedekliyecegim dosyanın ismini yaz.");
        if (!file.endsWith(".json"))
            throw err("Yedekliyecegim dosya json uzantılı olmalı.");
        const data = oku();
        try {
            oku();
            fs_1.writeFileSync("./database.json", JSON.stringify(data, null, 2));
        }
        catch (_a) {
            fs_1.writeFileSync("./database.json", JSON.stringify(data, null, 2));
        }
    }
    /**
     *
     * substr
     * @static
     * @param {string} userData
     * @param {number} value
     * @memberof db
     */
    static subbstr(userData, value) {
        if (!userData || !value)
            throw err("Parametreleri düzgün girin.");
        if (typeof value != "number")
            throw err("2. parametre sayı olmalıdır.");
        if (value < 1)
            throw err("Sayı 1'den küçük olamaz.");
        let data = this.fetch(userData);
        if (isNaN(data))
            throw err("Asıl değer bir sayı degil.");
        if (data < value)
            throw err("Eksilteceğim değer asıl değerden büyük olamaz.");
        data = data - value;
        this.set(userData, data);
    }
}
exports.db = db;
/**
 *
 * table
 * @static
 * @memberof db
 */
db.table = table_1.table;
