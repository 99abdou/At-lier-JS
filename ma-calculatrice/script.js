let input = document.getElementById('iput');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click' , (e) =>{

        // Ici, e.target fait référence au bouton spécifique qui a été cliqué

        // eval() pour évaluer la chaîne string, puis affiche le résultat dans le champ de texte input.
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        // La chaîne string est réinitialisée à une chaîne vide, et le champ de texte input est également mis à jour avec cette chaîne vide.
        else if(e.target.innerHTML == 'C'){
            string = "";
            input.value = string;
        }

        // Si le bouton cliqué a le texte "CE"  La dernière caractère est supprimé de la chaîne string, et le champ de texte input est mis à jour.<<
        else if(e.target.innerHTML == 'CE'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }

        // Si le bouton cliqué est un bouton numérique ou opérateur, le texte du bouton est ajouté à la fin de la chaîne string,
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})