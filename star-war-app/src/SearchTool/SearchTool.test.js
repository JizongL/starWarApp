import React from 'react'
import ReactDOM from 'react-dom'
import SearchTool from './SearchTool'
import renderer from 'react-test-renderer'

describe('test Search Tool',()=>{
  it('renders without crashing',()=>{
    const div= document.createElement('div')
    ReactDOM.render(<SearchTool/>,div)
    ReactDOM.unmountComponentAtNode(div)
  })
  
  it('redners the UI as expected',()=>{
    const tree = renderer
    .create(<SearchTool/>).toJSON;
    expect(tree).toMatchSnapshot();
  
  });
  
  
})
