
const main = document.getElementById("main");
// ma function

function insererOrdre(balise, EntrerTexte) {

    const toutAfficher = document.createElement(balise);
  
    const textAfficher = document.createTextNode(EntrerTexte);
  
    toutAfficher.append(textAfficher);
  
    main.append(toutAfficher);
}

insererOrdre('h1', "On fait un meet 1")

  