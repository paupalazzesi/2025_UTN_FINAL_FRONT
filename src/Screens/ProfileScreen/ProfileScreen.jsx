import React from 'react';
import { useParams, Link } from 'react-router';
import { getContactList } from '../../services/contactService';
import './ProfileScreen.scss';

export default function ProfileScreen() {
    const { contact_id } = useParams();
    const contactList = getContactList();
    const contact = contactList.find(c => String(c.id) === String(contact_id));

    if (!contact) {
        return <div className="contact-detail-container">Contacto no encontrado</div>;
    }

    return (
        <div className="contact-detail-container">
            <Link to={`/contacts/${contact.id}/messages`} style={{ alignSelf: 'flex-start', marginBottom: 12, color: '#075e54', textDecoration: 'none', fontWeight: 600 }}>
                ← Volver al chat
            </Link>
            <img src={contact.img} alt={contact.name + ' profile'} className="contact-detail-img" />
            <div className="contact-detail-name">{contact.name}</div>
            <div className="contact-detail-last-time">Últ. vez: {contact.last_time_connected}</div>
            <div className="contact-detail-info">
                <span className="contact-detail-label">Estado</span>
                Disponible
            </div>
            <div className="contact-detail-info">
                <span className="contact-detail-label">Número</span>
                +54 9 11 1234-5678
            </div>
            <div className="contact-detail-info">
                <span className="contact-detail-label">ID</span>
                {contact.id}
            </div>
        </div>
    );
}
