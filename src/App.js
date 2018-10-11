import React, { Component } from 'react';
import './App.css';
// import ProjectList from './components/ProjectList';
import TeamDetails from './components/TeamDetails';
import FieldDetails from './components/FieldDetails';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import AuthService from './components/auth/auth-service';
import Lobby from './components/Lobby';
// import { Link } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import Profile from './components/Profile'
import Fields from './components/Fields'
import Teams from './components/Teams'
import JustForImage from './components/JustForImage'

import '../node_modules/bootstrap/dist/css/bootstrap.css'; 
// I think we should use this, since bootstrap will help pretty things
// up toward the end.


class App extends Component {
  constructor(props){
    super(props)
    this.state = { 
      loggedInUser: null,
      redirect: false,
     };
    this.service = new AuthService();  

  }

  logMeIn= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }
  

  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{

          this.setState({

            loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          // redirect: false,
          loggedInUser:  false
        }) 
      })
    }
  }


  render() {
    console.log(this.state)
    this.fetchUser();

      return (  
        <div>

          <div className="move-it-all App another-class">
          <Navbar {...this.props} 
          setTheUserInTheAppComponent={this.logMeIn} 
          userInSession={this.state.loggedInUser} />
          <Route className="for-both" exact path="/" 
          render={() => <Login {...this.props} 
          setTheUserInTheAppComponent={this.logMeIn}/> 
          }/>
          </div>

          
        <Route exact path="/" component={JustForImage}/>


      
   
      <div className="the-input-boxes">
      <Switch>
        <Route exact path="/fields" component={Fields} />
          <Route exact path="/profile" 
          render={() => 
          <Profile  {...this.props} 
          userInSession={this.state.loggedInUser}/>}
          />
          <Route exact path="/lobby" component={Lobby} />
          <Route exact path="/signup" {...this.props} component={Signup} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/fields/:id" component={FieldDetails} />
          <Route exact path="/teams/:id" component={TeamDetails} />


<div className = "sign-up-box">
        <Signup/>
        </div>
        
        </Switch>
      </div>

   
      </div>
      );
    }
}

export default App;