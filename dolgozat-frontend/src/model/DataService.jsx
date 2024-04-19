import axios from "axios";


class DataService {

    constructor() {
        axios.defaults.baseURL = "http://localhost:8001/api";
    }

    getData(endPoint, callbackFn, errFn = (param) => {} ) {
        axios.get(endPoint)
            .then(response => {
                callbackFn(response);
            })
            .catch(error => {
                errFn(error);
            });
    }
}

export default DataService;