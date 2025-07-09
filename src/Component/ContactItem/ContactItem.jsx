import React, { useContext } from "react";
import {Link} from "react-router";
import "./ContactItem.scss";
import ContactImage from "../ContactImage/ContactImage";
import { MessagesContext } from "../../Context/MessagesContext";

const ContactItem = ({
	name,
	id,
	last_time_connected,
	img,
	last_message,
	unread_messages,
}) => {

	const { renderMessageStatusIcon } = useContext(MessagesContext);

	return (
		<Link to={`/contacts/${id}/messages`} className="contact-item">
			<ContactImage name={name} img={img} />
			<div className="contact-item_content">
				<div className="contact-item_info">
					<span className="contact-item_name">{name}</span>
					<span className="contact-item_last-time">
						{last_time_connected}
					</span>
				</div>
				<div className="contact-item_last-message">
					{renderMessageStatusIcon(last_message.status, last_message.user)}
					<span className="last-message_text">
						{last_message.text}
					</span>
				</div>
			</div>
			{unread_messages > 0 && (
				<span className="contact-item_unread">{unread_messages}</span>
			)}
		</Link>
	);
};

export default ContactItem;
