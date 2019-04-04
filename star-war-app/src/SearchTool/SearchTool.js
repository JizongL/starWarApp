import React from 'react'
import starWarContext from '../context/starWarContext'

class SearchTool extends React.Component{
  state={
    searchTerm:'',
    searchCategory:'',
    loading:false,
    error:null
  }
  static contextType = starWarContext
  
  doFetch=(searchTerm,category)=>{
    this.setState({loading:true})
    fetch(`https://swapi.co/api/${category}/?search=${searchTerm}`).then(
      res=> 
      {
        if(!res.ok){
          throw new Error(res.json())
        }
        return res.json()
      }
    ).then(data=> {this.setState({
      data:data,
      loading:false
    },this.context.dataHandle(data));
  })

    .catch(err=>this.setState({error:err}))
  }

  handleInput=(value)=>{
    this.setState({searchTerm:value})
    
  }

  handleSelect=(value)=>{
    
    this.setState({searchCategory:value})
    
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    let searchTerm = this.state.searchTerm;
    let category = this.state.searchCategory
    //console.log(searchTerm,category,'test search and cat')
    this.doFetch(searchTerm,category)
    
  }

  render(){
    
    const options=this.context.search.map((option,index)=>
      <option key={index}>{option}</option>)
     // console.log(this.state,'test data')
    return(
      <div>
      <form className='search-form'
        onSubmit ={(e)=>this.handleSubmit(e)}
      >
      <input id='search-input' placeholder='..Search'
      onChange={(e)=>this.handleInput(e.target.value)}/>
      <select onChange={(e)=>this.handleSelect(e.target.value)}>
        <option >choose category</option>
        {options}
        </select>
      <button>Search</button>
      </form>
      
      {this.state.loading && <span>loading...</span>}
      {this.state.error && <span>{this.state.error}</span>}
      </div>
    )
  }
}

export default SearchTool