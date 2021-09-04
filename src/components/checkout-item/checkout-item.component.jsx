import './checkout-item.styles.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux'
import React from 'react'
import {clearItemFromCart, addItem , removeItem} from '../../redux/cart/cart.action'

const element = <FontAwesomeIcon icon={faTimes} size='lg'  />


const CheckoutItem = ({item,clearItemFromCart,removeItem,addItem}) => {
    const {imageUrl , price , name, quantity} = item;
    return (
        <div className="checkout-item">
            <div className="image-container">
             <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
            <div className="arrow" onClick={() => removeItem(item)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={()=> clearItemFromCart(item)} >{element}</div>
        </div>
    )
}
//despatch howa el bynafz el action
const mapDispatchToProps = (dispatch) => ({
    //esm el fel action : el 7aga el hat7otaha => dispatch(esm el action(el 7aga el hat7otaha))
    clearItemFromCart : item => dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))

}) 

export default connect(null,mapDispatchToProps)(CheckoutItem)
