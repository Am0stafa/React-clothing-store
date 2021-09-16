import React, { Component } from 'react'
import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from './error-boundary.styles'


export class ErrorBoundary extends Component {

constructor(props) {
    super(props)

    this.state = {
         hasErrored:false
    };
}

static getDevrivedStateFromError(err) {
    return {hasErrored:true}

}

componentDidCatch(error, info) {
console.log(error)
}
    render({children}) {
        if(this.state.hasErrored){
        return(
            <ErrorImageOverlay>
            <ErrorImageContainer imageUrl='https://i.imgur.com/A040Lxr.png' />
            <ErrorImageText>Sorry this page is broken</ErrorImageText>
            </ErrorImageOverlay>
        )
        }
        
        //used this.props
        return {children}
    
    }
}

export default ErrorBoundary
