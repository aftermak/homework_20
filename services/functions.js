const modalCreate = document.getElementById('modalCreate');
const modalTitle = modalCreate.querySelector('.title');
const buttonsDelete = document.getElementsByClassName('delete');
const buttonsUpdate = document.getElementsByClassName('update');
let currentPage = 1;

import { buttonCreate, buttonUpdate, formUpdate, cardContainer } from "./variables.js"; 
import { updateForm } from "../components/update.js";
import { api } from "./api.js";

function incPage () {
    return ++currentPage;
}

function decPage () {
    return --currentPage;
}

function findUserCard (id) {
   return document.getElementById(`card-${id}`);
}

function deleteUser (id) {
    findUserCard(id).remove()
}

function showComponent (selector_1, selector_2) {
    selector_1.classList.add('hide');
    selector_2.classList.remove('hide');
}

function showModal () {
    modalCreate.classList.remove('hide')
    cardContainer.classList.add('blur')
}

function unShowModal () {
    modalCreate.classList.add('hide');
    cardContainer.classList.remove('blur');
}

function showUpdate () {
    showComponent(buttonCreate, buttonUpdate);
    modalTitle.textContent = 'UPDATE USER INFO';
    showModal(modalCreate, cardContainer);
}

function showCreate () {
    showComponent(buttonUpdate, buttonCreate)
    modalTitle.textContent = 'CREATE USER';
    showModal(modalCreate, cardContainer);
}

function buttonsUpdateId () {
    [...buttonsUpdate].forEach((btn) => {
        btn.addEventListener('click',(e) => {
            const id = e.target.getAttribute('data-id');
            updateForm(findUserCard(id));
            formUpdate.id = id;
            showUpdate();
        } )
    });
};

function buttonsDeleteId () {
    [...buttonsDelete].forEach((btn) => {
        btn.addEventListener('click',(e) => {
            api._deleteUser(e.target.getAttribute('data-id'));
        })
    }); 
};

export { 
    deleteUser,
    showCreate, 
    showModal, 
    unShowModal, 
    showComponent, 
    buttonsUpdateId, 
    buttonsDeleteId, 
    findUserCard, 
    incPage, 
    decPage, 
    currentPage
}



















