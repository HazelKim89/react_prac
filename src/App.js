import React, { Component } from 'react';
import './App.css';
import Restaurant from './Restaurant.js'


const restaurants = [
  {
    name: "Moxie's Griil & Bar",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5r5WYYtqK85-KYdWk7PakVBV4eYSqrg6y-RWnd6f7Eh5GdLWU"
  },
  {
    name: "Coffe House",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhvJloBLCE50ysv2wNDB78RRjWiW9P-ZrST1PGW8j1LGckqfel"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {restaurants.map((restaurant, index ) => {
          return <Restaurant name={restaurant.name} logo={restaurant.logo} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
