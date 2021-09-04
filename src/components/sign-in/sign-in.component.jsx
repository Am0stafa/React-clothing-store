/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import FormInput from '../../components/form-input/form-input.component'
import '../../components/sign-in/sign-in.style.scss'
import CustomButton from '../../components/custom-button/custom-botton.component.jsx'
import { auth, signInWithGoogle }  from '../../firebase/firebase.utils'

export class SignIn extends Component {

constructor(props) {
    super(props)

    this.state = {
         email:'',
         password:''
    }
    

}


    handelsubmit = async (e)=>{
    e.preventDefault()
    
    const {email, password} =this.state;
    try{
    await auth.signInWithEmailAndPassword(email,password);
    this.setState({email:'',  password:''})
    }catch(e){
    
    console.log(e);
    }
    
   
                  
                
    }
    
    handleChange = (e)=>{
   const {value , name } = e.target;
        this.setState({[name]:value})
                //rather than an if statement
    }   
    
 
    
    render() {
        return (
            <div className="sign-in">
        
                <h1>Already have an account</h1>
                <span className="sign-in-span">Sign in with your email and password</span>
                        
                        <form onSubmit={this.handelsubmit}>
                        <FormInput type="text" name="email" value={this.state.email} 
                        handleChange={this.handleChange}
                        label="Email"
                        required />
                        <FormInput type="password" name="password" value={this.state.password} 
                        handleChange={this.handleChange}
                        label="Password"
                        required />
                       <div className="form-group">
                        <CustomButton type="submit">Sign in</CustomButton>  
                        
                        <CustomButton onClick={signInWithGoogle} type="button">
                           Sign in google</CustomButton>
                       
                        </div>
                        </form>

            </div>
        )
    }
}

export default SignIn
