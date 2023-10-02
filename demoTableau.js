// Créer un tableau
let simpleTab = ["Yuki", "michi", "Mel", "Vin"]
    // -> le plus rencontré
let tabWithArrayClass = new Array(2)
    // -> Fais un tab de 2cases avec "undefined" dans chacune des cases
let tabWithArrayClassBis = new Array("Yuki", "Michi", "Mel", "Vin")

// Accéder à une valeur
console.log(simpleTab[2])
console.log(simpleTab.at(-2))

// Modifier une valeur
simpleTab[1] = "Michi"
console.log(simpleTab)

// Ajouter une valeur
simpleTab[4] = "Add"
console.log(simpleTab)
    // Ou
simpleTab[simpleTab.length] = "Another"
console.log(simpleTab)
    // Ou
simpleTab.push("Again") // Ajoute à la fin
console.log(simpleTab)
simpleTab.unshift("Aie") // Ajoute au début
console.log(simpleTab)

// Supprimer une valeur
simpleTab.pop() // Supprime le dernier
console.log(simpleTab)
simpleTab.shift() // Supprime le premier
console.log(simpleTab)
    // Ou
// Slice
let sliced = simpleTab.slice(4,6)
console.log("Tab de base -> ", simpleTab) // Le tableau ne sera pas changé
console.log("Tab découpé -> ", sliced)
// Splice
let spliced = simpleTab.splice(4,2)
console.log("Tab de base -> ", simpleTab) // Le tableau sera changé
console.log("Tab dégagé -> ", spliced)

// AFficher le tableau sous forme de chaine de caractère
// .toString sépare par des virgules
let simpleTabString = simpleTab.toString()
console.log(simpleTabString)
// .join sépare par ce qu'on précise
let simpleTabJoin = simpleTab.join(" ")
console.log(simpleTabJoin)

// Inverser les éléments
simpleTab.reverse()
console.log(simpleTab)

// Trier un tableau
console.log(simpleTab.sort())


// !!! COMPLETER AVEC LE ZIP !!!