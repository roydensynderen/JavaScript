const axios = require('axios')

const swUrl = 'https://swapi.co/api/people/1'

axios.get(swUrl).then(response => {
    const starWarsFilm = response.data.films[0]
    return {starWarsFilm, data: response.data}
})
.then(film => {
    return axios.get(film)
})
.then(response => {
    return axios.get(response.data.characters[4])
})
.then(character => {
    console.log(character)
})
.catch(err => {
    console.log('Error occured')
})
