import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from  "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSetting = {
    databaseURL: "https://realtime-database-2ddc1-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSetting)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEL = document.getElementById('input-field')
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEL.value
    push(shoppingListInDB, inputValue)

    cleanInputFieldEl()
    appendItemToShoppingListEl(inputValue)

})

function cleanInputFieldEl(){
    inputFieldEL.value = ""
}

function appendItemToShoppingListEl(itemValue){
    shoppingListEl.innerHTML +=`<li>${itemValue}</li>`
}