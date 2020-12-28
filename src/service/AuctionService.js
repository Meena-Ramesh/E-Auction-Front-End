import axios from 'axios';

const AUCTION_API_BASE_URL = "http://localhost:8080/eas/auction";

class AuctionService {

    getAllAuctions() {
        return axios.get(AUCTION_API_BASE_URL);
    }

    initiateAuction(productId, auction) {
        return axios.post(AUCTION_API_BASE_URL + "/" + productId, auction);
    }

}

export default new AuctionService()