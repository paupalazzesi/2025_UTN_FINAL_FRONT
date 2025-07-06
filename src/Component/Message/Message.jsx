import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext'
import './Message.scss'

export default function Message({ user, time, id, text, status}) {
    
    const {handleDeleteMessage} = useContext(MessagesContext)  

    
    const messageClass = user === 'YO' ? 'me' : 'contact';
    
    let statusClass = 'status not-received';
    if (status === 'visto' || status === 'seen') statusClass = 'seen';
    else if (status === 'no-visto' || status === 'not-seen') statusClass = 'not-seen';

    return (
        <div className={"message " + messageClass}>
            <span className="message-text">{text}</span>
            <div className='message_data'>
                <span className="message_time">{time}</span>
                <span className={"message_status " + statusClass}></span>
            </div>
            {user === 'YO' && (
                <button className="message_btn-delete" onClick={() => { handleDeleteMessage(id) }}>
                    <i className="bi bi-trash3"></i>
                </button>
            )}
        </div>
    )
}
