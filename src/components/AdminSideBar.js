import React from 'react'
import { Link } from 'react-router-dom'

function AdminSideBar(props) {
    return (
        <div className="sidebar col-3">
            <a><Link to={{
                pathname: '/product/review',
                state: {
                    userId: props.userId
                }
            }}>Products For Review</Link></a>

            <a><Link to={{
                pathname: '/admin/user/all',
                state: {
                    userId: props.userId
                }
            }}>View All Users</Link></a>

            <a><Link to={{
                pathname: "/myprofile",
                state: {
                    userId: props.userId
                }
            }}>View Profile</Link> </a>

            <a><Link to={{
                pathname: '/'
            }}
            >Logout</Link></a>

        </div>
    )
}

export default AdminSideBar

