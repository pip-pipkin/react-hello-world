import types from './films.types'

export const initialState = {
  allFilms: [],
  selectedFilm: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET:
      return { ...state, allFilms: action.films }
    case types.SELECT:
      return { ...state, selectedFilm: action.film }
    default:
      return state
  }
}
