import axios from 'axios'
import store from '@/store'

export default () => {
    console.log('store.state.token', store.state.token)
    return axios.create({
        // baseURL: 'http://localhost:8081/',
        baseURL: 'https://4b05-110-170-245-39.ngrok-free.app',
        headers: {
            Authorization: `Bearer ${store.state.token}`
        }
    })
}