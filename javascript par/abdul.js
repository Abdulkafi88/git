const heartButtons = document.querySelectorAll(".card-actions .card-action-btn")
const regularBadge = document.querySelector(
  ".header-action-btn .btn-badge:not(.green)"
)
const greenBadge = document.querySelector(".btn-badge.green")
const addToCartButton = document.querySelectorAll(".card-actions .cart-btn")
const searchInput = document.querySelector(".input-field")
const searchIcon = document.querySelector(".search-btn")
const productList = document.querySelectorAll(".product-list")
const signIn = document.querySelector(".header-action-btn")
const signINContainier = document.querySelector(".containerr")
const cureentUser = document.querySelector(".cureentUser")
const userInfo = document.querySelector(".userInfo")
const closeModel = document.querySelectorAll(".closeContent")



heartButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const heartIcon = button.querySelector('ion-icon[name="heart-outline"]')
    if (heartIcon) {
      button.style.backgroundColor = "red"
      const updatRegualBage = regularBadge.textContent++
    }
  })
})

addToCartButton.forEach((buy) => {
  buy.addEventListener("click", (e) => {
    const updatgreenBadge = greenBadge.textContent++
  })
})

searchIcon.addEventListener("click", (e) => {
  const userValue = searchInput.value.toLowerCase()
  productList.forEach((item) => {
    const lower = item.textContent.toLowerCase()
    if (lower.includes(userValue)) {
      item.scrollIntoView({ behavior: "smooth", block: "start" })
    } else {
      return alert("you have mistype something")
    }
  })
  searchInput.value = " "
  console.log(userValue)
})

signIn.addEventListener("click", (e) => {
  signINContainier.style.display = "flex"
})

userInfo.addEventListener("click", switchCard)
cureentUser.addEventListener("click", switchCard)
function switchCard() {
  const loginCard = document.querySelector(".containerr .card:nth-child(1)")
  const registerCard = document.querySelector(".containerr .card:nth-child(2)")
  if (loginCard.style.display === "none") {
    loginCard.style.display = "block"
    registerCard.style.display = "none"
  } else {
    loginCard.style.display = "none"
    registerCard.style.display = "block"
  }
}

closeModel.forEach((closeBtn) =>
  closeBtn.addEventListener(
    "click",
    (e) => (signINContainier.style.display = "none")
  )
)
