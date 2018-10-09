
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditField from './EditField';



class FieldDetails extends Component {
  constructor(props){
      super(props);
      this.state = {};
  }

  componentDidMount(){
      this.getSingleField();
  }

  getSingleField = () => {
      const { params } = this.props.match;
      axios.get(process.env.BASE_URL + `/fields/${params.id}`)
      .then( responseFromApi =>{
          const theField = responseFromApi.data;
          this.setState(theField);
      })
      .catch((err)=>{
          console.log(err)
      })
  }

  renderEditForm = () => {
    if(!this.state.fieldName){
        this.getSingleField();
        } else {
        //                                                    {...props} => so we can have 'this.props.history' in Edit.js
        //                                                                                          ^
        //                                                                                          |
        return <EditField theField={this.state} getTheField={this.getSingleField} {...this.props} />
        }
    }


    // DELETE PROJECT:
  deleteField = () => {
    const { params } = this.props.match;
    axios.delete(process.env.BASE_URL + `/fields/${params.id}`)
    .then( responseFromApi =>{
        this.props.history.push('/fields'); // !!!         
    })
    .catch((err)=>{
        console.log(err)
    })
  }
   


  render(){
    return(
      <div>
        <h1>{this.state.fieldName}</h1>
        <p>{this.state.teamsPlaying}</p>
        <button onClick={() => this.deleteField()}>Delete field</button>

        {this.renderEditForm()}
        


        <Link to={'/fields'}>Back to fields</Link>
      </div>
    )
  }
}

export default FieldDetails;
