import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { ItemFormat } from './interfaces/ItemFormat.js';
import { createList } from  './utils/createList.js'

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

//Array of Invoices & Payments
let array: ItemFormat[] = []

//Get data from local storage & set array
let data: ItemFormat[] = JSON.parse(localStorage.getItem('history')!)
data ? array = data : null

//if data held, print it
if (array) {
  createList(array, ul)
}

//on Submit
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  //set tuple of values for invoice/payment class creation
  let values: [string, string, string, number];
  values = [type.value, tofrom.value, details.value, amount.valueAsNumber];

  let doc: ItemFormat;
  if (type.value === 'invoice') {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  
  list.render(doc, type.value, 'end');

  array.push(doc)
  localStorage.setItem('history', JSON.stringify(array));
  console.log("array is: ", array)


});

