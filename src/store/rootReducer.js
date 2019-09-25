import { combineReducers } from 'redux'
import films from './films/films.reducer';

const rootReducer = combineReducers({
  films
})

export default rootReducer