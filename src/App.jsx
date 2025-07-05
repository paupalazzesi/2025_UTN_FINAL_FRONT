import React, { useState } from 'react'
import ContactChatScreen from './Screens/ContactChatScreen/ContactChatScreen'
import {Routes, Route} from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ProfileScreen from './Screens/ProfileScreen/ProfileScreen'
import { getContactList } from './services/contactService'
import { getMessagesByContactId } from './services/messagesService'
function App() {
	
	return (
		<div>			
			<Routes>
				<Route 
					path='/'
					element={<HomeScreen/>}
				/>
				<Route
					path='/contacts/:contact_id/messages'
					element={<ContactChatScreen/>}
				/>
				<Route
					path='/contact-detail/:contact_id'
					element={<ProfileScreen/>}
				/>				
			</Routes>
		</div>
	)
}

export default App
