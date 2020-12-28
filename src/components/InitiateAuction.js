import React, { Component } from 'react'
import AuctionService from '../service/AuctionService'
import Header from './Header'
import SellerSideBar from './SellerSideBar'

class InitiateAuction extends Component {
   
    constructor(props) {
        console.log('In const')
        super(props)
    
        this.state = {
            basePrice: '',
            startDate: '',
            endDate: ''

        }
    }

    createAuction = (productId) => {
        const {userId} = this.props.location.state
        console.log('In create auction')
        let auction = {
            basePrice: this.state.basePrice,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }

        AuctionService.initiateAuction(productId, auction)
        .then(response => {
            console.log(response)
            window.alert("Auction initiated successfully! The auction Id is : " + response.data.auctionId);
            this.props.history.go(-2);
            })
        .catch(error => {
            window.alert(error.response.data.errorCode +  " " + error.response.data.errorMessage)
            window.location.reload()
        })  
    }

    changeHandler = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        console.log('In render')
        return (
            <div>
                <Header/>
                <div className="row">
                    <SellerSideBar userId={this.props.location.state.userId} />
                <div className="card col-9">
                        <h2 className="text-center">Initiate an Auction</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="basePrice">Base Price:</label>
                                    <input type="number" min="0" step="1" className="form-control" placeholder="Enter base price"
                                        value={this.state.basePrice} onChange={this.changeHandler} required name="basePrice" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="startDate">Start Date:</label>
                                    <input type="date" className="form-control" placeholder="Enter starting date"
                                        value={this.state.startDate} onChange={this.changeHandler} required name="startDate" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="endDate">End Date:</label>
                                    <input type="date" className="form-control" placeholder="Enter ending date"
                                        value={this.state.endDate} min={this.state.startDate} onChange={this.changeHandler} required name="endDate" />
                                </div>
                                <div className="mt-3">
                                    <button type="submit" class="btn btn-success" onClick={() => this.createAuction(this.props.location.state.productId)}>Submit</button>
                                    <button className="btn btn-danger" style={{ marginLeft: "10px" }}>Cancel</button>
                                </div>
                            </form>
                        </div>
                   </div>
                </div>
            </div>
        )
    }
}

export default InitiateAuction
