import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-db2c3-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const moviesInDB = ref(database, "movies")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const movieListEl = document.getElementById("movie-list")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    push(moviesInDB, inputValue)
    inputFieldEl.value = ""
    movieListEl.innerHTML +=`<li>${inputValue}</li>`
})