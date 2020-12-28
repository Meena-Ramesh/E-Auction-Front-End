import React, { Component } from 'react'
import UserService from '../service/UserService';
import AdminSideBar from './AdminSideBar';
import BuyerSideBar from './BuyerSideBar';
import Header from './Header';
import SellerSideBar from './SellerSideBar';

export class UserHome extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user: {}
        }
    }

    componentDidMount() {
        UserService.getUserById(this.props.location.state.userId)
        .then(response => {
            console.log(response.data);
            this.setState({ 
                user : response.data
            })
        })
        .catch(error => {
            window.alert(error.response.status +  " " + error.response.data)
        })
    }
    
    render() {
        if(!this.state.user) {
            return null
        }
        
        return (
            <div>
               <Header/>
                <br />
                <br />
                <div className="row" >
                    {
                        this.state.user.userType === 'SELLER' &&   <SellerSideBar userId={this.state.user.userId}/>
                    }
                    {
                        this.state.user.userType === 'ADMIN' && <AdminSideBar userId={this.state.user.userId}/>
                    }
                    {
                        this.state.user.userType === 'BUYER' && <BuyerSideBar userId={this.state.user.userId}/>
                    }
                   
                    <div className="container col-8">
                    <h2 className="text-center">
                    Welcome, {this.state.user.firstName}
                    </h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserHome
