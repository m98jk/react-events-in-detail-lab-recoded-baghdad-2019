// Code CoordinatesButton Component Here
import React from 'react'

exatesButton extends React.Component{

handleClick=(e)=>{
  this.props.onReceiveCoordinates([e.clientX, e.clientY])
}

  render(){
    return(
      <button onClick={this.handleClick}></button>
    )
  }
}
