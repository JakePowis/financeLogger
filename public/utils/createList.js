import { ListTemplate } from '../classes/ListTemplate.js';
export function createList(array, ul) {
    array.forEach(item => {
        const list = new ListTemplate(ul);
        list.render(item, item.type, 'end');
    });
}
