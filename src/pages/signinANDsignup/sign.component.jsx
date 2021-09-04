import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component.jsx'
import SignUp from '../../components/sign-up/sign-up.component.jsx'
import '../signinANDsignup/sign-in-and-sign-up.styles.scss'

const Sign = () => {


    return (
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>

        </div>
    )
}

export default Sign
