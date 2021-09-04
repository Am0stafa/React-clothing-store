import '../checkout/checkout.styles.scss'
import React from 'react'
import { connect } from 'react-redux'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutBtn from '../../components/stripe-button/stripe-button.component'



const CheckoutPage = ({cartItem}) => {
    return (
     <div className="checkout-page">
        <div className="checkout-header">
        <div className="header-block">
            <span>Product</span>
        </div>
        <div className="header-block">
            <span>Description</span>
        </div>
        <div className="header-block">
            <span>Quantity</span>
        </div>
        <div className="header-block">
            <span>Price</span>
        </div>
        <div className="header-block">
            <span>Remove</span>
        </div>
        </div>   
        
        {
            cartItem.map(cartIte =>( <CheckoutItem key={cartIte.id} item={cartIte} /> ))

        }   
        
        <div className="total">Total: ${cartItem.reduce((counter , cartIte)=> counter + cartIte.quantity* cartIte.price,0)}</div>
        <div className="test-waring">
        For testing 
        <br/>
        4242 4242 4242 exp: 01/26 cvv:123
        </div>
        
        <StripeCheckoutBtn price={cartItem.reduce((counter , cartIte)=> counter + cartIte.quantity* cartIte.price,0)}/>
    </div>
    )
}

const mapStateToProps = (state) =>({
    cartItem: state.cart.cartItem
    
});



export default connect(mapStateToProps)(CheckoutPage)
