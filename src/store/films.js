import axios from 'axios'

const filmsModel = {
  state: {
    allFilms: [],
    selectedFilm: {}
  },
  reducers: {
    setFilms(state, payload) {
      return { ...state, allFilms: payload }
    },
    selectFilm(state, payload) {
      return { ...state, selectedFilm: payload }
    }
  },
  effects: dispatch => ({
    async getFilms() {
      try {
        const films = await axios.get('http://localhost:8080/api/films')
        dispatch.films.setFilms(films.data)
        dispatch.films.selectFilm(films.data[0])
      } catch (e) {
        //handle error, maybe toast?
        console.log(e)
      }
    }
  })
}

export default filmsModel