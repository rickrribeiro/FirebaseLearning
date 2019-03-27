import React, {Component} from 'react'
import Notifications from './Notification.jsx'
import ProjectList from '../projects/ProjectList.js'
import {connect} from 'react-redux'

class Dashboard extends Component{
render(){
    const  projectsn = this.props.project;
    console.log(this.props)
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                <ProjectList projects={projectsn}/>
                </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
            </div>
        </div>

    )
}

}

const mapStateToProps =(state) =>{
    return{
        project: state.project.projects
    }

}

export default connect(mapStateToProps)(Dashboard)