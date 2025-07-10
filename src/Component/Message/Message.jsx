import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext'
import './Message.scss';
import {motion} from "framer-motion";

export default function Message({ user, time, id, text, status}) {
    
    const {handleDeleteMessage} = useContext(MessagesContext)  
    
    const messageClass = user === 'YO' ? 'me' : 'contact';
    
    let statusClass = '';
    if (user === 'YO') {
        switch (status) {
            case 'non-received':
                statusClass = 'non-received';
                break;
            case 'not-seen':
                statusClass = 'not-seen';
                break;
            default:
                statusClass = 'seen';
                break;
        }
    }

    return (
        <motion.div 
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.3, ease: "easeIn"}}
            className={"message " + messageClass} >
                {user === 'YO' && (
                    <button className="message_btn-delete" onClick={() => { handleDeleteMessage(id) }}>
                        <i className="bi bi-trash3"></i>
                    </button>
                )}
                <span className="message_text">{text}</span>
                <div className='message_data'>
                    <span className="message_time">{time}</span>
                    <span className={"message_status " + statusClass}>
                    {statusClass === 'non-received' && <i className="bi bi-check2 message_status non-received"></i>}
                    {statusClass === 'not-seen' && <i className="bi bi-check2-all message_status not-seen"></i>}
                    {statusClass === 'seen' && <i className="bi bi-check2-all message_status seen"></i>}
                    </span>
                </div>
        </motion.div>
    )
}
