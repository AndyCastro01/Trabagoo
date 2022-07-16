import Axios from 'axios';

export default Axios.create({
    baseURL:'https://servidor2-heroku-22.herokuapp.com/api'
})