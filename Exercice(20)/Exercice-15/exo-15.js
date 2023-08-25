let tableau = '<table>';

let lignes = prompt("Nombre de lignes ?");

let colonnes = prompt("Nombre de colonnes ?");

for(let i = 1;i <= lignes;i++) {
   tableau = tableau + '<tr>';
   for(let k = 1;k <= colonnes;k++) {
      tableau = tableau + '<td>Santos</td>';
   }
   tableau = tableau + '</tr>';
}
tableau = tableau + '</table>';
document.body.innerHTML = tableau;