import types from './films.types'

const get = () => ({ type: types.GET })
const set = films => ({ type: types.SET, films})
const select = film => ({ type: types.SELECT, film })

export default {
  get,
  set,
  select
}