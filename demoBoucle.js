// Quand utiliser un while plutôt qu'un for?
// Le while -> Je ne sais pas combien de fois je vais répéter l'action.
//          -> Tant qu'on a pas gagné ou perdu.
// Le for   -> Je connais le début et la fin

// While
console.log("Avec while")
let x = 0
while(x < 10){
    console.log(x)
    x++
}
console.log("")
// Do...While (fera tjs l'action au moins 1 fois)
console.log("Avec do...while")
let y = 0
do {
    console.log(y)
    y++
}while(y < 10)
console.log("")

// For
console.log("Avec for +")
for (let i=0;i<10;i++){
    console.log(i)
}
console.log("Avec for -")
for (let i=10;i>0;i--){
    console.log(i)
}
let tab = ["un", "deux", "trois", "quatre"]
for (let i=0;i<tab.length;i++){
    console.log(tab[i])
}
console.log("")

// Foreach
// on utilise qd on a déjà un tableau
// Le "in" récupère les éléments
console.log("Avec foreach")
for (let element in tab){
    console.log(element)
}
// Le "of" récupère les valeures
for (let valeur of tab){
    console.log(valeur)
}
console.log("")

// forEach
console.log("Avec la méthode forEach()")
let noms = ["toto", "titi", "tata", "tutu"]
noms.forEach(function(nom) {console.log(nom)}) // version ancienne
noms.forEach(nom => console.log(nom)) // nouvelle version
