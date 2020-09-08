import { ItemFormat } from "../interfaces/ItemFormat.js";
import {ListTemplate} from '../classes/ListTemplate.js'

export function createList(array: ItemFormat[], ul: HTMLUListElement ) {

    array.forEach(item => {
        const list = new ListTemplate(ul);
        list.render(item, item.type, 'end')
    });


}


export const calculateClosing = (opening: number, array: ItemFormat[]) => {


    const netCash: number = array.reduce((a,c)=> {
      if(c.type === 'invoice') return a + c.amount
      else return a - c.amount
    
    }, 0)
    
    return opening + netCash;
      
    }
    