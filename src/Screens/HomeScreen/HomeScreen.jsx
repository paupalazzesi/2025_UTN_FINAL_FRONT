import React, { useContext } from 'react'
import { ContactContext } from '../../Context/ContactContext'
import ContactsList from '../../Component/ContactList/ContactList'
import { FaWhatsapp } from 'react-icons/fa';
import './HomeScreen.scss';

export default function HomeScreen() {
    const { contacts } = useContext(ContactContext)
    return (
        <div className="home-screen">
            <header className="main-header">
                <FaWhatsapp className="main-header_logo" />
                <h1 className='main-header_title'>WhatsApp</h1>
            </header>
            <main className="contact-list-scroll">
                <ContactsList />
            </main>
        </div>
    )
}



