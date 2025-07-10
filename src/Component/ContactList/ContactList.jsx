import React, {useContext, useState} from "react";
import ContactItem from "../ContactItem/ContactItem";
import {ContactContext} from "../../Context/ContactContext";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import "./ContactList.scss";

const ContactsList = () => {
	const {contacts, isLoadingContacts} = useContext(ContactContext);
	const [search, setSearch] = useState("");

	if (isLoadingContacts) {
		return <LoaderSpinner />;
	}

	const filteredContacts = contacts.filter((contact) =>
		contact.name.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className="contact-list">
			<div className="contact-list_search-bar">
				<input
					type="text"
					placeholder="Search contacts..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="contact-list_search-bar_input"					
				/>
				<i
					className="bi bi-search search-icon">
                </i>
			</div>
			{filteredContacts.map((contact) => {
				return <ContactItem key={contact.id} {...contact} />;
			})}
		</div>
	);
};

export default ContactsList;
