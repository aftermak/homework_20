const loginPage = document.getElementById('login-page');
const loginError = document.querySelector('#error');
const userPage = document.getElementById('user-page');

import { api } from "../services/api.js";
import { showComponent } from "../services/functions.js";
import { getPassword } from "../services/variables.js";

export const login = (() => {

    const API_URL = 'https://reqres.in/api/';

    class Login {

        _login (email, password) {
    
            fetch(API_URL + 'login', {
    
                method: 'POST',
            
                headers: {
                'Content-Type': 'application/json'
                },
            
                body: JSON.stringify(
                    {
                        email,
                        password
                    }
                ) 
            })
            .then ((res) => {
                if(res.ok) {
                    res.json()
                    .then ( res => localStorage.setItem('token', `${res.token}`));
                    this._onSuccess ();
                }
                if (!res.ok) {
                    res.json()
                    .then (res => loginError.innerText = res.error);
                    getPassword.value = null;
                }
            })
        };
    
        _onSuccess () {
            api._getUsers(1);
            showComponent(loginPage, userPage);
        }
    };
    return new Login
})();


