import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import auth, { authSaga } from './auth'
import loading from './loading'
import post, { postSaga } from './post'
import posts, { postsSaga } from './posts'
import player from './player'

const rootReducer = combineReducers({
  auth,
  loading,
  post,
  posts,
  player
})

export function* rootSaga() {
  // all 함수는 여러 사가를 합쳐주는 역할을 합니다.
  yield all([authSaga(), postSaga(), postsSaga()])
}

export default rootReducer
