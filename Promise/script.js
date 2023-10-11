function addition(x, y) {
    return new Promise((resolve, reject) => {
      if (typeof x !== 'number' || typeof y !== 'number') {
        reject(new Error('Les paramètres doivent être des nombres'));
      } else {
        const resultat = x + y;
        resolve(resultat);
      }
    });
}
  
addition(5, 4)
    .then((resultat) => {
    console.log('Le résultat du calcul (addition) est :', resultat);
})
    .catch((resultat) => {
    console.error('Une erreur s\'est produite :', resultat);
});
  
// MODULO

function modulo(a, b) {
    return new Promise((resolve, reject) => {
        if (!Number.isInteger(b)){
        reject("La valeur de B doit etre un entier");
    } else {
        const resultat = a % b;
        resolve(resultat);
    }

    });
}

modulo(5, 3)
.then ((resultat)=> {
console.log(`le resultat du calcul (modulo) est:`, resultat)
})
.catch((resultat)=> {
    console.error ("une erreur a été détectée:", resultat )
})

// SOUSTRACTION

function soustraction(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
          reject(new Error('le calcule n\'est pas faite '));
    } else {
          const resultat = a - b;
          resolve(resultat);
        }
    });
}

soustraction(5, 2)
.then ((resultat)=> {
console.log(`le resultat du calcul (soustraction) est:`, resultat)
})
.catch((resultat)=> {
    console.error ("une erreur a été détectée:", resultat )
})

// DIVISION

function division(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
          reject(new Error('le calcule n\'est pas faite '));
    } else {
          const resultat = a - b;
          resolve(resultat);
        }
    });
}

division(5, 2)
.then ((resultat)=> {
console.log(`le resultat du calcul (division) est:`, resultat)
})
.catch((resultat)=> {
    console.error ("une erreur a été détectée:", resultat )
})

// MULTIPLICATION

function multiplication(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
          reject(new Error('le calcule n\'est pas faite '));
    } else {
          const resultat = a * b;
          resolve(resultat);
        }
    });
}

multiplication(5, 5)
.then ((resultat)=> {
console.log(`le resultat du calcul (multiplication) est:`, resultat)
})
.catch((resultat)=> {
    console.error ("une erreur a été détectée:", resultat )
})