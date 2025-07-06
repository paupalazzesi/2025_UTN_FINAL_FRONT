import React, {useContext, useEffect} from "react";
import Chat from "../../Component/Chat/Chat";
import NewMessageForm from "../../Component/NewMessageForm/NewMessageForm";
import {useParams, Link} from "react-router";
import {MessagesContext} from "../../Context/MessagesContext";
import LoaderSpinner from "../../Component/LoaderSpinner/LoaderSpinner";
import {getContactList} from "../../services/contactService";
import "./ContactChatScreen.css";

export default function ContactChatScreen() {
    const {contact_id} = useParams();
    const {loadMessages, isMessagesLoading} = useContext(MessagesContext);

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
            <header className="home-header">
                <Link to="/" className="home-header-icon">
                    <i class="bi bi-arrow-left"></i>
                </Link>
                {contact && (
                    <>
                        <Link
                            to={`/contact-detail/${contact.id}`}
                            className="home-header-img">
                            <img
                                src={contact.img}
                                alt={contact.name + " profile"}
                                className="home-header-img"
                            />
                        </Link>
                        <div className="home-header-info">
                            <span className="home-header-name">
                                {contact.name}
                            </span>
                            <span className="home-header-last-time">
                                Últ. vez: {contact.last_time_connected}
                            </span>
                        </div>
                    </>
                )}
            </header>
            <Chat />
            <NewMessageForm />
        </div>
    );
}
