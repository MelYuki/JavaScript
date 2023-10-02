// Les dates

let today = new Date() // Date du jour
console.log(today)

let unknown = new Date(12345678912358) // 01/01/1970 + 12345678912358
console.log(unknown)

let myBirthDay = new Date("1989-05-07") // 1989/05/07 ok aussi!
console.log(myBirthDay)

console.log(today.toLocaleString())
console.log(today.toLocaleDateString())
console.log(today.toLocaleDateString("en-US"))
console.log(today.toLocaleDateString("fr-BE", {
    weekday : "long",
    year : "numeric",
    month : "short",
    day : "2-digit" }))
console.log(today.toLocaleTimeString())

// Les méthodes
// getteurs
console.log(myBirthDay.getFullYear())
console.log(myBirthDay.getMonth()+1) // les mois de 0 à 11
console.log(myBirthDay.getDate())
console.log(myBirthDay.getDay()) // de Sun(0) à Sat(6)

// setters
let yourBirthDate = new Date()
yourBirthDate.setDate(02)
yourBirthDate.setMonth(06)
yourBirthDate.setFullYear(2011)
console.log(yourBirthDate)
