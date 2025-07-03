import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext'
import './Message.css'

export default function Message({ user, time, id, text, status}) {
    
    const {handleDeleteMessage} = useContext(MessagesContext)  

    // Determinar clase principal del mensaje (msg me o msg contact)
    const messageClass = user === 'YO' ? 'msg me' : 'msg contact';
    // Determinar clase de status
    let statusClass = 'status not-received';
    if (status === 'visto' || status === 'seen') statusClass = 'status seen';
    else if (status === 'no-visto' || status === 'not-seen') statusClass = 'status not-seen';

    return (
        <div className={messageClass}>
            <span className="text">{text}</span>
            <div className='user-data'>
                <span className="time">{time}</span>
                <span className={statusClass}></span>
            </div>
            {user === 'YO' && (
                <button className="btn-delete" onClick={() => { handleDeleteMessage(id) }}>
                    <i className="bi bi-trash3"></i>
                </button>
            )}
        </div>
    )
}
