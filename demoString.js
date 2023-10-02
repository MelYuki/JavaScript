let bonjour = "Bonjour nous sommes jeudi"

// La chaine de caractére est dite "itérable",
// peut donc se parcourir comme un tableau.
console.log(bonjour.length)
console.log(bonjour[0])
console.log(bonjour[6])
console.log(bonjour.at(-2))

// Les fonctions
console.log(bonjour.toString()) // s'utilise pour y apporter des options
console.log(bonjour.toLowerCase())
console.log(bonjour.toUpperCase())

// Récupérer une lettre en particulier
bonjour[5]              //-> donne la lettre de l'index 5
bonjour.at[5]           //-> idem
bonjour.charAt(5)       //-> idem
bonjour.at(-5)          //-> donne la 5eme lettre en partant de la fin
bonjour.charCodeAt(5)   //-> donne la valeur unicode de la lettre

// Récupérer la position d'une lettre ou d'un bout de chaine
bonjour.indexOf("s")        //-> donne l'(les) index de la lettre
bonjour.indexOf("s", 6)     //-> idem en commençant par l'index 6

bonjour.indexOf("ou")       //-> arrête au premier et donne le premier index
bonjour.lastIndexOf("ou")   //-> arrête au dernier et donne le dernier index
    // Si on veut trouver au milieu,
    // il faudra chaque fois partir de l'index suivant le premier trouvé

// Remplacer qlq chose dans la chaine
console.log(bonjour.replace("jeudi", "vendredi"))
    // Ne remplace que la première occurence
console.log(bonjour.replaceAll("ou", "ii"))
    // Remplace toutes les occurences

// Comment récupérer des bouts de la chaine
let boutDel = bonjour.substring(0, 8)
console.log(boutDel)
console.log(bonjour)

// Supprimer une partie de la chaine
bonjourModif = bonjour.replace("Bonjour ", "")
console.log(bonjourModif)

// Comment éclater la chaine
split1 = bonjour.split(" ")
console.log(split1)
split2 = bonjour.split("")
console.log(split2)
//ex concret
let monFichier = "monSuperAvatar.png" //-> ce qu'on a à la base
let nomFichier = monFichier.split(".")[0]
let extFichier = monFichier.split(".")[1]
console.log(nomFichier)
console.log(extFichier)

// Bonus slide
// includes
console.log(bonjour)
console.log(bonjour.includes("jeudi"))
console.log(bonjour.includes("vendredi"))
    // Renvoie un boolean
// trim
//let entree = "oui"
let entree = "                   yes              "
console.log(entree)
console.log(entree.length)
console.log(entree.trim())
let entree2 = "                   yes or no              "
console.log(entree2)
console.log(entree2.length)
console.log(entree2.trim())

// la concaténation
let string1 = "oui"
let string2 = "non"
//let string3 = string1.concat(string2)
//let string3 = string1 + string2
let string3 = string1 + " et " + string2
console.log(string3)

let forma = "Web Mobile"
let jourSem = "jeudi"
let jourNum = 6
console.log("Bonjour les " + forma + ", nous sommes le " + jourSem + " " + jourNum)
// Interpolation
console.log(`Bonjour les ${forma}, nous sommes le ${jourSem} ${jourNum}`)

// alert, prompt, confirm
alert("Try alert")
//prompt("Entrer votre chiffre")
let user = prompt("Entrer votre chiffre")
console.log(user)
alert(`Votre chiffre est ${user}`)
let sure = confirm("Est-ce correcte?")
console.log(sure)

