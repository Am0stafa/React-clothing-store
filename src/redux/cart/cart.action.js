//step 2
// el action howa wasf el state

import {CartActionType} from './cart.type'
 
 export const toggleCartHidden = (action) => ({
    type: CartActionType.TOGGLE_CART_HIDDEN
        //payload lw fe custom change
 })
 
 export const addItem = (item) => ({
 type: CartActionType.ADD_ITEM,
 payload:item
 })
 
 //CLEAR_ITEM_FROM_CART
 export const clearItemFromCart = (item) => ({
    type: CartActionType.CLEAR_ITEM_FROM_CART,
    payload:item
})
 
export const removeItem = (item) => ({
    type: CartActionType.REMOVE_ITEM,
    payload:item
})