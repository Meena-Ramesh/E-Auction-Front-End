
import React, { Component } from 'react'
import UserService from '../service/UserService';
import Header from './Header';

class RegisterUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            aadharNumber: '',
            contactNumber: '',
            doorNumber: '',
            buildingName: '',
            streetName: '',
            locality: '',
            city: '',
            state: '',
            country: '',
            zip: '',
            accountNumber: '',
            accountHolderName: '',
            bankName: '',
            branchName: '',
            password: '',
            userType: '',
        }

        this.registerUser = this.registerUser.bind(this)
    }

    changeHandler = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value 
        })
    }


    registerUser = (event) => {
        let user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            aadharNumber: this.state.aadharNumber,
            contactNumber: this.state.contactNumber,
            password: this.state.password,
            userType: this.state.userType,
            address : {
            doorNumber: this.state.doorNumber,
            buildingName: this.state.buildingName,
            streetName: this.state.streetName,
            locality: this.state.locality,
            city: this.state.city,
            state: this.state.state,
            country: this.state.country,
            zip: this.state.zip,
            },
            bankDetails: {
            accountNumber: this.state.accountNumber,
            accountHolderName: this.state.accountHolderName,
            bankName: this.state.bankName,
            branchName: this.state.branchName,
            }
        }
        console.log(user.userType)
        UserService.createAccount(user)
            .then(response => {
                console.log(response)
                window.alert("Account created successfully with UserID " + response.data.userId);
            })
            .catch(error => {
                console.log(error.response)
                window.alert(error.response.status + " " + error.response.data.errorMessage)
            })
    }

    goToLogin = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Header/>
                <br/>
                <br/>
            <div className="container">
                
            <div className="row">
            <h2 className="text-center col-10">User Registration</h2>
            <button className="btn btn-info col-2" onClick={this.goToLogin}>LOGIN</button>
            </div>
            
            <form>
                <h4>Personal Details</h4>
                <div className="form-group">
                    <label>First Name:</label>
                    <input type="text" placeholder="Enter First name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.changeHandler} />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input type="text" placeholder="Enter Last name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.changeHandler} />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.changeHandler} />
                </div>
                <div className="form-group">
                    <label>Aadhar Number:</label>
                    <input type="number" placeholder="Enter 12 digit aadhar number" name="aadharNumber" className="form-control" value={this.state.aadharNumber} onChange={this.changeHandler} />
                </div>
                <div className="form-group">
                    <label>Contact Number:</label>
                    <input type="number" name="contactNumber" className="form-control" value={this.state.contactNumber} onChange={this.changeHandler} />
                </div>
                <hr />

                <h4>Address Info</h4>
                <div className="form-group">
                    <label>Door Number:</label>
                    <input type="text" name="doorNumber" className="form-control" value={this.state.doorNumber} onChange={this.changeHandler} />
                </div>
                <div className="form-group">
                    <label>Street Name:</label>
                    <input type="text" name="streetName" className="form-control" value={this.state.streetName} onChange={this.changeHandler} />
                </div>
                <div className="form-group">
                    <label>Building Name:</label>
                    <input type="text" placeholder="Optional" name="buildingName" className="form-control" value={this.state.buildingName} onChange={this.changeHandler} />
                </div>
                <div className="form-group">
                    <label>Locality:</label>
                    <input type="text" name="locality" className="form-control" value={this.state.locality} onChange={this.changeHandler} />
                </div>
                <div className="form-group">
                    <label>City:</label>
                    <input type="text" name="city" className="form-control" value={this.state.city} onChange={this.changeHandler} />
                </div>
                <div className="form-group">
                    <label>State:</label>
                    <input type="text" name="state" className="form-control" value={this.state.state} onChange={this.changeHandler} />
                </div>
                <div className="form-group">
                    <label>Country:</label>
                    <input type="text" name="country" className="form-control" value={this.state.country} onChange={this.changeHandler} />
                </div>
                <div className="form-group">
                    <label>Zip:</label>
                    <input type="number" name="zip" className="form-control" value={this.state.zip} onChange={this.changeHandler} />
                </div>

                <hr />

                <h4>Bank Details</h4>

                <div className="form-group">
                    <label>Account Number:</label>
                    <input type="text" placeholder="Enter 14-digit account number" name="accountNumber" className="form-control" value={this.state.accountNumber} onChange={this.changeHandler} />
                </div>
                <div className="form-group">
                    <label>Account Holder Name:</label>
                    <input type="text" name="accountHolderName" className="form-control" value={this.state.accountHolderName} onChange={this.changeHandler} />
                </div>
                <div className="form-group">
                    <label>Bank Name:</label>
                    <input type="text" name="bankName" className="form-control" value={this.state.bankName} onChange={this.changeHandler} />
                </div>
                <div className="form-group">
                    <label>Branch Name:</label>
                    <input type="text" name="branchName" className="form-control" value={this.state.branchName} onChange={this.changeHandler} />
                </div>

                <hr />

                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.changeHandler} />
                </div>


                <div className="form-group">
                    <label htmlFor="type">Select Account Type:</label>
                    <select className="form-control" id="type" name="userType" onChange={this.changeHandler}>
                        <option value="SELLER">SELLER</option>
                        <option value="BUYER">BUYER</option>
                    </select>
                </div>

                <button className="btn btn-success" type= "submit" onClick={() => this.registerUser()}>REGISTER</button>
            </form>
        </div></div>
            
            
        )
    }
}

export default RegisterUser
