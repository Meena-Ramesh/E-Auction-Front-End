import React, { Component } from 'react'
import UserService from '../service/UserService';
import Footer from './Footer';
import Header from './Header';
import SellerSideBar from './SellerSideBar';

class ViewBuyerForSeller extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             buyer: {}
        }
    }

    componentDidMount() {
        UserService.getUserById(this.props.location.state.buyerId)
            .then(response => {
                console.log(response.data);
                this.setState({
                    buyer: response.data,
                })
            })
            .catch(error => {
                window.alert(error.response.data.errorCode +  " " + error.response.data.errorMessage)
            })
    }

    render() {
        if(!this.state.buyer.address)
        return null
        const { buyer } = this.state
        return (
            <div>
                <Header />
                <br />  <br />  <br /> <br />
                <div className="row">
                    <SellerSideBar userId={this.props.location.state.userId}/>
                    <div className="card col-8" style={{ padding: 30 }}>
                        <h5 class="card-title">Buyer Profile</h5>
                        <div className="card-body">
                            <h6>Personal Details</h6>
                            <hr />
                            <pre>User ID         : {buyer.userId} <br />
                             User Name       : {buyer.firstName} {buyer.lastName} <br />
                             Email           : {buyer.email} <br />
                             Contact Number  : {buyer.contactNumber} <br />
                            </pre>
                            <h6>Address</h6>
                            <hr />
                            <pre>Door Number     : {buyer.address.doorNumber} <br />
                             Building Name   : {buyer.address.buildingName} <br />
                             Street Name     : {buyer.address.streetName} <br />
                             Locality        : {buyer.address.locality} <br />
                             City            : {buyer.address.city} <br />
                             State           : {buyer.address.state} <br />
                             Country         : {buyer.address.country} <br />
                             ZIP             : {buyer.address.zip} <br />
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

export default ViewBuyerForSeller
