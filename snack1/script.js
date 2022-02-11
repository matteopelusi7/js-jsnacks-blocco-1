// L'utente inserisce due numeri in successione, con due promt.
// Il software stampa il maggiore.


const numeri = [];

while(numeri.length !== 2) {
    
    const numero = parseFloat( prompt('Inserisci un numero') );

    if(!isNaN(numero)){
        numeri.push(numero);
    }

}

const [primoNumero, secondoNumero] = numeri;

if(primoNumero > secondoNumero) {
    console.log(primoNumero);
} else if (primoNumero < secondoNumero) {
    console.log(secondoNumero);
} else {
    console.log('i numeri sono uguali', primoNumero, secondoNumero);
}