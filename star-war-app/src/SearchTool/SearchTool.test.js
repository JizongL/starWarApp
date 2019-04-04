import React from 'react'
import ReactDOM from 'react-dom'
import SearchTool from './SearchTool'


it('renders without crashing',()=>{
  const div= document.createElement('div')
  ReactDOM.render(<SearchTool/>,div)
  ReactDOM.unmountComponentAtNode(div)
})