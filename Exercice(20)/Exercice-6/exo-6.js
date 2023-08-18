let ht = parseFloat(prompt("Mettez le prix ht :"));
let tva = parseFloat(prompt("Mettez le prix tva :"));
let totalTtc=ht*tva/100+1;

if(ttc > 100) {
    document.body.innerHTML = '<h1 style="color: red;">' + ttc + '</h1>';
 } else {
    document.body.innerHTML = '<h1 style="color: green;">' + ttc + '</h1>';
 }