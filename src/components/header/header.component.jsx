import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {connect} from 'react-redux'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import './header.style.scss'
import {auth} from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import Cart from '../cart-dropdown/cart-dropdown.component.jsx'


 
const element = <FontAwesomeIcon icon={faHome} size='lg' spin={true} />

const Header = ({currentUser, name, hidden}) => {
    return (
        <div className="header">
           <Link to='/' className="logo-container">
           {element}
           </Link> 
           
           <div className="options">
           <Link to='/shop' className="option">Shop</Link>
           {
            currentUser!==null?
            <div className="option" onClick={() =>auth.signOut()} >Sign out</div>
            :
            <Link className="option" to='/sign'>Sign in</Link>
           
           }
           
           {
             currentUser!==null ?
            <div className="name">Welcome {name}</div>
            :
           <div></div>
           
           }
           
           <CartIcon/>
           </div>    
           { hidden ? null :  <Cart/>}
          
        </div>
    )
}

// mapStateToProps el bya5od used when we only want to get the state
const mapStateToProps = ({user : {currentUser},cart: {hidden} }) =>({
    currentUser,
    hidden

});


// connect is high order component
export default connect(mapStateToProps)(Header)
    