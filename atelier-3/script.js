
const main = document.getElementById("main");
// ma function

function insererOrdre(balise, EntrerTexte) {

    const toutAfficher = document.createElement(balise);
  
    const textAfficher = document.createTextNode(EntrerTexte);
  
    toutAfficher.append(textAfficher);
  
    main.append(toutAfficher);
}

insererOrdre('p', "On fait un meet 1")
insererOrdre('div', "On fait un meet 1")
insererOrdre('li', "On fait un meet 1")
insererOrdre('section', "On fait un meet 1")

  