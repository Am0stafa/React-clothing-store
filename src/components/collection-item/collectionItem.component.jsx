import React from 'react'
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart.action'
import './collectionItem.style.scss'
import CustomButton from '../custom-button/custom-botton.component'

const CollectionItem = ({item ,addItem}) => {
  const  { name, price , imageUrl } = item;
    return (
        <div className="collection-item">
            <div className="image"
            style={{backgroundImage: 'url(' + imageUrl +')'}}
            / >
            <div className="collection-footer">
            <span className="name">{name}</span> 
            <span className="price">${price}</span>
            </div>
            <CustomButton inverted onClick={()=> addItem(item)} > Add to cart </CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    //esm el fel action : el 7aga el hat7otaha => dispatch(esm el action(el 7aga el hat7otaha))
    addItem : item => dispatch(addItem(item))

}) 

export default connect(null,mapDispatchToProps)(CollectionItem)
