
const buttonLogin = document.querySelector('#login-btn');
const buttonPrew = document.getElementById('action-prew');
const buttonNext = document.getElementById('action-next');
const buttonNew = document.getElementById('action-new');

import {login} from "./components/login.js";
import { api } from "./services/api.js";
import {user} from './components/user.js'
import { showCreate, unShowModal, incPage, decPage } from "./services/functions.js";
import { buttonCreate, buttonUpdate, formUpdate, getLogin, getPassword } from "./services/variables.js";

if (localStorage.getItem('token')) {
    login._onSuccess();
} 

buttonLogin.addEventListener ('click',() => {
    login._login(getLogin.value, getPassword.value);
});

buttonNext.addEventListener('click', () => {
    api._getUsers(incPage());
    console.log();
});

buttonPrew.addEventListener('click', () => {
    api._getUsers(decPage());
});

buttonNew.addEventListener('click', () => {
    showCreate();
});

buttonCreate.addEventListener('click', (e) => {
    unShowModal();
    e.preventDefault();
    user._createUser();
    api._addUser(user);
    formUpdate.reset();
});

buttonUpdate.addEventListener('click', (e) => {
    e.preventDefault();
    const id = formUpdate.id;
    unShowModal();
    user._createUser()
    user._updateDataset(id);
    api._updateUser(id, user);
    formUpdate.reset();
})




































