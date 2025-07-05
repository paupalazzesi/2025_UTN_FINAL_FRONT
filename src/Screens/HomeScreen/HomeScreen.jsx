import React, { useContext } from 'react'
import { ContactContext } from '../../Context/ContactContext'
import ContactsList from '../../Component/ContactList/ContactList'
import { FaWhatsapp } from 'react-icons/fa';
import './HomeScreen.css';

export default function HomeScreen() {
    const { contacts } = useContext(ContactContext)
    return (
        <div className="contact-screen-main">
            <div className="contact-header">
                <FaWhatsapp className="contact-header-icon" /> WhatsApp
            </div>
            <div className="contact-list-scroll">
                <ContactsList />
            </div>
        </div>
    )
}



