import { action } from 'typesafe-actions'

import { InventoryActions, Inventory } from './types'

const fetchRequest = () => action(InventoryActions.FETCH_REQUEST)
const fetchSuccess = (data: Inventory[]) => action(InventoryActions.FETCH_SUCCESS, data)
const fetchError = (message: string) => action(InventoryActions.FETCH_ERROR, message)

export { fetchRequest, fetchSuccess, fetchError }