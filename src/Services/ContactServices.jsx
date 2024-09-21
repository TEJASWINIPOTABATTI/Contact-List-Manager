import axios from "axios";

export class ContactServices{
    static serverURl=`http://localhost:8000`;
    static getAllContacts(){
        let dataUrl= `${this.serverURl}/contacts`
        return axios.get(dataUrl)
    }

    static getContact(contactId){
        let dataUrl= `${this.serverURl}/contacts/${contactId}`
        return axios.get(dataUrl)
    }

    static createContact(contact){
        let dataURL=`${this.serverURl}/contacts`;
        return axios.post(dataURL,contact)
    }

    static updateContact(contact,contactId){
        let dataURL=`${this.serverURl}/contacts/${contactId}`;
        return axios.put(dataURL,contact)
    }

    static deleteContact(contactId){
        let dataUrl= `${this.serverURl}/contacts/${contactId}`;
        return axios.delete(dataUrl)
    }
}