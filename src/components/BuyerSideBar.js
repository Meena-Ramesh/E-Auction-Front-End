import React from 'react'
import { Link } from 'react-router-dom'

function BuyerSideBar(props) {
    return (
        <div className="sidebar col-3">
            <a><Link to={{
                pathname: '/buyer/product/all',
                state: {
                    userId: props.userId
                }
            }}>
                Products</Link></a>

            <a><Link to={{
                pathname: '/buyer/category',
                state: {
                    userId: props.userId
                }
            }}>
                Categories</Link></a>

            <a><Link to={{
                pathname: "/myprofile",
                state: {
                    userId: props.userId
                }
            }}>View Profile</Link> </a>

            <a><Link to={{
                pathname: '/'
            }}>
                Logout</Link></a>
        </div>
    )
}

export default BuyerSideBar
