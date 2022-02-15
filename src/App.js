import './App.css';
import {
  Switch,
  Route,
  withRouter
} from 'react-router-dom';
import React from 'react';
import Login from './components/Login';
import Home from "./components/Home.js";
import Logout from './components/Logout';
import Signup from './components/Signup.js';
import NavBar from './components/NavBar.js';
import MainContainer from './components/MainContainer.js';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js';
import { getProducts } from './actions/product.js';

class App extends React.Component{

  componentDidMount(){
    this.props.getCurrentUser()
    this.props.getProducts()    
  }

  render(){

    const{currentUser, loggedIn, products} = this.props

    return (
      <div className="App">
        <header className="App-header">
          <div className= "welcome">
            <div className = "Welcome-LoggedIn"><h3>{ currentUser ? `Welcome ${currentUser.data.attributes.name}`: "" }</h3></div>
            <nav className="navbar navbar-light">{ loggedIn ? <NavBar location={this.props.location}/> : null }</nav>
          </div>
          <div className= "routes">
            <Switch>
              <Route exact path="/" render={({history}) => loggedIn ? <MainContainer history={history} />  : <Home />} />
              <Route exact path="/login" component= {Login} />
              <Route exact path="/logout" component= {Logout} />
              <Route exact path="/signup" component= {Signup } />
              {/* <Route exact path="/products" component= {products} /> */}
              {/* <Route exact path="/products/new" component= {NewProductForm } /> */}
              {/* <Route exact path="/products/:id" render= {props =>{ */}
                  {/* const product =  products.find(rec => rec.id === props.match.params.id)           */}
                  {/* return<ProductCard product={product} {...props}/> */}
                  {/* } */}
                {/* }/> */}
            </Switch>
          </div>
        </header>
      </div>
    );
  }
  
}

const mapStateToProps = state =>{

  console.log(state)

  return{
    currentUser: state.currentUser,
    loggedIn: !!state.currentUser, 
    products: state.product 
  }
}

export default withRouter(connect(mapStateToProps, {getCurrentUser, getProducts})(App));
