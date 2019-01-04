import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Restaurant extends Component{
    render(){
        return(
            <div className="Restaurant_Column">
                <img src={this.props.logo} alt={this.props.name} />
                <h3>{this.props.name}</h3>
            </div>
        )
    }
}

Restaurant.propTypes = {
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired   
}

// class MoviePoster extends Component {
//     render(){
//         return
//         <img poster={}
//     }
// }

export default Restaurant