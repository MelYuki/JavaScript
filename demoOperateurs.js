//Opérateurs
    //Mathématiques
    let addition = 8 + 2
    let soustraction = 8 - 2
    let multiplication = 8 * 2
    let divisionComplete = 7 / 2   //-> toujours complète, si vous voulez la divisio entière, il faudra convertir
    let divisionEntiere = parseInt(7 / 2) //Ou Math.floor(7/2) Math.round(7/2) Math.ceil(7/2)
    let modulo = 7 % 2 // Ce qu'il reste après la division entière (Très pratique pour savoir si un nombre et divisible par un autre (pair/impair, multiple de 3, etc))
    console.log(modulo);

    //Depuis ES6
    let puissance = 8 ** 2
    console.log(puissance);

    //Opérateurs d'affectation (combiner =, avec un opérateur)
    let x = 8    
    x += 2 //-> x = x + 2
    x -= 2 //-> x = x - 2
    x *= 2 //-> x = x * 2
    x /= 2 //-> x = x / 2
    x **= 2 //-> x = x ** 2

    //Opérateur d'incrémentation
    let y = 8
    // y = y + 1
    // y += 1
    // y++
    // ++y
    let z = 2
    let b = y + z++ //b = 10   y = 8   z = 3   //Si z++ z sera augmenté de 1 APRES le calcul de b
    //(y + z) (z = z + 1)
    let c = y + ++z //c = 11  y = 8   z = 3    //Si ++z z sera augmenté de 1 AVANT le calcul de c
    //(z =z + 1) (y + z)

    // z-- Tout pareil mais enlève un
    // --z

    //Logiques
    // ! Une comparaison renvoie toujours un booléen
    let nb1 = 5
    let nb2 = 10
    let nb3 = "5"

    //== -> compare par valeur
    console.log(nb1 == nb2)  //false
    console.log(nb1 == nb3)  //true (autoconvertion lors de la comparaison)
    // === -> compare par valeur ET par type
    console.log(nb1 === nb3) //false
    // ! -> négation
    console.log(!true) //false
    console.log(!false) //true
    let mot = "pouet"
    console.log(mot.includes('o')) //true
    console.log(!mot.includes('o')) //contraire de la précédente donc false
    // != -> Différent (valeur)
    console.log(nb1 != nb2) //true
    console.log(nb1 != nb3) //false
    // !== -> Différent (valeur + type)
    console.log(nb1 !== nb3) //true
    // < plus petit
    console.log(nb1 < nb2); //true
    console.log(10 < 10) //false
    // <= plus petit ou égal
    console.log(10 <= 10) //true
    // > plus grand
    console.log(10 > 5) //true
    console.log(10 > 10) //false
    // >= plus grand ou égal
    console.log(10 >= 10 ); //true


    
    let age = 18
    let genre = 'm'
    //ET &&   TOUTES LES CONDITONS DOIVENT ETRE VRAIES
    console.log( age >= 18 && genre === 'm' ) //true
    //OU ||   AU MOINS UNE DES CONDITONS DOIT ETRE VRAIE
    console.log( age >= 18 || genre === 'm' ) //true

    age = 15
    genre = 'm'
    console.log( age >= 18 && genre === 'm' ) //false
    console.log( age >= 18 || genre === 'm' ) //true

    age = 15
    genre = 'f'
    console.log( age >= 18 && genre === 'm' ) //false
    console.log( age >= 18 || genre === 'm' ) //false

    //Voir exo Logique (et table logique dans slides algo)
    

    