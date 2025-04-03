import axios from 'axios'
import store from '@/store'

export default () => {
    console.log('store.state.token', store.state.token)
    return axios.create({
        // baseURL: 'http://localhost:8081/', // Uncomment for local testing
        baseURL: 'https://egat-pv-backend.azurewebsites.net/', // Production URL
        headers: {
            Authorization: `Bearer ${store.state.token}`
        }
    })
}