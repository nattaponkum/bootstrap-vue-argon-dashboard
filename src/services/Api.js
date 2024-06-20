import axios from 'axios'
import store from '@/store'

export default () => {
    return axios.create({
        // baseURL: 'http://localhost:8081/',
        baseURL: ' https://57f3-2403-6200-8840-2fa7-b54c-ccdb-8139-28fb.ngrok-free.app/',
        headers: {
            Authorization: `Bearer ${store.state.token}`
        }
    })
}