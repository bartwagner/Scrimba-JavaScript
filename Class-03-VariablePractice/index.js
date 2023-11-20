let firstName = 'Wagner'
let lastName = 'Gentil Ferreira de Araujo'
let fullName = firstName + ' ' + lastName

document.getElementById("first_name").innerText = firstName
document.getElementById("last_name").innerText = lastName
document.getElementById("full_name").innerText = fullName
document.getElementById("div").innerText = '------------------------------------------------------------------------'

let greeting = 'Hi there'
function hello(){
    return greeting + ', ' + firstName + '!'
}
document.getElementById("greet").innerText = hello()
document.getElementById("div2").innerText = '------------------------------------------------------------------------'

let myPoints = 3
function add3Points(){
    myPoints += 3
}
function remove1Point(){
    myPoints -= 1
}
calc()
function calc(){
    add3Points()
    remove1Point()
    add3Points()
    remove1Point()
    add3Points()
}
document.getElementById("calc").innerText = 'How much 3+3-1+3-1+3 = ' + myPoints
document.getElementById("div3").innerText = '------------------------------------------------------------------------'


console.log("2" + 2) // "22"
console.log(11 + 7) // 18
console.log(6 + "5") // "65"
console.log("My points: " + 5 + 9) // "My points: 59"
console.log(2 + 2) //  4
console.log("11" + "14") // "1114" 