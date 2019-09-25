import films from './films/films.sagas'

const sagas = [films]

const initSagas = sagaMiddleware => sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware))

export default initSagas
