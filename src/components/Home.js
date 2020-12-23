import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId : '',
             password : ''
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    clickHandler = (event) => {
        console.log(this.state)
        event.preventDefault()
        axios.post('http://localhost:8080/eas/user/login', this.state)
            .then(response => console.log(response))
            .catch(error => console.log(error))
            
    }
    
    render() {
        const {userId, password} = this.state
        return (
            
            <div>
                <label>UserId</label>
                <input type="text" name="userId" value={userId} onChange={this.changeHandler} /> <br />
                <label>Password</label>
                <input type = "password" name = "password" value = {password} onChange = {this.changeHandler}/> <br/>
                <button onClick = {this.clickHandler}>LOGIN</button>
            </div>
        )
    }
}

export default Home
