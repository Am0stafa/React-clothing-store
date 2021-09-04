import './cart-icon.styles.scss'
import {ReactComponent as ShopingIcon} from '../../svg/shopping-bag.svg'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.action';

import React from 'react'

const CartIcon = ({toggleCartHidden, cartItem}) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShopingIcon className="shopping-icon" />
            <span className="item-count">{cartItem.reduce((counter , cartIte)=> counter + cartIte.quantity,0)}</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({

    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) =>({
    cartItem: state.cart.cartItem
});

export default connect(mapStateToProps ,mapDispatchToProps )(CartIcon)
