import axios from 'axios'
import { all, takeEvery, call, put } from 'redux-saga/effects'
import filmTypes from './films.types'
import filmActions from './films.actions'

export function* getFilms() {
  try {
    let films = yield call([axios, 'get'], 'http://localhost:8080/api/films')
    yield put(filmActions.set(films.data))
    yield put(filmActions.select(films.data[0]))
  } catch (e) {
    console.log(e)
  }
}

export default function* () {
  yield all([takeEvery(filmTypes.GET, getFilms)])
}