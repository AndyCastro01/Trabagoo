import Axios from 'axios';

export default Axios.create({
    baseURL:'https://server-trabago.herokuapp.com/api'
})