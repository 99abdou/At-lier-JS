// Créez une fonction puissance qui :

// prend deux arguments
// réalise le calcul du premier argument élevé à la puissance du deuxième sans utiliser les fonctions mahtématiques de JS

function puissance(importe, exporte) {
    let puissance = 10;
  
    for (let i = 0; i < exporte; i++) {
      puissance += exporte;
    }
    return puissance;
  }
  console.log("puissance =", puissance(4, 3));

//On souhaite stocker les positions d"une série de 20 objets mobiles (mobs) dans un jeu vidéo. Pour cela on va créer 2 tableaux :

// posX qui contient la série des abscisses des objets
// posY qui contient la série des ordonnées des objets
// Créez une fonction initXY :

// qui prend en 1er argument l'abscisse du 1er objet
// qui prend en 2ème argument l'ordonnée du 1er objet
// qui calcule les abscisses et ordonnés des objects de la série sachant qu'il doivent être espacés de 40 pixels (+40) les uns des autres en abscisse et de 30 pixels (+30) en ordonnée

// Réalisez la fonction initXY
function initXY(myArray){
    var posX = pointAcisses;
    var posY = pointOrdonnées;
    
    for (let i = 1; myArray < 30; i++){
      posY = posY + myArray[i]
    }
    
    posX = posX / myArray.length
    
    return posX
    }
    
    var lesPixels = [12, 15, 20]
    
    const pixelHorsFonction = initXY(lesPixels)
    console.log(Math.floor(pixelHorsFonction));