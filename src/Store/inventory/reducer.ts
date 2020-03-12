import { Reducer } from 'redux'
import { ActionType } from 'typesafe-actions'
import { produce } from 'immer';
import { InventoryState, InventoryActions } from './types'
import * as actions from './actions'

export const initialState: InventoryState = {
  data: [],
  errors: undefined,
  loading: false
}

export type InventoryActionTypes = ActionType<typeof actions>

const reducer: Reducer<InventoryState, InventoryActionTypes> = (state = initialState, action) => 
  produce(state, draft => { 
    switch (action.type) { 
      case InventoryActions.FETCH_REQUEST:
        draft.loading = true;
        break;
      
      case InventoryActions.FETCH_SUCCESS: 
        draft.loading = false;
        draft.data = action.payload;
        break;
      
      case InventoryActions.FETCH_ERROR:
        draft.loading = false;
        draft.errors = action.payload;
        break;
    }
  })

export { reducer as InventoryReducer}