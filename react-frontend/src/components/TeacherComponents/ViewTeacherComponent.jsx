import React, { Component } from 'react'
import TeacherService from '../../services/TeacherService'

class ViewTeacherComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            teacher: {}
        }
    }

    componentDidMount(){
        TeacherService.getTeacherById(this.state.id).then( res => {
            this.setState({teacher: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Teacher Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Teacher First Name: </label>
                            <div> { this.state.teacher.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Teacher Last Name: </label>
                            <div> { this.state.teacher.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Teacher Email ID: </label>
                            <div> { this.state.teacher.emailId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewTeacherComponent