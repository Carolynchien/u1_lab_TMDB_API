const API_KEY = '2eb89038a41983cd6e06b2f802a24959'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'

//https://api.themoviedb.org/3/search/movie?query=[your search query]&api_key=[API_KEY]

const button = document.querySelector('#search')
const input = document.querySelector('#search-input')
const container = document.querySelector('.container')
const body = document.querySelector('body')

button.addEventListener('click', async () => {
  const userInput = input.value

  const movies = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${userInput}&api_key=2eb89038a41983cd6e06b2f802a24959`
  )
  const movieList = movies.data.results
  renderList(movieList)
})

const div = document.createElement('div')
div.classList.add('movie')

const renderList = (movies) => {
  movies.forEach((movie) => {
    console.log(movie)
    const img = movie.poster_path
    const title = movie.title
    const id = movie.id
    const div = document.createElement('div')
    const poster = document.createElement('img')

    if (img != null) {
      poster.src = `https://image.tmdb.org/t/p/original/${img}`
    }

    div.classList.add('movie')
    const listItem = document.createElement('h2')
    const btn = document.createElement('button')
    btn.classList.add('moviebtn')
    btn.id = `${id}`
    console.log(btn.id)
    btn.textContent = 'About'
    listItem.textContent = `${title}`

    div.append(poster)
    div.append(listItem)
    div.append(btn)
    container.append(div)

    btn.addEventListener('click', () => {
      container.style.display = 'none'
      const newdiv = document.createElement('div')
      const newp = document.createElement('p')

      newdiv.classList.add('description')
      const overView = movie.overview
      console.log(overView)
      newp.innerHTML = `Overview: <br/> ${overView}`

      newdiv.append(poster)
      newdiv.append(listItem)
      newdiv.append(newp)

      body.append(newdiv)
    })
  })
}
