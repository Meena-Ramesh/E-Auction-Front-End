import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div className="fixed-top">
                <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><p className="navbar-brand">E-AUCTION SYSTEM</p></div>
                    </nav>
                    
                </header>
            </div>
        )
    }
}


export default Header
