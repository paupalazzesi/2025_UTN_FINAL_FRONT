import {createContext, useEffect, useState} from "react";
import {getMessagesByContactId} from "../services/messagesService";
import {useParams} from "react-router";
import React from "react";

export const MessagesContext = createContext({
	messages: [],
	isMessagesLoading: true,
	addNewMessage: (text) => {},
	handleDeleteMessage: (id_mensaje) => {},
	loadMessages: (contact_id) => {},    
});

const MessagesContextProvider = ({children}) => {
	const [messages, setMessages] = useState([]);
	const [isMessagesLoading, setIsMessagesLoading] = useState(true);

	const handleDeleteMessage = (id_mensaje) => {
		const listaMensajeActualizada = [];
		for (const mensaje of messages) {
			if (mensaje.id !== id_mensaje) {
				listaMensajeActualizada.push(mensaje);
			}
		}
		setMessages(listaMensajeActualizada);
	};

	const addNewMessage = (text) => {
		const new_message = {
			user: "YO",
			time: "23:13",
			text: text,
			status: "non-received",
			id: messages.length + 1,
		};
		setMessages((prevMessages) => [...prevMessages, new_message]);
	};

	const loadMessages = (contact_id) => {
		setIsMessagesLoading(true);

		setTimeout(() => {
			const messages = getMessagesByContactId(contact_id);
			setMessages(messages);
			setIsMessagesLoading(false);
		}, 1000);
	};

	// lastMessageUser: pass the user of the last message (e.g. 'YO')
	const renderMessageStatusIcon = (status, lastMessageUser) => {
		if (lastMessageUser !== 'YO') return null;
		if (status === "non-received") {
			return <i className="bi bi-check2 message_status non-received"></i>;
		}
		if (status === "not-seen") {
			return <i className="bi bi-check2-all message_status not-seen"></i>;
		}
		if (status === "seen") {
			return <i className="bi bi-check2-all message_status seen"></i>;
		}
		return null;
	};

	return (
		<MessagesContext.Provider
			value={{
				messages: messages,
				isMessagesLoading: isMessagesLoading,
				addNewMessage: addNewMessage,
				handleDeleteMessage: handleDeleteMessage,
				loadMessages: loadMessages,
				renderMessageStatusIcon: renderMessageStatusIcon,
			}}>
			{children}
		</MessagesContext.Provider>
	);
};

export default MessagesContextProvider;
