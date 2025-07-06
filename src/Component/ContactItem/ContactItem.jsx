import React from "react"
import { Link } from "react-router"
import './ContactItem.scss'

const ContactItem = ({name, id, last_time_connected, img, last_message, unread_messages}) => {
    
    return (
        <Link to={`/contacts/${id}/messages`} className="contact-item">
            <img src={img} alt={`${name} image profile`} className="contact-item_img" />
            <div className="contact-item_content">
                <div className="contact-item_info">
                    <span className="contact-item_name">{name}</span>
                    <span className="contact-item_last-time">{last_time_connected}</span>
                </div>
                <div className="contact-item_last-message">{last_message.text}</div>
            </div>
            {unread_messages > 0 && (
                <span className="contact-item_unread">{unread_messages}</span>
            )}
        </Link>
    )
}

export default ContactItem