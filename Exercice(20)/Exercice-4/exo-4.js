let HT = (prompt("Saisissez le montant HT : "));
let TVA = 20/100;
let TTC =  (HT * TVA);

document.body.innerHTML = TTC;