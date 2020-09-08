import { ItemFormat } from "../interfaces/ItemFormat.js";
import {ListTemplate} from '../classes/ListTemplate.js'

export function createList(array: ItemFormat[], ul: HTMLUListElement ) {

    array.forEach(item => {
        const list = new ListTemplate(ul);
        list.render(item, item.type, 'end')
    });


}