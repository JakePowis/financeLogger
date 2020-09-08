import { Payment } from './Payment.js';
import { Invoice } from './Invoice.js';
export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        item.type === 'payment' ? h4.style.color = "crimson" : null;
        li.append(h4);
        const container = document.createElement('div');
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
        container.append(p);
        container.append(amount);
        li.append(container);
        li.append(del);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
