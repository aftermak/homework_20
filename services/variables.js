const getLogin = document.getElementById('loginName');
const getPassword = document.getElementById('loginPass');
const cardContainer = document.getElementById('card-container');
const cardUserTemplate = document.getElementById('card-template').innerHTML;
const formUpdate = document.forms.modal;
const buttonCreate = document.getElementById('action-create');
const buttonUpdate = document.getElementById('action-update');

export { 
    getLogin,
    getPassword, 
    cardContainer, 
    cardUserTemplate, 
    formUpdate, 
    buttonUpdate, 
    buttonCreate
}