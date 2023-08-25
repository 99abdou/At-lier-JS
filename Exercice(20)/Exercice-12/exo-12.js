// En utilisant deux boucles for, écrire un script qui produit le résultat ci-dessous, dans la page HTML.

result = '';

for (let i = 0; i <= 5; i++) {
    for (let a = 0; a <= i; a++) {
       result = result + i;
        
    }
    result = result + '<br />';
}

document.write(result);