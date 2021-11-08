import axios from 'axios';
import Router from "next/router";

let url = 'https://e6djdtoi97.execute-api.us-east-2.amazonaws.com/dev/';
// let url = 'https://jsonplaceholder.typicode.com/'

const apiHelper = (api, method, data, headers) => {
    const apiUrl = url + api;
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: apiUrl,
            data: data,
            headers: headers
        })
            .then(res => resolve(res))
            .catch(error => {
                if (error.response && error.response.status === 401) {
                    Router.push('');
                } else {
                    reject(error);
                }
            });
    });
}

export default apiHelper;