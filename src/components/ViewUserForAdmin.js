import React, { Component } from 'react'
import UserService from '../service/UserService'
import AdminSideBar from './AdminSideBar'
import Footer from './Footer'
import Header from './Header'

class ViewUserForAdmin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user: {}
        }
    }

    componentDidMount() {
        UserService.getUserById(this.props.location.state.profileId)
            .then(response => {
                console.log(response.data);
                this.setState({
                    user: response.data,
                })
            })
            .catch(error => {
                window.alert(error.response.data.errorCode + " " + error.response.data.errorMessage)
            })
    }
    
    render() {
        if(!this.state.user.address)
        return null
        const { user } = this.state
        return (
            <div>
                <Header />
                <br />  <br />  <br /> <br />
                <div className="row">
                    <AdminSideBar userId={this.props.location.state.userId}/>
                    <div className="card col-8" style={{ padding: 30 }}>
                        <h5 class="card-title">User Profile</h5>
                        <div className="card-body">
                            <h6>Personal Details</h6>
                            <hr />
                            <pre>User ID         : {user.userId} <br />
                             User Name       : {user.firstName} {user.lastName} <br />
                             Email           : {user.email} <br />
                             Aadhar Number   : {user.aadharNumber} <br />
                             Contact Number  : {user.contactNumber} <br />
                            </pre>
                            <h6>Address</h6>
                            <hr />
                            <pre>Door Number     : {user.address.doorNumber} <br />
                             Building Name   : {user.address.buildingName} <br />
                             Street Name     : {user.address.streetName} <br />
                             Locality        : {user.address.locality} <br />
                             City            : {user.address.city} <br />
                             State           : {user.address.state} <br />
                             Country         : {user.address.country} <br />
                             ZIP             : {user.address.zip} <br />
                            </pre>
                            <h6>Bank Details</h6>
                            <hr />
                            <pre>
                            Account Number      : {user.bankDetails.accountNumber} <br/>
                            Account Holder Name : {user.bankDetails.accountHolderName} <br/>
                            Bank Name           : {user.bankDetails.bankName} <br/>
                            Branch Name         : {user.bankDetails.branchName} <br/>
                            </pre>
                        </div>
                    </div>
                </div>
                <br/> <br/>
                <Footer/>
            </div>
        )
    }
}

export default ViewUserForAdmin
