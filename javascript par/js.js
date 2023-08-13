const username = document.querySelector("#username")
const password = document.querySelector("#password")
 const loginButton = document.querySelector(".Login")

loginButton.addEventListener("click", (e) => {
    e.preventDefault()
 
  const usernameValue = username.value
  const passwordValue = password.value
  if (usernameValue === "abdul" && passwordValue === "abdul") {
    window.location.assign("index.html")
    console.log(usernameValue, passwordValue)
  } else {
    alert("worng info")
  }
})

function switchCard() {
  const loginCard = document.querySelector(".container .card:nth-child(1)")
  const registerCard = document.querySelector(".container .card:nth-child(2)")

  if (loginCard.style.display === "none") {
    loginCard.style.display = "block"
    registerCard.style.display = "none"
  } else {
    loginCard.style.display = "none"
    registerCard.style.display = "block"
  }
}


