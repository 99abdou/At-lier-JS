// Créer un Tableau

let prenom = ['Moise', 'Ibrahim', 'Yunus'];

console.log(prenom);


// Accéder à un élément du tableau 

let numéro = [12, 35, 18, 45];

console.log(numéro[3]);

// Boucler sur un tableau

prenom.forEach(function(Moise, Ibrahim, Yunus) {
    console.log(Moise, Ibrahim);
})

// Ajouter à la fin du tableau
// on utilise la méthode push ()

let newLength = prenom.push('Omar');

console.log(prenom);

// Supprimer le dernier élément du tableau
// on utilise la méthode pop ()

let equipe = ['Casa', 'Jaraaf', 'Generation foot']

equipe.pop()
console.log(equipe);

// Supprimer le premier élément du tableau
let ligue = ['Casa', 'Jaraaf', 'Generation foot']

ligue.shift()
console.log(ligue);

// Copier un tableau

let fruits = ["Strawberry", "Mango"];

console.log(fruits);