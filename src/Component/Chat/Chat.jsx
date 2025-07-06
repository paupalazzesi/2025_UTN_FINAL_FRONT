import React, { useContext } from 'react'
import Message from '../Message/Message'
import { MessagesContext } from '../../Context/MessagesContext'
import './Chat.scss'

export default function Chat() {
    const {messages} = useContext(MessagesContext)
    
    return (
        <div className='message-list'>
            {
                messages.map((message) => {
                    return (
                        <Message 
                            key={message.id} 
                            {...message}
                        />
                    )
                })
            }
        </div>
    )
}
