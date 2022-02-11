// L'utente inserisce due parole in successione, con due promt.
// Il software stampa prima la parola più corta, poi la parola più.

const parole = [];

while(parole.length !== 2) {
    
    const parola = prompt('Inserisci una parola');

    parole.push(parola);

}

const [primaParola, secondaParola] = parole;

if(primaParola.length >= secondaParola.length) {
    console.log(`${secondaParola} ${primaParola}`);
} else if (primaParola.length < secondaParola.length) {
    console.log(`${primaParola} ${secondaParola}`);
}