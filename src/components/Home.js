import React, { Component } from 'react'
import Header from './Header';
import UserService from '../service/UserService';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            password: '',
            userType: ''
        }
        this.registerUser = this.registerUser.bind(this)
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginUser = (event) => {
        event.preventDefault()
        UserService.loginUser(this.state)
            .then(
                response => {
                    this.props.history.push({
                        pathname: '/user',
                        state: {
                            userId: this.state.userId
                        }
                    })

                }
            )
            .catch(error => {
                window.alert(error.response.data.errorCode +  " " + error.response.data.errorMessage)
            })

    }

    registerUser() {
       this.props.history.push({
           pathname: '/register'
       })
    }

    render() {
        const { userId, password } = this.state
        return (
            <div className="container-fluid">
                <Header /> <br /><br /><br />
                <div className="jumbotron text-center" style={{ marginBottom: 0 }}>
                    <h1>Welcome!!</h1>
                    <p>Please login to continue</p>
                </div>
                <div className="jumbotron">
                    <form className="was-validated">
                        <div className="form-group">
                            <label>UserId</label>
                            <input type="text" className="form-control" name="userId" value={userId} pattern="[0-9]{1,}" onChange={this.changeHandler} required />
                            <div className="valid-feedback">Valid</div>
                            <div className="invalid-feedback">Please fill out this field using numbers only.</div>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" name="password" value={password} onChange={this.changeHandler} required />
                        </div>
                        <h6>Sign In As :</h6>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="userType" value="SELLER" onChange={this.changeHandler} />
                            <label className="form-check-label">
                                SELLER
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="userType" value="BUYER" onChange={this.changeHandler} />
                            <label className="form-check-label">
                                BUYER
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="userType" value="ADMIN" onChange={this.changeHandler} />
                            <label className="form-check-label">
                                ADMIN
                            </label>
                        </div>
                        <button className="btn btn-primary" type="submit" onClick={this.loginUser}> LOGIN</button>
                        <button style={{ marginLeft: "10px" }} onClick={() => this.registerUser()} className="btn btn-info">REGISTER </button>
                    </form>
                </div>
            </div>
        )

    }
}

export default Home
