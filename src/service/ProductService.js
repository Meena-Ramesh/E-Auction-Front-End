import axios from 'axios'

const PRODUCT_API_BASE_URL = 'http://localhost:8080/eas/product'

class ProductService
 {
    getApprovedProduct() {
        return axios.get(PRODUCT_API_BASE_URL)
    }

    getProductsOwnedByUser(userId) {
        return axios.get(PRODUCT_API_BASE_URL + '/seller/' + userId)
    }

    getProductById(productId) {
        return axios.get(PRODUCT_API_BASE_URL + '/' + productId)
    }

    getPendingProducts() {
        return axios.get(PRODUCT_API_BASE_URL + '/pending')
    }

    reviewProduct(productId, reviewStatus) {
        return axios.put(PRODUCT_API_BASE_URL + '/review/' + productId + '/' + reviewStatus)
    }

    getProductsByCategory(category) {
        return axios.get(PRODUCT_API_BASE_URL + '/category/' + category)
    }

    getAllCategory() {
        return axios.get(PRODUCT_API_BASE_URL + '/category')
    }

}
export default new ProductService()
