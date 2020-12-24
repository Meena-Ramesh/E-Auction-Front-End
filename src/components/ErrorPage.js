import React from 'react'

function ErrorPage(props) {
    return (
        <div>
            <h4>Oops!! Something went wrong</h4>
            <h5>{props.location.state.code}</h5>
            <h5>{props.location.state.detail}</h5>
        </div>
    )
}

export default ErrorPage
