import React from "react"
import { Link } from "react-router"
import './ContactItem.scss'
import ContactImage from "../ContactImage/ContactImage"

const ContactItem = ({name, id, last_time_connected, img, last_message, unread_messages}) => {
    
    return (
        <Link to={`/contacts/${id}/messages`} className="contact-item">            
            <ContactImage name={`${name} image profile`} img={img} />
            <div className="contact-item_content">
                <div className="contact-item_info">
                    <span className="contact-item_name">{name}</span>
                    <span className="contact-item_last-time">{last_time_connected}</span>
                </div>
                <span className="contact-item_status"></span>
                <span className="contact-item_last-message">{last_message.text}</span>
            </div>
            {unread_messages > 0 && (
                <span className="contact-item_unread">{unread_messages}</span>
            )}
        </Link>
    )
}

export default ContactItem