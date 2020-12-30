import React, { Component } from 'react'
import Header from './Header';
import UserService from '../service/UserService';
import Carousel from 'react-bootstrap/Carousel'
import Footer from './Footer';


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
                    {
                        this.state.userType === "SELLER" && this.props.history.push({
                            pathname: '/myproducts',
                            state: {
                                userId: this.state.userId
                            }
                        })
                    }
                    {
                        this.state.userType === "BUYER" && this.props.history.push({
                            pathname: '/buyer/product/all',
                            state: {
                                userId: this.state.userId
                            }
                        })
                    }
                    {
                        this.state.userType === "ADMIN" && this.props.history.push({
                            pathname: '/product/review',
                            state: {
                                userId: this.state.userId
                            }
                        })
                    }

                }
            )
            .catch(error => {
                window.alert(error.response.data.errorCode + " " + error.response.data.errorMessage)
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
            <div>
                <Header />
                <br />  <br />  <br />
                <div className="row">
                    <Carousel className="col-8">
                        <Carousel.Item>
                        <img
                                className="d-block w-100"
                                src="/carousel_images/slide1.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                                className="d-block w-100"
                                src="/carousel_images/slide2.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                                className="d-block w-100"
                                src="/carousel_images/slide3.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                                className="d-block w-100"
                                src="/carousel_images/slide4.jpg"
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <div className="card col-3 bg-light">
                        <br />
                        <h3 className="text-center">Welcome!!!</h3>
                        <h4 className="text-center text-muted">Login to continue</h4>
                        <div className="card-body">
                            <form onSubmit={this.loginUser}>
                                <div className="form-group">
                                    <input type="text" placeholder="User ID" className="form-control" name="userId" value={userId} pattern="[0-9]{1,}" onChange={this.changeHandler} required />
                                </div>
                                <div className="form-group">
                                    <input type="password" placeholder="Password" className="form-control" name="password" value={password} onChange={this.changeHandler} required />
                                </div>
                                <h6>Sign In As :</h6>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="userType" value="SELLER" onChange={this.changeHandler} />
                                    <label className="form-check-label">
                                        Seller
                            </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="userType" value="BUYER" onChange={this.changeHandler} />
                                    <label className="form-check-label">
                                        Buyer
                            </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="userType" value="ADMIN" onChange={this.changeHandler} />
                                    <label className="form-check-label">
                                        Admin
                            </label>
                                </div>
                                <br />
                                <button className="btn btn-info" type="submit"> LOGIN</button>
                                <button style={{ marginLeft: "10px" }} onClick={() => this.registerUser()} className="btn btn-dark">REGISTER </button>
                            </form>
                        </div>
                    </div>
                </div>
                <br/> <br/>
                <Footer/>
            </div>
        )

    }
}

export default Home
