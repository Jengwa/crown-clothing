import React,{Component} from 'react'

import { 
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from './ErrorBoundary.styles';

class ErrorBoundary extends Component  {
  constructor(){
    super() 

    this.state = {
      hasErroroed: false
    }
  }
  static getDerivedStateFromError(error) {
    return {hasErrorored: true}
  }

  componentDidCatch(error, info) {
    console.log(error)
  }

  render() {
    if(this.state.hasErroroed) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png'/>
          <ErrorImageText>Sorry something went wrong on this page</ErrorImageText>
        </ErrorImageOverlay>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary;
