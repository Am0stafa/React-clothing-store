import CustomButton from "../custom-button/custom-botton.component";
import {connect} from 'react-redux'
import './cart-dropdown.styles.scss'
import React from 'react'
import CartItem from '../cart-item/cart-item.component'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart.action';



const Cart = ({cartItem, history,toggleCartHidden}) => {
    return (
        <div className="cart-dropdown">
        <div className="cart-items">
        
      {    
        cartItem.map(cartIte =>( <CartItem key={cartIte.id} item={cartIte} /> ))
      }
        
        {
            cartItem.length > 0 ? null : <span className='empty'>Your cart is empty</span>
        }
        </div>
        <CustomButton onClick={() => { 
        history.push('/checkout')
        toggleCartHidden()
        }
        }>Go to checkout</CustomButton>
        </div>
    )
}


//lw 3amlana mapStateToProps mn ta7at n3mlaha destrcuture fo2 3l4n n3rf nst3mlha gowa
const mapStateToProps = (state) =>({
    cartItem: state.cart.cartItem,
    
});
const mapDispatchToProps = (dispatch) => ({

toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Cart));
