import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import AuthService from './auth/auth-service';
// import EditPorfile from './components/EditPorfile'


class Profile extends Component {
  constructor(props){
    super(props);
    this.state = { 
      loggedInUser: this.props.userInSession
         };
    this.service = new AuthService();

  }

  
componentWillReceiveProps(nextProps) {
    console.log('1234567890987654321`12345678909876543',nextProps)
    this.setState({ 
      loggedInUser: nextProps["userInSession"]  
  })
  }

    
  render(){
    console.log('!!!!!!!==========' , this.state.loggedInUser)
    if(this.state.loggedInUser){
      console.log(this.state.loggedInUser.username)
      return(
            <div className="change-the-color">
              <div className="moving-the-top">
            <img src={this.state.loggedInUser.avatar} width= "100px"/>
              </div>

              <div className = "profile-info">
            <h1>{this.state.loggedInUser.username}'s Profile</h1>
            <h3>Name: {this.state.loggedInUser.firstName} {this.state.loggedInUser.lastName}</h3>
            <h3>Email: {this.state.loggedInUser.email} </h3>
            </div>

            <hr/>


<br/>
<div className="the-frame-work">

<h1>Videos and media</h1>

           <iframe className="the-video" width="1000" height="615" src="https://www.youtube.com/embed/bKOTKHtbM54" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

  </div>

            </div>
             

      ) 
    } else {
      return (
        <div>
Woops! You can't view the profile if you aren't logged in. Do that and try again!      </div>
      )
    }
    }
  }

  
  export default Profile;