import { createContext, useEffect, useState } from "react";
import { getMessagesByContactId } from "../services/messagesService";
import { useParams } from "react-router";



//Creamos un contexto con la funcion createContext()
export const MessagesContext = createContext(
    {
        messages: [],
        isMessagesLoading: true, 
        addNewMessage: (text) => { },
        handleDeleteMessage: (id_mensaje) => { },
        loadMessages: (contact_id) => {}
    }
)

//children prop: es el contenido que anida mi componente MessagesContextProvider
const MessagesContextProvider = ({ children }) => {
   


    const [messages, setMessages] = useState([])
    const [isMessagesLoading, setIsMessagesLoading] = useState(true)


    const handleDeleteMessage = (id_mensaje) => {
        const listaMensajeActualizada = []
        for (const mensaje of messages) {
            if (mensaje.id !== id_mensaje) {
                listaMensajeActualizada.push(mensaje)
            }
        }
        setMessages(listaMensajeActualizada)
    }
    // Ahora addNewMessage recibe el contact_id como argumento
    const addNewMessage = (text, contact_id) => {
        //Esta funcion actualiza el estado de mensajes para agregar un nuevo mensaje
        // El mensaje se agrega al chat del contacto que se está visualizando (contact_id)
        const new_message = { user: 'YO', time: '23:13', text: text, status: 'no-recibido', id: messages.length + 1 };
        setMessages(prevMessages => [...prevMessages, new_message]);
        // Aquí podrías actualizar el mock global si fuera necesario
    }

    const loadMessages = (contact_id) => {
        //Antes de cargar pasamos el cargando a verdadero asi se muestra el loader
        setIsMessagesLoading(true)

        //Dentro de 2 segundos ocurrira esto
        setTimeout(
            () => {
                const messages = getMessagesByContactId(contact_id)
                setMessages(messages)
                setIsMessagesLoading(false)
            },
            1000
        )
        
    }

    return (
        <MessagesContext.Provider
            value={
                {
                    messages: messages,
                    isMessagesLoading: isMessagesLoading, 
                    addNewMessage: addNewMessage,
                    handleDeleteMessage: handleDeleteMessage,
                    loadMessages: loadMessages
                }
            }
        >
            {children}
        </MessagesContext.Provider>
    )
}

export default MessagesContextProvider