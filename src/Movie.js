import React from 'react'
import PropTypes from 'prop-types'
import './Movie.css'

// class Movie extends Component {

//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
//   }
//   render() {
//     return (
//       <div>
//         <MoviePoster poster={this.props.poster} />
//         <h1>{this.props.title}</h1>
//       </div>
//     )
//   }
// }
function Movie({title, poster}){
  return (
    <div>
      <MoviePoster poster={poster} />
      <h1>{title}</h1>
    </div>
  )
}

// functional component, this is not a class. It's already using props so no need to use 'this.props'.
function MoviePoster({poster}){
  return (
    <img src={poster} alt={poster} width="400"/>
    )
  }

  Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  }
  
  MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
  }

  export default Movie
  // class MoviePoster extends Component{
  //   static propTypes = {
  //     poster: PropTypes.string.isRequired
  //   }
  //   render(){
  //     return(
  //       <img src={this.props.poster} alt={this.props.poster} width="400"/>
  //     )
  //   }
  // }