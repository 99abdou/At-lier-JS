// Déclarer une variable budget qui 
// contient le budget de votre choix

let budget = parseInt(prompt("Veilllez mettre votre Budget :"));
let achats = parseInt(prompt("Veilllez mettre le montant Achats :"));

if (budget >= achats) {
    alert(" le budget permet de payer les achats");
} else {
    alert(" le budget ne permet pas de payer les achats ");
}
