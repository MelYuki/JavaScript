//#region Les constantes prédéfinies
    // NaN -> Not A Number
    console.log(6)
    console.log(6 * "Bonjour")
    console.log(parseInt(1))
    console.log(parseInt("bonjour"))

    // Pour tester si qlq chose est NaN
    console.log(parseInt("Bonjour") == NaN)
    console.log(isNaN (parseInt("Bonjour")))
    console.log(isNaN (parseInt(5)))

    // Undefined
    let a
    //console.clear()
    console.log("a vaut : ", a)

    // Math
    console.log(Math.max(3, 45, 63, 23, 5))
    console.log(Math.ceil(2.4))
    console.log(Math.floor(2.6))
    console.log(Math.round(3.7))
    console.log(Math.round(3.3))
//#endregion

//#region Les constantes définies par nous
    // ATTENTION AUX CONVENTIONS

    //let pasConst
    //pasConst = 45
    //pasConst = "toto"

    const MA_COULEUR = "noir"

    const PERSON = {
        nom : "Yuki",
        prenom : "Michi"
    }
    console.log(PERSON.prenom)
    PERSON.prenom = "Change"
    console.log(PERSON.prenom)

//#endregion

//#region Les variables
    // ATTENTION AUX CONVENTIONS

    let myVar1 = "moi"
    let myVar2 = 33

    // Les "number"
    let nombreEntier = 45
    let nombreDecimal = 45.78

    // Les chaines de caractères
    let maChaine = "omg"

    // Les tableaux
    let unTableau = ["Yuki", "Michi", "Mel", "Vin"]
    //let monBordel = ["Yuki", 45, true, {}, [], new Data()]

    // Les tableaux associatifs
    let unTabAss = {
        "key" : "value",
        "lundi" : "burger",
        "mardi" : "2",
        "mercredi" : true
    }
        // Façon d'y accéder
        unTabAss["key"]
        unTabAss.key

    // Portée des variables in/out of function

        // var -> 2 degrés d'inception
        // let -> 1 seul

    // Typage

//#endregion