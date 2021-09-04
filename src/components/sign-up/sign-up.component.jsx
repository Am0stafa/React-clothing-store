import React, { Component } from 'react'
import FormInput from '../../components/form-input/form-input.component.jsx'
import CustomButton from '../../components/custom-button/custom-botton.component'
import {auth , createUserProfileDocument} from '../../firebase/firebase.utils'
import './sign-up.styles.scss'


export class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             displayName: '',
             email: '',
             password: '',
             confirmPassword: ''
        }
    }
    
    handelsubmit = async (e) => {
      e.preventDefault();
      const { displayName, email, password, confirmPassword } = this.state;
        if(password !== confirmPassword) {
        alert("Password don't match");
        return;
        }
      try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      
       await createUserProfileDocument(user, {displayName, password});
       this.setState({displayName: '',
             email: '',
             password: '',
             confirmPassword: ''
             })
        
      }catch(err){
        console.log(err);
      }
      
      
    }
    
  handleChange = (e)=>{
   const {value , name } = e.target;
        this.setState({[name]:value})
    }
    
    
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
            <h2 className="title">I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={this.handelsubmit}>
                <FormInput
                type="text"
                name='displayName'
                value={displayName}
                handleChange={this.handleChange}
                label="Display Name"
                required
                >
                </FormInput>
                <FormInput
                type="email"
                name='email'
                value={email}
                handleChange={this.handleChange}
                label="Email"
                required
                >
                </FormInput>
                <FormInput
                type="password"
                name='password'
                value={password}
                handleChange={this.handleChange}
                label="Password"
                required
                >
                </FormInput>
                <FormInput
                type="password"
                name='confirmPassword'
                value={confirmPassword}
                handleChange={this.handleChange}
                label="Confirm password"
                required
                >
                </FormInput>
                
            <CustomButton type="submit">Sign Up</CustomButton>
            </form>      
            </div>
        )
    }
}

export default SignUp

