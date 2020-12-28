import React, { Component } from 'react'
import UserService from '../service/UserService'
import AdminSideBar from './AdminSideBar'
import Header from './Header'

class ListAllUserForAdmin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }

        this.viewUser = this.viewUser.bind(this)
    }

    componentDidMount() {
        UserService.getAllUser()
        .then(response => {
            this.setState({
                users: response.data
            })
        })
    }

    viewUser = (profileId) => {
        this.props.history.push({
            pathname: '/admin/user/profile',
            state: {
            profileId: profileId,
            userId: this.props.location.state.userId
            }
        })
    }


    render() {
        return (
            <div>
                <Header/>
                <br />

                <h3 className="text-center">
                    User List
                    <small className="text-muted">  (All Users in the system)</small>
                </h3>
                <br />
                <div className="row">
                    <AdminSideBar userId={this.props.location.state.userId} />
                    <table className="table table-striped table-bordered col-9">
                        <thead>
                            <tr>
                                <th> User ID</th>
                                <th> First Name</th>
                                <th> Last Name</th>
                                <th> User Type</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.userId}>
                                            <td>  {user.userId} </td>
                                            <td>  {user.firstName}</td>
                                            <td>  {user.lastName}</td>
                                            <td>  {user.userType} </td>
                                            <td>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewUser(user.userId)} className="btn btn-info">View</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListAllUserForAdmin

