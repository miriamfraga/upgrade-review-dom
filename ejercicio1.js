'use strict';
// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
 const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

 const list =document.createElement('ul');
for (let i=0; i<countries.length; i++) {
const lies = document.createElement('li');
lies.innerText = countries[i];
list.append(lies);
document.body.append(list);

} console.log(list);

// // 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const toRemove = document.querySelector('.fn-remove-me');
toRemove.remove();
console.log(toRemove);

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let newList = document.createElement('ul');
let inside = document.querySelector('[data-function="printHere"]');
for (let i=0; i<cars.length; i++) {
    const carLies = document.createElement('li');
    carLies.innerText = cars[i];
    newList.append(carLies);

    } inside.append(newList);
console.log(inside);


// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
//  h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
 const list = document.createElement('ul');
for (let countrie of countries) {
const lis = document.createElement('li');
lis.innerHTML = `<div><h4>${countrie.title}</h4> <img src = ${countrie.imgUrl}</img></div>`;
document.body.append(list);
list.appendChild(lis);
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.

const button = document.createElement('button');
button.innerText = 'delete last item';
document.body.append(button);
const deleteButton = () => {
	let last = list.lastChild;
	 list.removeChild(last);
 }; 

 const addEvent = document.querySelector('button');
 addEvent.addEventListener("click", deleteButton);

//  1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.
let liSelects = document.querySelectorAll('li');
 for (let liSelect of liSelects) {
    const boton = document.createElement('button');
    boton.innerText = 'delete this item';
    liSelect.append(boton);
    const deleteButton = () => {
        liSelect.remove();
 }  
 boton.addEventListener("click", deleteButton);

};



















    
    
    
    
    
    
 
 
    
    
