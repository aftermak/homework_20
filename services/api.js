import { addCardsList, addNewUser} from "../components/templates.js";
import { updateCard } from "../components/update.js";
import { deleteUser, incPage, decPage, currentPage } from "./functions.js";
import {  cardUserTemplate} from "./variables.js"; 

export const api = (()=>{

    const API_URL = 'https://reqres.in/api/';

    class Api {

        _getUsers (page) {
            fetch (API_URL + `users?page=${page}`)
                .then (res => res.json())
                .then (res => {
                    if(currentPage == 0) {
                        incPage();
                    }
                    if (res.data.length){
                        addCardsList(res.data, cardUserTemplate)
                    } else {
                        decPage();
                    }
                } )
        }
    
        _addUser (user) {
    
                fetch(API_URL + 'users', {
        
                    method: 'POST',
                
                    headers: {
                    'Content-Type': 'application/json'
                    },
                
                    body:JSON.stringify(user) 
    
                })
                .then (res => res.json()) 
                .then (res => addNewUser(res, cardUserTemplate));   
        }
    
        _deleteUser (id) {
            fetch(API_URL + `users/${id}`, {
        
                method: 'DELETE',
            
                headers: {
                'Content-Type': 'application/json'
                },
    
            })
            .then (res => {
                if (res.status == 204) {
                    deleteUser(id)
                } else {
                    console.log('User not found');
                }
            }) 
        }
    
        _updateUser (id, user) {
            fetch(API_URL + `users/${id}`, {
        
                method: 'PUT',
            
                headers: {
                'Content-Type': 'application/json'
                },
    
                body: JSON.stringify(user) 
            })
            .then (res => {
                if (res.status == 200) {
                    updateCard(id, user)
                } else {
                    console.log('User not found');
                }
            }) 
        }
    };
    
    return new Api;
})();





