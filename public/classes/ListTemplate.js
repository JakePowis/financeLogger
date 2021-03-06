import { Payment } from './Payment';
import { Invoice } from './Invoice';
import { calculateClosing } from '../utils/createList';
export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos, array) {
        //for update to opening & closing cash
        const openingBalInput = document.querySelector('#opening');
        const closingBalDiv = document.querySelector('#closing');
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        item.type === 'payment' ? h4.style.color = "crimson" : null;
        li.append(h4);
        const textcontainer = document.createElement('div');
        const p = document.createElement('p');
        //use own format function when adding obejct with class
        if (item instanceof Invoice || item instanceof Payment) {
            p.innerText = item.format();
        }
        //for when getting from JSON local store and object has lost class
        else {
            item.type === 'invoice' ? p.innerText = `${item.client} owes you £${item.amount} for ${item.details}` :
                p.innerText = `${item.recipient} is owed £${item.amount} for ${item.details}`;
        }
        const amount = document.createElement('p');
        amount.innerText = item.type === 'invoice' ? `+£${item.amount}` : `-£${item.amount}`;
        item.type === 'payment' ? amount.style.color = "crimson" : amount.style.color = "navy";
        const del = document.createElement('button');
        del.innerText = 'delete';
        const index = this.container.children.length;
        del.id = String(index);
        del.onclick = function () {
            //delete from saved array by index
            array.splice(index, 1);
            //saved new array to local store
            localStorage.setItem('history', JSON.stringify(array));
            //remove the li from HTML
            li.remove();
            //TODO: update closing bal
            let closingBal = calculateClosing(Number(openingBalInput.value), array);
            closingBalDiv.textContent = `£${String(closingBal)}`;
        };
        textcontainer.append(p);
        textcontainer.append(amount);
        li.append(textcontainer);
        li.append(del);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
        //TODO: update closing bal
        let closingBal = calculateClosing(Number(openingBalInput.value), array);
        closingBalDiv.textContent = `£${String(closingBal)}`;
    }
}
