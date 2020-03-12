import { action } from 'typesafe-actions'

import { CartActions, Cart } from './types'
import { Inventory} from '../inventory/types'

const fetchCartRequest = () => action(CartActions.FETCH_CART_REQUEST)
const fetchSuccess = (data: Cart) => action(CartActions.FETCH_CART_SUCCESS, data)
const fetchError = (message: string) => action(CartActions.FETCH_CART_ERROR, message)
const addToCart = (item: Inventory) => action(CartActions.ADD_TO_CART, item)
const removeFromCart = (item: Inventory) => action(CartActions.REMOVE_FROM_CART, item)

export { fetchCartRequest, fetchSuccess, fetchError, addToCart, removeFromCart}