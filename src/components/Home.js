import React, { Component } from 'react'
import axios from 'axios'
import HeaderComponent from './HeaderComponent';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            password: '',
            userType: ''
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    clickHandler = (event) => {
        const { history } = this.props
        console.log(this.state)
        event.preventDefault()
        axios.post('http://localhost:8080/eas/user/login', this.state)
            .then(
                response => {
                    console.log(response)
                    if(this.state.userType === "BUYER")
                        history.push({
                            pathname: '/buyer',
                            state: {
                                userId : this.state.userId
                            }
                        })
                    if(this.state.userType === "SELLER")
                        history.push('/seller')
                }
                )
            .catch(error => {
                history.push({
                    pathname: '/error',
                    state : {
                        code : error.response.status,
                        detail : error.response.data
                    }
                })
                console.log(error.response.data)
            })
           
    }

    render() {
        const { userId, password } = this.state
        return (
            <div className="container-fluid"> 
                <HeaderComponent /> <br /><br /><br />
                <h2>Welcome!!</h2> <br /><br />
                <div className="jumbotron">
                    <form>
                        <div className="form-group">
                            <label>UserId</label>
                            <input type="text" className="form-control" name="userId" value={userId} pattern="[0-9]{1,}" onChange={this.changeHandler} required />
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
                        <button className="btn btn-primary" type="submit" onClick={this.clickHandler}> LOGIN</button>
                    </form>
                </div>
            </div>
        )
        
        }
}

export default Home
