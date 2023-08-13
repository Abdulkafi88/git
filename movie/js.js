const global = {
  cureentPage: window.location.pathname,
}

function init() {
  switch (global.cureentPage) {
    case "/":
      break
    case "/shows.html":
      console.log("shows")
      break

    case "/movie-details.html":
      console.log("movie-details")
      break
  }
}

// showMOievs()
document.addEventListener("DOMContentLoaded", init)
async function showdisply() {
  const { results } = await fetchApis("movie/upcoming")
  results.forEach((movie) => {
    const div = document.createElement("div")
    div.classList.add("card")
    div.innerHTML = `
          <a href="movie-details.html?id=${movie.id}">
            ${
              movie.poster_path
                ? `<img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />`
                : `<img
            src="../images/no-image.jpg"
            class="card-img-top"
            alt="${movie.title}"
          />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>
        `

    document.querySelector("#popular-movies").appendChild(div)
  })
  console.log(results)
}

showdisply()
async function fetchApis(endPoint) {
  const API_KEY = "b23286c3a57cc65c9dbb4161cbf89f13"
  const url = "https://api.themoviedb.org/3/"

  const response = await fetch(
    `${url}${endPoint}?api_key=${API_KEY}&language=en-US`
  )
  const data = await response.json()
  return data
}
