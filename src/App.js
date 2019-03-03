import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js'


class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()

  // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> component
  // state : whenever your state changes inside of component, the function 'render' will happen again.

  state = { }

  // this.state.greeting = 'something' --> WRONG
  //should do, just rememeber 'this.setState', after changing state, application will render again
  componentDidMount() {
    this._getMovies()
  }

  // the reason of writing underbat in front of function name is to seperate the functions I made
  _renderMovies = () => {
    const movies = this.state.movies.map( movie => {
      return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id} 
        genres={movie.genres} 
        synopsis={movie.synopsis}
      />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi() // whatever the return value of the function '_callApi' I am going to return value into const 'movies' 
    this.setState({
      movies
    })
    // ↑ this.setState is going to happen after this._callApi() return the value(doesn't matter returning the value success or not)
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
      .then(response => response.json())
      .then(json => json.data.movies) // arrow funtion you don't need to use 'return', cause this arrow function return something automatically
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}


export default App;
