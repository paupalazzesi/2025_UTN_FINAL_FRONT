import React, {useContext, useEffect, useRef} from "react";
import Message from "../Message/Message";
import {MessagesContext} from "../../Context/MessagesContext";
import "./Chat.scss";

export default function Chat() {
	const {messages} = useContext(MessagesContext);
	const chatEndRef = useRef(null);

	useEffect(() => {
		if (chatEndRef.current) {
			chatEndRef.current.scrollIntoView({behavior: "smooth"});
		}
	}, [messages]);

	return (
		<div className="chat">
			{messages.map((message) => {
				return <Message key={message.id} {...message} />;
			})}
			<div ref={chatEndRef} />
		</div>
	);
}
