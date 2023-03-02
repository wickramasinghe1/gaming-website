import {baseUrl, loginUrl} from './urlConfig';
import {useNavigate} from "react-router-dom";
const axios = require('axios');

export const LOGINHANDLER = (username, password) => {
    const navigate = useNavigate();
    axios.post(baseUrl + loginUrl, {
        userName: username,
        password: password
    })
        .then(function (response) {
            // handle success
            console.log(response);
            navigate('/games')
        })
        .catch(function (error) {
            // handle error
            alert("Your account login details are wrong! Please try again")
        })
        .finally(function () {
            // always executed
        });
}