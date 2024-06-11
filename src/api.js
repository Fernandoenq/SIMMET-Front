import ky from 'ky'

const api = ky.extend({
    //prefixUrl: 'https://agoravai-fernando.onrender.com',
    prefixUrl: 'http://127.0.0.1:5000/',
    credentials: 'include',
    timeout: 10000
})

export default api

/*import axios from 'axios'

const api = axios.create({
    baseURL: 'https://agoravai-fernando.onrender.com',
    //baseURL: 'https://api.faustocintra.com.br/'
    timeout: 5000,
    //Envia os cookies de volta em todas a requisições
    withCredentials: true
    /*headers:{
        'x-access-token': window.sessionStorage.getItem('app-data')
    }

})

export default api
*/

