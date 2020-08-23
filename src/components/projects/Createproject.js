import React, { Component } from 'react'
import {connect} from 'react-redux'
import createProject from '../store/actions/Projectactions'
class Createproject extends Component {
  state = {
   Title:'',
   content:''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.createProject(this.state)
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create Project</h5>
          <div className="input-field">
            <label htmlFor="Title">Title</label>
            <input type="text" id='Title' onChange={this.handleChange} />
          </div>
          <div className="input-field">
          <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
          <label htmlFor="content">Textarea</label>
          </div>
          <div className="input-field">
            <button className="btn blue darken-3 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    createProject: (project)=>dispatch(createProject(project))
  }
}

export default connect(null,mapDispatchToProps)(Createproject)