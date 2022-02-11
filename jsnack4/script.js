// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.


const invitati = [
    'marco',
    'paolo',
    'pippo',
    'matteo',
    'giovanna'
]

let i = 0;
let find = false;

const nome = prompt('Inserisci il tuo nome');

while (i < invitati.length && !find) {
    
    if (nome === invitati[i]) {
        find = true;
    }

    i++;

}

if (find == true) {
    console.log('Puoi partecipare alla festa!');
} else {
    console.log('Non puoi partecipare');
}