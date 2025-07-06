import React, { useContext } from 'react'
import { ContactContext } from '../../Context/ContactContext'
import ContactsList from '../../Component/ContactList/ContactList'
import { FaWhatsapp } from 'react-icons/fa';
import './HomeScreen.css';

export default function HomeScreen() {
    const { contacts } = useContext(ContactContext)
    return (
        <div className="home-screen">
            <header className="contact-header">
                <FaWhatsapp className="contact-header-icon" />
                <h1 className='header-title'>WhatsApp</h1>
            </header>
            <main className="contact-list-scroll">
                <ContactsList />
            </main>
        </div>
    )
}



