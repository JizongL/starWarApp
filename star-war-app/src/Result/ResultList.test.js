import React from 'react'
import ReactDOM from 'react-dom'
import ResultList from './ResultList'

const object = {0:
  {birth_year: "19BBY",
  created: "2014-12-09T13:50:51.644000Z",
  edited: "2014-12-20T21:17:56.891000Z",
  eye_color: "blue",
  films:["https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/"],
  gender: "male",
  hair_color: "blond",
  height: "172",
  homeworld: "https://swapi.co/api/planets/1/",
  mass: "77",
  name: "Luke Skywalker",
  skin_color: "fair"}}

it('renders without crashing',()=>{
  const div= document.createElement('div')
  ReactDOM.render(<ResultList data={object}/>,div)
  ReactDOM.unmountComponentAtNode(div)
})