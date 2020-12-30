/* import React, { Component } from 'react'
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
        .catch(error => {
            window.alert(error.response.data.errorCode + " " + error.response.data.errorMessage)
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
                <br />  <br />  <br /> <br />

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

 */




import React, { Component } from 'react';
import ReactPaginate from 'react-paginate'
import UserService from '../service/UserService';
import AdminSideBar from './AdminSideBar';
import Footer from './Footer';
import Header from './Header';

class ListAllUserForAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            offset: 0,
            users: [],
            orgData: [],
            perPage: 5,
            currentPage: 0

        }
        this.viewUser = this.viewUser.bind(this)
        this.clickPageHandler = this.clickPageHandler.bind(this)
    }
    clickPageHandler = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData();
        })
    }

    loadMoreData = () => {
        const data = this.state.orgData
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        this.setState(
            {
                pageCount: Math.ceil(data.length / this.state.perPage),
                users: slice
            })

    }

    componentDidMount() {
        this.getData();
    }
    getData() {
        UserService.getAllUser()
        .then(response => {
                const data = response.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                this.setState(
                    {
                        pageCount: Math.ceil(data.length / this.state.perPage),
                        orgData: response.data,
                        users: slice
                    }
                )
            })
        .catch(error => {
                window.alert(error.response.data.errorCode + " " + error.response.data.errorMessage)
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
                <Header />
                <br />  <br />  <br /> <br/>
                <h3 className="text-center">
                    User List
                    <small className="text-muted">  (All Users in the system)</small>
                </h3>
                <br />
                <div class="row">
                    <AdminSideBar userId={this.props.location.state.userId} />
                    <div className="container col-9">
                    <div className="container">
                        <ReactPaginate previousLabel={"prev"} nextLabel={"next"} breakLabel={"..."} breakClassName={"break me"}
                        pageCount={this.state.pageCount} marginPagesDisplayed={2} pageRangeDisplayed={10} onPageChange={this.clickPageHandler}
                        containerClassName={"pagination"} subContainerClassName={"pages pagination"} activeClassName={"active"}></ReactPaginate>
                    </div>
                    <div className="container">
                        <table className="table table-striped table-bordered">
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
                </div>
                <br/> <br/>
                <Footer/>
            </div>
        )
    }
}
export default ListAllUserForAdmin