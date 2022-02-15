import React from 'react'
import './App.css';

class App extends React.Component{

  componentDidMount(){
    fetch('http://localhost:3006/api/v1/products/3')
    .then(response => response.json())
    .then(console.log)
  }

  render(){

    return (
      <div className="App">
        <header className="App-header">
          <h3>Restaurant Base</h3>
          <p>Create your Menu options</p>
        </header>
      </div>
    );
  }
  
}

export default App;
