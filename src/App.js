import React , { Component }  from 'react';
import './App.css';
import Hompage from './pages/hompage/homepage.component';
import {Route, Switch, Redirect} from 'react-router-dom'
import shopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx'
import Sign from '../../clothing-store/src/pages/signinANDsignup/sign.component.jsx'
import {auth,createUserProfileDocument} from '../src/firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.action'
import CheckoutPage from './pages/checkout/checkout.component';
  


export class App extends Component {

//delet
constructor(props) {
  super(props)

  this.state = {
     currentName:''
     
  } 
}
   unsubscribe = null;
   
   componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth!==null) {
        const userRef = await createUserProfileDocument(userAuth);
        //to listen
        userRef.onSnapshot(snapShot => {
        //setstate is async so , () => console.log()
          this.props.setCurrentUser({
            
              id: snapShot.id,
              ...snapShot.data()
            
          });
          
          this.setState({ currentName :  this.props.currentUser.displayName});
   
        });
        
      }
      else
      this.props.setCurrentUser( userAuth );
      
      
      
    });
  }
  
  componentWillUnmount() {
  this.unsubscribe();
  this.setState({ currentName :null });
  }


  render() {
    return (
    // lw hayba 3andena /xx/xx yeba a mat7otsh exact
      <div>
         <Header  name={this.state.currentName} />
       <Switch>
      <Route exact path="/" component={Hompage}/>
      <Route path="/shop" component={shopPage}/>
      <Route exact path="/checkout" component={CheckoutPage}/>
      <Route exact path="/sign" render={()=>(
      this.props.currentUser !== null ? (<Redirect to='/'/>) : (<Sign/>)
       ) }/>

    </Switch>

      </div>
    )
  }
} 

//mapDispatchToProps used if the component only sets the state
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))

})

// to get
const mapStateToProps = (state) =>({
//esmo fel reducer : state.esmo fel root.esmo fel reducer
  currentUser: state.user.currentUser,
//ba3deha n5od el "currentUser" ne3mlaha destructur fo
});


export default connect(mapStateToProps, mapDispatchToProps )(App)

