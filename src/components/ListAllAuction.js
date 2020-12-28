import React, { Component } from 'react'
import AuctionService from '../service/AuctionService'
import SellerSideBar from './SellerSideBar'
import { format } from "date-fns";
import Header from './Header';

class ListAllAuction extends Component {
    constructor(props) {
        super(props)

        this.state = {
            auctions : []
        }
    }

    componentDidMount() {
        AuctionService.getAllAuctions().then((response) => {
            this.setState({ auctions: response.data })
        })
        .catch(error => {
            window.alert(error.response.status +  " " + error.response.data)
        })
    }

    render() {
        const { history } = this.props
        return (
            <div>
                <Header />
                <br />
                <h3 className="text-center">
                    Auction List
                    <small className="text-muted">  (All auctions in the system)</small>
                </h3>
                <br />
                <div className="row">
                    <SellerSideBar userId= {this.props.location.state.userId} />
                    <table className="table table-striped table-bordered col-9">
                        <thead>
                            <tr>
                                <th>Auction ID</th>
                                <th>Base Price</th>
                                <th>Starting Date</th>
                                <th>Ending Date</th>
                                <th>Maximum Bid Price</th>
                                <th>Bid Winner</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.auctions.map(
                                    auction =>
                                        <tr key={auction.auctionId}>
                                            <td>{auction.auctionId}</td>
                                            <td>{auction.basePrice}</td>
                                            <td>{auction.startDate.slice(0,10)}</td>
                                            <td>{auction.endDate.slice(0,10)}</td>
                                            <td>{auction.maxBidPrice}</td>
                                            <td>{auction.bidWinner}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default ListAllAuction
