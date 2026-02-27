/**
 * @import {ColspanType,RowspanType} from "./functions.js"
 */
class Manager{
    /**
     * @type {ColspanType[]|RowspanType[]}
     */
    #data
    /**
     * @type {AddCallback}
     */
    #callback

    set addcallback(ertek){
        return this.#callback(ertek)
    }
    constructor(){
        this.#data=[]
    }
    addElement(elem){
        this.#data.push(elem)
        if(this.#callback){
            this.#callback(elem)
        }
    }
}
export {Manager}