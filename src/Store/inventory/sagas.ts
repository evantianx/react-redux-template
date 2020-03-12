import { all, fork, put, takeEvery } from 'redux-saga/effects';

import { InventoryActions } from './types'
import { fetchError, fetchSuccess } from './actions'
import {inventory } from 'mockdata'

function* handleFetch() { 
  try {
    // mock data fetching
    const data = inventory
    
    yield put(fetchSuccess(data))
  } catch (err) { 
    if (err instanceof Error && err.stack) {
      yield put(fetchError(err.stack))
    } else { 
      yield put(fetchError("An unknown error occured."))
    }
  }
}

function* watchFetchRequest() { 
  yield takeEvery(InventoryActions.FETCH_REQUEST, handleFetch)
}

function* inventorySaga() { 
  yield all([fork(watchFetchRequest)])
}

export { inventorySaga }