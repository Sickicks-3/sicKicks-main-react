
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditTeam from './EditTeam';



class TeamDetails extends Component {
  constructor(props){
      super(props);
      this.state = {};
  }

  componentDidMount(){
      this.getSingleTeam();
  }

  getSingleTeam = () => {
      const { params } = this.props.match;
      axios.get(process.env.REACT_APP_BASE_URL + `/teams/${params.id}`)
      .then( responseFromApi =>{
          const theTeam = responseFromApi.data;
          this.setState(theTeam);
      })
      .catch((err)=>{
          console.log(err)
      })
  }

  renderEditForm = () => {
    if(!this.state.teamName){
        this.getSingleTeam();
        } else {
        //                                                    {...props} => so we can have 'this.props.history' in Edit.js
        //                                                                                          ^
        //                                                                                          |
        return <EditTeam theTeam={this.state} getTheTeam={this.getSingleTeam} {...this.props} />
        }
    }


    // DELETE PROJECT:
  deleteTeam = () => {
    const { params } = this.props.match;
    axios.delete(process.env.REACT_APP_BASE_URL + `/teams/${params.id}`)
    .then( responseFromApi =>{
        this.props.history.push('/teams'); // !!!         
    })
    .catch((err)=>{
        console.log(err)
    })
  }
   


  render(){
    return(
      <div>
        <h1>{this.state.teamName}</h1>
        <p>{this.state.league}</p>
        <p>{this.state.details}</p>
        <button class="btn btn-danger" onClick={() => this.deleteTeam()}>Delete team</button>

        {this.renderEditForm()}
        


        <Link to={'/teams'}>Back to teams</Link>
      </div>
    )
  }
}

export default TeamDetails;
