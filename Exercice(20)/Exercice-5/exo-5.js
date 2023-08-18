// A l'aide de la fonction prompt(), demander un 
// prix HT puis un taux de la TVA à l'utilisateur puis insérer le prix
//  TTC dans la page HTML à l'aide de document.body.innerText.

let ht = parseFloat(prompt("Mettez le prix ht :"));
let tva = parseFloat(prompt("Mettez le prix tva :"));
let totalTtc=ht*tva/100;

document.body.innerHTML = totalTtc;
