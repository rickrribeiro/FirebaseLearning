import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectAction'
import { Redirect } from 'react-router-dom'
import firebase from 'firebase'
class CreateProject extends Component {
  state = {
    title: '',
    content: '',
    avatar: ''
  }

  

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push('/');
  }

  upload = ()=>{
    const file = this.file.files[0]
    const storageRef = firebase.storage().ref()
    const mainImage = storageRef.child(this.file.files[0].name)
    mainImage.put(file).then((snapshot) => {
      mainImage.getDownloadURL().then((url) =>{
       this.setState({avatar: url,})
       console.log("a"+url)
      })
    })
  }

  render() {
    this.setRef = ref =>{
      this.file =ref;
    }
   

    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Project</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Project Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Project Content</label>
          </div>
          <div className="input-field">
              <input type="file"
              id="avatar" name="avatar" onChange={this.upload} ref={this.setRef}
              accept="image/png, image/jpeg"/>
          </div> 
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
