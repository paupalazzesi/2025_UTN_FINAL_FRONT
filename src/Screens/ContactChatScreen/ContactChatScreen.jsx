import React, { useContext, useEffect } from "react";
import Chat from "../../Component/Chat/Chat";
import NewMessageForm from "../../Component/NewMessageForm/NewMessageForm";
import { useParams, Link } from "react-router";
import { MessagesContext } from "../../Context/MessagesContext";
import LoaderSpinner from "../../Component/LoaderSpinner/LoaderSpinner";
import { getContactList } from "../../services/contactService";
import "./ContactChatScreen.scss";
import ContactImage from "../../Component/ContactImage/ContactImage";

export default function ContactChatScreen() {
    const { contact_id } = useParams();
    const { loadMessages, isMessagesLoading } = useContext(MessagesContext);

    const contactList = getContactList();
    const contact = contactList.find(
        (contact) => String(contact.id) === String(contact_id)
    );

    useEffect(() => {
        loadMessages(contact_id);
    }, [contact_id]);

    if (isMessagesLoading) {
        return <LoaderSpinner />;
    }

    return (
        <div className="contact-chat-screen">
            <header className="main-header">
                <Link 
                    to="/" className="main-header_back-button"
                >
                    <i class="bi bi-arrow-left"></i>
                </Link>
                <Link
                    to={`/contact-detail/${contact.id}`}
                    className="main-header_contact"
                >
                    <ContactImage
                        contact_name={contact.name}
                        img={contact.img}
                    />
                    <div className="main-header_info">
                        <h1 className="main-header_name">
                            {contact.name}
                        </h1>
                        <span className="main-header_last-time">
                            Últ. vez: {contact.last_time_connected}
                        </span>
                    </div>
                </Link>
            </header>
            <Chat />
            <NewMessageForm />
        </div>
    );
}
