import { createContext, useState } from "react";
import contacts from "./contacts";
import { v4 as uuidv4 } from 'uuid';
import getFormattedDateMMHHDDMM from "../helpers/getFormattedDate";


const ContactsConText = createContext();

const ContactsConTextProvider = ({children}) =>{
    const [contacts_state, setContactsState] = useState(contacts)

    const getContactById = (contact_id) => {
        return contacts_state.find(
            contact => contact.id === Number(contact_id)
        )
    }

    const addNewMessageToContact = (text, contact_id) => {
        const new_message = {emisor:'yo', text: text, id: uuidv4(), hora: getFormattedDateMMHHDDMM(), status: 'no-visto'}

        setContactsState(
            (prev_contact_state) => {
                const contact_found = prev_contact_state.find(contact => contact.id == contact_id)
                contact_found.mensajes_list.push(new_message)

                return [...prev_contact_state]
            }
        )
    }


    return(
        <ContactsConText.Provider value={
            {
                contacts_state: contacts_state,
                getContactById: getContactById,
                addNewMessageToContact: addNewMessageToContact
            }
            }
        >
            {children}
        </ContactsConText.Provider>
    )
}

export {ContactsConText, ContactsConTextProvider}