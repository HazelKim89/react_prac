import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js'


const movies = [
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
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} /> 
        })}
      </div>
    );
  }
}


export default App;
