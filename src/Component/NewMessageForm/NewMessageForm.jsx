import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext'
import { useParams } from 'react-router';
import './NewMessageForm.css'

export default function NewMessageForm() {
    const { addNewMessage } = useContext(MessagesContext)
    const { contact_id } = useParams();
    const handleSubmitNewMessage = (e) => {
        e.preventDefault()
        let new_text = e.target.text.value.trim()
        if (!new_text) return;
        addNewMessage(new_text, contact_id)
        e.target.reset()
    }

    // Enviar con Enter, salto de línea con Shift+Enter
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            // Solo enviar si no está vacío
            const value = e.target.value.trim();
            if (value) {
                e.preventDefault();
                e.target.form.requestSubmit();
            } else {
                e.preventDefault();
            }
        }
    }

    return (
        <form onSubmit={handleSubmitNewMessage}>
            <div>
                <label htmlFor="text"></label>
                <textarea id='text' name='text' onKeyDown={handleKeyDown}></textarea>
            </div>
            <button type='submit'>Enviar mensaje</button>
        </form>
    )
}
