// Calcola la somma e la media dei primi 10 numeri.


let somma = 0;
let numeriTotali = 10;

for ( let i = 0; i <= numeriTotali; i++ ) {

    somma += i;

}

const media = somma / numeriTotali;

console.log(`la somma dei primi 10 numeri è ${somma} e la loro media è ${media}`);