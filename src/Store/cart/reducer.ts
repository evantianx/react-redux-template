import { Reducer } from 'redux'
import { ActionType } from 'typesafe-actions'
import { produce } from 'immer'

import { CartActions, CartState } from './types'
import * as actions from './actions'

export const initialState: CartState = {
  data: {
    id: 0,
    items: []
  },
  errors: undefined,
  loading: false
}

export type CartActionTypes = ActionType<typeof actions>

const reducer: Reducer<CartState, CartActionTypes> = (state = initialState, action) => 
  produce(state, draft => { 
    switch (action.type) { 
      case CartActions.FETCH_CART_REQUEST: 
        draft.loading = true
        break;
      
      case CartActions.FETCH_CART_SUCCESS: 
        draft.data = action.payload;
        draft.loading = false;
        break;
      
      case CartActions.FETCH_CART_ERROR:
        draft.loading = false;
        draft.errors = action.payload;
        break;
      
      case CartActions.ADD_TO_CART: 
        draft.data.items.push(action.payload)
        break;
      
      case CartActions.REMOVE_FROM_CART:
        const index = draft.data.items.indexOf(action.payload)
        if (index > -1) { 
          draft.data.items.splice(index, 1)
        }
        break;
    }
  })

export { reducer as CartReducer }