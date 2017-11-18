import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {movies: []}
  }
  componentWillMount(){
    fetch('http://localhost:8080/api/movies', {
      method: 'GET',
      mode: "cors", 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((movies => {
        this.setState({movies}) 
      }));
  }
  render() {
    let movies = this.state.movies
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Flix Movies</h1>
        </header>
        <ul>
        {movies.map(item => 
              <Movie key={item.name} movie={item} />)}
        </ul>
      </div>
    );
  }
}

const Movie = (props) => <h4>{props.movie.name}</h4>

export default App;
