// /* 1 UZDUOTIS:
// Pakeisti tekstini turini h1 elemente i "Labas vakaras!"
// */

// const h1DOM = document.querySelector('h1');
// h1DOM.innerText = 'Labas vakaras!';

// /*
// Jeigu jusu vardo raide yra A-P:
// surasti paragrafa ir pakeisti teksta i "Siandien grazus oras!"

// Jeigu jusu vardo raide R-Z:
// surasti nuoroda ir pakeisti teksta i "Spausk mane!"

// */

// const pDOM = document.querySelector('p');
// pDOM.innerText = 'Siandien grazus oras!';


console.log('_____________________________________________'); 

/* 
surasti visus ingredientus ir ju pavadinimus atspausdinti i console

visu ingredientu pavadinimai turi buti didziosiomis raidemis ir sudeti i array

Isspausdinti gauta array i console
*/

// ______________________________________________________________________
// 2 UZDUOTIS:
// const liDOM = document.querySelectorAll('li');
// const ingredientai = [];



// for (let i = 0; i < liDOM.length; i++) {
//     const ingredientas = liDOM[i].innerText.toUpperCase();
//     ingredientai.push(ingredientas);
   
// }  
//     console.log(ingredientai);
    

console.log('_____________________________________________');

// 3 UZDUOTIS:
/*
// Surasti h1 (antraste)
// Prideti prie jos CSS class, kuri pakeicia teksto spalva i raudona

// Surasti visus ingredientus
// Kiekvienam ingredientui prideti CSS class pavadinimu darzove

// */

// const h1DOM = document.querySelector('h1');
// h1DOM.classList.add('simba');

// const liDOM = document.querySelectorAll('li');

// for (let i = 0; i < liDOM.length; i++) {
//     liDOM[i].classList.add('darzove');
// }

console.log('_______________________________________________');

/* Surasti h1 (antraste)
Prideti prie jos CSS class, kuri pakeicia teksto spalva i raudona

Surasti visus ingredientus
Kiekvienam ingredientui prideti CSS class pavadinimu darzove
*/

const h1DOM = document.querySelector('h1');
h1DOM.classList.add('simba');

