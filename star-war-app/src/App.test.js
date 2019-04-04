import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer'

describe('Test App.js',()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('redners the UI as expected',()=>{
    const tree = renderer
    .create(<App />).toJSON;
    expect(tree).toMatchSnapshot();
  
  });
})
