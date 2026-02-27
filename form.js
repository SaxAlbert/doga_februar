import { Manager } from "./manager.js";
import { createForm,createInputField } from "./functions.js";
/**
 * @import {ColspanType,RowspanType, FormFieldType, CreateFieldsCallback, SubmitEventListener} from "./functions.js"
 */
class FormController{
    /**
     * @type {HTMLFormElement}
     */
    #form
    /**
     * @type {FormFieldType[]}
     */
    #formFields
    /**
     * @type {Manager}
     */
    #manager

    /**
     * 
     * @param {Manager} manager 
     * @param {FormFieldType[]} formFields 
     * @param {HTMLElement} parent 
     */
    constructor(manager,formFields,parent){
        this.#manager=manager
        this.#formFields=[]
        this.#form=createForm((form)=>{
            this.#formFields.push(form)
            
        })
    }

}
class FormField{
    #input
    #required
    #errorDiv
    #name
    get name(){
        return this.#name
    }
    get value(){
        return this.#input.value? this.#input.value :undefined
    }
}
export {FormController as Form,FormField}