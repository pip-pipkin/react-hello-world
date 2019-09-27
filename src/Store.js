import { init } from '@rematch/core'
import films from './store/films'

const store = init({
  models: {
    films
  }
})

export default store