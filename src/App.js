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
    setTimeout(() => {
      this.setState({
        movies: [
      {
        title: "Matrix",
        poster: "https://images-na.ssl-images-amazon.com/images/I/5117ZW5600L._SY445_.jpg",
      },
      {
        title: "Coco",
        poster: "https://is4-ssl.mzstatic.com/image/thumb/Video118/v4/1a/56/75/1a5675f0-0705-91b9-da49-71a3fe72d0da/contsched.zlfyhaku.lsr/268x0w.jpg",
      },
      {
        title: "Notebook",
        poster: "https://images-na.ssl-images-amazon.com/images/I/51S2j54niLL._SL500_AC_SS350_.jpg",
      },
      {
        title: "La La Land",
        poster: "http://barkerhost.com/wp-content/uploads/sites/4/2017/01/8SkwS6x3flGZ1p7ATVtYXmnA44o-3.jpg"
      },
      {
        title: "Moulin Rouge",
        poster: "https://is4-ssl.mzstatic.com/image/thumb/Video69/v4/f9/18/84/f918848f-c696-e40f-33a0-0fd144850ef9/pr_source.lsr/268x0w.png"
      }
    ]
      })
    }, 1000)
  }

  // the reason of writing underbat in front of function name is to seperate the functions I made
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
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
