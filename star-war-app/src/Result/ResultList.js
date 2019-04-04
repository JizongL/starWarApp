import React from 'react'
import starWarContext from '../context/starWarContext'

class ResultList extends React.Component{
  static contextType = starWarContext
  
  handleResult =()=>{
   if(this.props.data.results){ return this.props.data.results.map((result,index)=>{
      return <li key={index}>{result.name}</li>
    })}
  }

  render(){
    console.log(this.props.data.results,'test context')
    
    return(
      <div>
      <ul>
       {this.handleResult()}
      </ul>
      </div>
    )
  }
}

export default ResultList