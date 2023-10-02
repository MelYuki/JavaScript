// if ... else if ... else

/*
let age = parseInt(prompt("Entrez votre age :"))
console.log(age)
if(age == 17){
    alert("Vous êtes bientôt majeur!")
}
else if(age >= 18){
    alert("Vous êtes majeur!")
}
else if(age < 17 && age > 15){
    alert("Vous êtes adolescent!")
}
else{
    alert("Vous êtes mineur!")
}
*/

// switch

/*
switch(expressionAComparer){
    case valeurAComparer1 :
        // Si ok, on fait ça
        break
    case valeurAComparer2 :
        // Si ok, on fait ça
        break
    default :
        // Si rien n'est ok, on fait ça
        break
}
*/

let today = new Date()
let todayDay = today.getDay()

switch (todayDay){
    case 0 :
        alert("Nous sommes dimanche")
        break
    case 1 :
        alert("Nous sommes lundi")
        break
    case 2 :
        alert("Nous sommes mardi")
        break
    case 3 :
        alert("Nous sommes mercredi")
        break
    case 4 :
        alert("Nous sommes jeudi")
        break
    case 5 :
        alert("Nous sommes vendredi")
        break
    case 6 :
        alert("Nous sommes samedi")
        break
    default :
        alert("INVALID")
        break
}

/*
Utilisez l’objet Date et des structures conditionnelles,
écrivez un programme qui affiche le jour de la semaine.
Exemple : « Bonjour, nous sommes lundi! »

let jours = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
let today2 = new Date()
let todayDay2 = today2.getDay()
alert(`Nous sommes ${ jours[todayDay2] }.
Jour récupéré avec un tableau`)
*/

// La ternaire

let quant = prompt("Combien en voulez-vous ?")
// classic
if (quant <= 1){
    alert(`Voici ${quant} banane`)
}
else{
    alert(`Voici ${quant} bananes`)
}
//->
alert(`Voici ${quant} banane${ (quant>1) ? "s" : ""}`)
