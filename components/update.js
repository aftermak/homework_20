const getFirstName = formUpdate.firstName;
const getLastName = formUpdate.lastName;
const getEmail = formUpdate.email;
const getJob = formUpdate.job;

import { findUserCard } from "../services/functions.js";
import { formUpdate } from "../services/variables.js";

function  updateCard (id, user) {
    const card = findUserCard(id);
    card.querySelector('.user-name').innerHTML = user.fullname;
    card.querySelector('.user-info').innerHTML = user.email;
    card.querySelector('.user-job').innerHTML = user.job;
}

function updateForm (user) {
    getFirstName.value = user.dataset.firstname;
    getLastName.value = user.dataset.lastname;
    getEmail.value = user.dataset.email;
    getJob.value = user.dataset.job;  
}

export {updateCard, updateForm};