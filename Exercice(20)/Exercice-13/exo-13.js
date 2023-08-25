// Déclarer une variable avec le nom de votre choix et avec la valeur 0. Tant que cette variable n'atteint pas 20, il faut :

// l'afficher dans la page HTML;
// incrémenter sa valeur de 2 ;

let result = '';
let monValeur = 0;

while (monValeur <= 20) {
    result = result + monValeur + `<br>`;

    monValeur = monValeur + 2; 
}

document.write(result);