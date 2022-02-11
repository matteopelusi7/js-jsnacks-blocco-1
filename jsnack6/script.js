// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall'utente.


const nN = parseInt( prompt('Quanti numeri vuoi inserire?') );
const numeri = [];

if(!isNaN(nN)){
    
    while (numeri.length !== nN) {
        
        const numero = parseInt( prompt('Inserisci un numero') );

        if(!isNaN(numero)){
            numeri.push(numero**3);
        }

    }
}

console.log(numeri);