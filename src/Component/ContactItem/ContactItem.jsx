import React from "react"
import { Link } from "react-router"
import './ContactItem.css'

const ContactItem = ({name, id, last_time_connected, img, last_message, unread_messages}) => {
    
    return (
        <Link to={`/contacts/${id}/messages`} className="contact-item-link">
            <img src={img} alt={`${name} image profile`} className="contact-item-img" />
            <div className="contact-item-content">
                <div className="contact-item-header">
                    <span className="contact-item-name">{name}</span>
                    <span className="contact-item-last-time">{last_time_connected}</span>
                </div>
                <div className="contact-item-last-message">{last_message.text}</div>
            </div>
            {unread_messages > 0 && (
                <span className="contact-item-unread">{unread_messages}</span>
            )}
        </Link>
    )
}

export default ContactItem