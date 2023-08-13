const chagne = document.querySelector("#change")
const randomImgContainer = document.querySelector(".left-about")

chagne.addEventListener("click", (e) => {
  const target = e.target
  document.body.classList.toggle("dark-theme")

  console.log()
})

function random() {
  let getRandomImg = [
    `img/Screenshot 2023-08-13 at 5.06.56 AM.png`,
    `img/Screenshot 2023-08-13 at 5.05.58 AM.png`,
  ]
  const pickRandomImg = Math.floor(Math.random() * getRandomImg.length)
  const NewImg = document.createElement("img")
  NewImg.src = getRandomImg[pickRandomImg]
  randomImgContainer.appendChild(NewImg)
}
setTimeout(() => {
  random()
}, 10)
