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


//"2" + 2 = "22"
document.getElementById("calc1").innerText = "2" + 2
//11 + 7 = 18
document.getElementById("calc2").innerText = 11 + 7
//6 + "5" = "65"
document.getElementById("calc3").innerText = 6 + "5"
//"My points: " + 5 + 9 = My points: 59 
document.getElementById("calc4").innerText = "My points: " + 5 + 9
//2 + 2 = 4
document.getElementById("calc5").innerText = 2 + 2
//"11" + "14" = "1114"
document.getElementById("calc6").innerText = "11" + "14"
document.getElementById("div4").innerText = '------------------------------------------------------------------------'

let errorParagraph = document.getElementById("error")

function purchase() {
    errorParagraph.innerText = "Something went wrong, please try again"
}