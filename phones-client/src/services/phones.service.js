import axios from 'axios';

export default class PhoneService{
    constructor(){
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/phones`,
            withCredentials: true
        })
    }

    get = () => this.instance.get("/")
    getDetail = (id) => this.instance.get(`/${id}`)
}