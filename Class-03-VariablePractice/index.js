let firstName = 'Wagner'
let lastName = 'Gentil Ferreira de Araujo'
let fullName = firstName + ' ' + lastName

document.getElementById("first_name").innerText = firstName
document.getElementById("last_name").innerText = lastName
document.getElementById("full_name").innerText = fullName

document.getElementById("div").innerText = '------------------------------------------------------------------------'

let name = 'Linda'
let greeting = 'Hi there'

function hello(){
    return greeting + ', ' + name + '!'
}
console.log(fullName)
console.log(hello())

let myPoints = 3

function add3Points(){
    myPoints += 3
}

function remove1Point(){
    myPoints -= 1
}

add3Points()
remove1Point()
add3Points()
remove1Point()
add3Points()


console.log(myPoints)