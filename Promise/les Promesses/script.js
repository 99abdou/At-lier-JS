const promesse1 = new Promise((resolve, reject) => {
    const aleatoire = Math.trunc(Math.random() * 10) + 1;

    if (aleatoire <= 5) {
        resolve("Succés : Entre 5 & 1 !")
    } else {
        reject("ERREUR : Entre 6 et 10 !")
    }
})

.then((txt) => {
    console.log(txt);
})

.then(() => {
    console.log("Hello depuis le second then");
})

.then(() => {
    console.log("TROISIEME THEN !");
})

.catch((txt) => {
    console.log("txt");
})