//Déclarez des variables et modifiez leurs valeurs

let openclass = 5; //déclarer les variables
openclass = 10; //modifier le contenu d'une variable

console.log(openclass);

// Enregistrez vos données avec des types de données

let episodeTitle = 'Vie de DEV'
episodeDuration = 50
hasBeenWatched = false

// Définissez des objets et leurs attributs avec des classes
let episode = {
    title: 'Vie de developpeur',
    duration: 45,
    hasBeenWatched: true
}

// Regroupez vos données avec les tableaux et les objets

let episodes = ['firstEpisode', 'secondEpisode', 'thirdEpisode'];

// Choisissez la condition appropriée pour contrôler le déroulement de votre programme (if, else, switch)

//On pointe sur l'élément de message
const espaceMessage = document.getElementById("message");
//On pointe sur l'élément de bouton
const bouton = document.getElementById("bouton");
//On pointe sur l'élément de champ de saisie de l'age
const ageInput = document.getElementById("age");
//On pointe sur l'élément de la checkbox de contrôle parental
const parentalInput = document.getElementById("parental");
//On défini la variage age qu'on utilisera et un variable définissant l'age de la majorité
let age;
let isControlParentalActive;
let ageMajorite = 18;


//Cette fonction affichera le message de validation
function valider(){
  espaceMessage.innerHTML = "Vous êtes autorisé à entrer";
}

//Cette fonction affichera un message d'erreur
function refuser(){
  alert("Cette espace est interdit aux personnes mineurs");
}


// Utilisez la bonne boucle pour répéter les tâches (for, while)

const numberOfPassengers = 10;
for (let i = 0; i < numberOfPassengers; i++) {
    console.log("Passager embarqué !");
}

console.log("tous les passagers sont embarqués");

// la boucles

const passengers = [
    "Will Alexander",
    "Sarah Kate'",
    "Audrey Simon",
    "Tao Perkington"
]

for (let i in passengers) {
   console.log("Embarquement du passager " + passengers[i]);
}

// Gérez des erreurs et des exceptions dans votre programme
// Définissez des méthodes d'instance et des propriétés

class Show {
    constructor(title, numberOfSeasons) {
      this.title = title;
      this.numberOfSeasons = numberOfSeasons;
      this.ratings = [];
      this.averageRating = 0;
    }
    
    addRating(rating) {
      this.ratings.push(rating);
      let sum = 0;
      for (let rating of this.ratings) {
        sum += rating;
      }
      
      this.averageRating = sum / this.ratings.length;
    }
  }

// Écrivez des fonctions propres

const generateComponent = (show) => {
    const titleText = show.title;
    const seasonsText = show.numberOfSeasons + ' seasons';
    const episodesText = show.episodesPerSeason + ' episodes per season';
    return {
      titleText,
      seasonsText,
      episodesText
    };
  }

// Testez qu'une fonction fait ce qu'elle dit 
