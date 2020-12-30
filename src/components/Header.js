import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class Header extends Component {
    render() {
        return (
            <div className="fixed-top">
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <img className="navbar-brand" src="/logo.jpg" alt="Logo" style={{ width: '40px' }} />
                        <div className="navbar-brand">E-AUCTION SYSTEM</div>
                    </nav>

                </header>
            </div>
        )
    }
}


export default Header
