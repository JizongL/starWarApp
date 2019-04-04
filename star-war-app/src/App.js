import React, { Component } from 'react';
import './App.css';

import ResultList from './Result/ResultList'
import SearchTool from './SearchTool/SearchTool';
import StarWarContext from './context/starWarContext'

class App extends Component {

state = {
  search:[],
  loading:false,
  data:''
}


  componentDidMount(){
    fetch("https://swapi.co/api/").then(
      res=>res.json()
    ).then(data=> this.setState({search:Object.keys(data)}))
  }

  setDataHandle=(data)=>{
    this.setState({data})
  }

  render() {
    const value={
      search:this.state.search,
      loading:this.state.loading,
      dataHandle:this.setDataHandle,
      data:this.state.data
    }
    //console.log(value,'test value')
    //console.log(this.state.data,'test data final')
    return (
      <StarWarContext.Provider value={value}>
      <div className="App">
        <div className='star-war-search'>
        <header>
          <h1>Star War Search</h1>
        </header>
        <SearchTool />
        <main>
    
            <ResultList data={this.state.data}/>
    
        </main>

        </div>
      </div>
      </ StarWarContext.Provider>
    );
  }
}

export default App;
