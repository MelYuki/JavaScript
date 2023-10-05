//#region Les constantes prédéfénies
    //NaN -> Not A Number
    console.log(6) // -> Ok
    console.log(6 * "bonjour") // -> NaN
    console.log(parseInt("1")) // -> Ok
    console.log(parseInt("bonjour")) // -> NaN
    //rencontré quand une opération mathématique ou de conversion échoue
    //Pour tester si quelque chose est NaN 
    console.log( isNaN( parseInt("bonjour") ) ) // -> true
    console.log( isNaN( parseInt("5") ) ) // -> false

    //Undefined -> Obtenu quand une variable n'a pas de valeur définie
    let a
    console.clear()
    //console.log( a.toUpperCase() )
    console.log("a vaut : ", a)

    //Math
    console.log(Math.floor(2.6)) //Arrondi à l'entier inférieur (2)
    console.log(Math.ceil(2.4)) //Arrondi à l'entier supérieur (3)
    console.log(Math.round(2.4)) //Arrondi l'entier le plus proche (2)
    console.log(Math.round(2.6)) //Arrondi l'entier le plus proche (3)
//#endregion

//#region Les constantes définies par vous :
    // Convention de nommage pour les constantes
        //Même règles que pour les variables
        //Tout en majuscule, mots espacés par des _   ex : DATE_OF_THE_DAY

    // let pasConstante
    // pasConstante = 45
    // pasConstante = "pouet"
    console.clear()
    const MA_COULEUR_FAV = "noir"
    //MA_COULEUR_FAV = "bleu" -> Pas possible, va provoquer une erreur puisque une constante ne peut plus changer de valeur

    //#region Attention aux constantes avec objets et tableaux
    const PERSON = { 
        nom : "Michi",
        prenom : "Yuki"
    }
    console.log(PERSON.prenom) //Aude
    PERSON.prenom = "Change"
    console.log(PERSON.prenom) //Thomas
    //#endregion

//#endregion

//#region  Les variables
    //Convention de nommage :
        // lowerCamelCase
        // Pas de caractères spéciaux (sauf _ $)
        // Pas de chiffre au début mais ok pour la suite
        // Mettez des noms évocateurs (Pas de lettres, pas de test, pas de bidule etc) : Il faut qu'on sache en un coup d'oeil ce qu'il y a dedans (Si possible, en anglais)
        
    //Les number (Pas de distinction entre int, double etc, tout est number)
    let monNombreEntier = 45
    let monNombreDecimal = 45.78

    //Les chaines de caractères (Pas de distinction entre une chaine de charactères et un seul charactère)
    let maChaine = " Bonjour aujourd'hui nous sommes \"mercredi\" "
    let maChaineBis = ' Bonjour aujourd\'hui nous sommes "mercredi" '
    let monChar = "g"
    let monCharBis = 'h'

    //Les tableaux
    let monTableau = ["Pierre", "Paul", "Jacques"]
    //Attention : Gardez en tête que vous pouvez mettre n'importe quoi dans un tableau vu que le typage est dynamique
    //let monBordel = ["Pierre", 45, true, { }, [], new Date()] 

    //Les tableaux associatifs
    let monTableauAssociatif = {
        "clef" : "valeur",
        "lundi" : "burger",
        "mardi" : 6,
        "mercredi" : true
    }
    monTableauAssociatif["clef"]
    monTableauAssociatif.clef //Pareil qu'au dessus
    //aussi appelé objet
    let melYuki = {
        prenom : "Yuki",
        nom : "Michi"
    }
    melYuki.nom
    melYuki["prenom"]

//#endregion

//#region Différence var - let
// var x = 5

// function osef() {
//     var y = 8
//     if (true) {
//         console.log("5 -> ", y) //8
//         var z = 2
//         console.log("6 -> ", z) //2
//     }
    
//     console.log("1 -> ", y) //8
//     console.log("2 -> ", x) //5
//     console.log("7 -> ", z) //2

// }

// osef()

// //console.log("3 -> ", y) // y is not defined
// console.log("4 -> ", x); //5
// //console.log("8 -> ", z); // is not defined

//--------------------------------------------

let x = 5

function osef() {
    let y = 8
    console.log("1 -> ", y) //8
    console.log("2 -> ", x) //5
    if(true) {
        console.log("5 -> ", y) //8
        let z = 2
        console.log("6 -> ", z) //2
    }
    //console.log("7 -> ", z) //is not defined    
}

osef()


//console.log("3 -> ", y) //y is not defined
console.log("4 -> ", x) //5
//console.log("8 -> ", z) //is not defined
//#endregion

//#region Les différents types primitifs
console.clear()
//Le number
//Le string
//Undefined
//Booléen
let enWeekend = false
let etreMercredi = true
//Null -> Type un peu spécial, ma variable n'est pas indéfinie (undefined) mais elle n'a pas de valeur précise. Pas mal utilisé pour tout ce qui est optionnel, soit pour des fonctions qui n'ont pas marché correctement
let avatar = null
//Objet

// let price = 5.45 
// price.toLocaleString("fr-BE", { })
// let prenom = "Yuki"
// prenom.toString()
//#endregion
