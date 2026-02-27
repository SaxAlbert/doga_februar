import { createTable } from "./functions.js";
/**
 * @import {ColspanType, RowspanType, HeaderCallback} from "./functions.js"
 */
import { Manager } from "./manager.js";
class Table{
    /**
     * @type {Manager}
     */
    #manager
    /**
     * @type {HTMLTableSectionElement}
     */
    #tbody
    /**
     * 
     * @param {Manager} manager 
     * @param {HTMLElement} parent 
     * @param {HeaderCallback} HeaderCallback 
     */
    constructor(manager,parent, HeaderCallback){
        this.#manager=manager
        this.#tbody.createTable(parent,HeaderCallback)
    }
    addElementCallback(callback){
        this.#manager.addElement(elem)
        this.#tbody.push(callback,elem)
    }

}
export {Table}