import React from 'react'
import {Link} from 'react-router-dom'
function SellerSideBar(props) {
    return (
        <div className="sidebar col-3">
                        <Link to= {{
                            pathname: "/myproducts",
                            state: {
                                userId: props.userId
                            }}
                        }><a>View My Products</a></Link>

                        <a><Link to={{
                            pathname:"/allproducts",
                            state: {
                                userId: props.userId
                            }

                        }}> View All Products</Link></a>

                        <a><Link to={{
                            pathname: "/view/auction/all",
                            state: {
                                userId: props.userId
                            }

                        }}>View Auctions</Link> </a>
                        <a><Link to= {{
                            pathname: "/myprofile",
                            state: {
                                userId: props.userId
                            }
                        }}>View Profile</Link> </a>

                        <a><Link to={{
                            pathname: '/'
                         }}>Logout</Link></a>

        </div>
    )
    
}

export default SellerSideBar
