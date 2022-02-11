// Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.


const numeri = [];

while (numeri.length !== 6) {

    const numero = parseInt( prompt('Inserisci un numero') );

    if(!isNaN(numero)){
        
        if (numero % 2 === 1) {
            numeri.push(numero);
        } else {
            numeri.push('');
        }
    }
    
}

console.log(numeri);