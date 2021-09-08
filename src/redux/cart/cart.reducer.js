//step 3
//howa el by8ayar fel state bynafz el action
//function betrga3 data
import {CartActionType} from './cart.type'
import {addItemTocart,removeItemFromCart} from './cart.utils'

const initialState = {

hidden:true,
cartItem : []

};

const CartReducer = (state = initialState, action) => {
//DONT USER THIS.STATE = initialState
switch(action.type) {
case CartActionType.TOGGLE_CART_HIDDEN:
    return{
    ...state,
    hidden:!state.hidden
    };
    //collectionItem.comp
case CartActionType.ADD_ITEM:
    return {
    ...state,
    cartItem: addItemTocart(state.cartItem , action.payload)
    }
    
case CartActionType.CLEAR_ITEM_FROM_CART:
    return {
    ...state,
    //filter betraga3 ay 7aga true
    cartItem: state.cartItem.filter(cartIte => cartIte.id !== action.payload.id)
    }
    
case CartActionType.REMOVE_ITEM:
    return{
    ...state,
    cartItem:  removeItemFromCart(state.cartItem, action.payload)
    }


    default:
    return state;
}

}

export default CartReducer
