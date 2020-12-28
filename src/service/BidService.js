import axios from "axios";

const BID_API_BASE_URL = "http://localhost:8080/eas/bid"

class BidService {
    getAllBidsByAuction(auctionId) {
        return axios.get(BID_API_BASE_URL + '/' + auctionId)
    }

    createBid(bid) {
        return axios.post(BID_API_BASE_URL, bid)
    }

    removeAllBids(userId, auctionId) {
        return axios.delete(BID_API_BASE_URL + '/' + userId + '/' + auctionId)
    }
}

export default new BidService()