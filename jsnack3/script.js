// Il software deve chiedere per 5 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.


// for

// const numeri = [];

// for( i = 0; i < 5; i++ ) {

//     const numero = parseFloat( prompt('Inserisci un numero') );

//     if(!isNaN(numero)){
//         numeri.push(numero);
//     }

// }

// console.log(numeri);

// const [pN,sN,tN,qN,kN] = numeri;

// const tot = pN + sN + tN + qN + kN;

// console.log(tot);

// while

const numeri = [];

while(numeri.length !== 5) {

    const numero = parseFloat( prompt('Inserisci un numero') );

    if(!isNaN(numero)){
        numeri.push(numero);
    }

}

console.log(numeri);

const [pN,sN,tN,qN,kN] = numeri;

const tot = pN + sN + tN + qN + kN;

console.log(tot);