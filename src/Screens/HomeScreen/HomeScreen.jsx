import React, { useContext, useEffect } from 'react'
import Chat from '../../Component/Chat/Chat'
import NewMessageForm from '../../Component/NewMessageForm/NewMessageForm'
import { IoIosArrowBack } from "react-icons/io";
import Swal from 'sweetalert2'
import { useParams, Link } from 'react-router';
import { MessagesContext } from '../../Context/MessagesContext';
import LoaderSpinner from '../../Component/LoaderSpinner/LoaderSpinner';
import { getContactList } from '../../services/contactService';
import './HomeScreen.css';

export default function HomeScreen() {

    //Capturamos el valor de id de contacto de la URL usando la funcion useParams
    const { contact_id } = useParams()
    const { loadMessages, isMessagesLoading } = useContext(MessagesContext)

    // Obtener datos del contacto actual
    const contactList = getContactList();
    const contact = contactList.find(c => String(c.id) === String(contact_id));

    //const {contact_id} = useParams()
    //La funcion console.log se ejecute cada vez que se cambie un parametro de busqueda
    //useEffect tiene la responsabilidad de manejar la carga/recarga de funcionalidad
    //El primer parametro es una callback con la accion a repetir 
    //El segundo parametro es un array de dependencias
    //Funcionalidad: Si alguna de las dependencias actualiza su valor el efecto debera actualizarse, es decir la accion se re-ejecutara
    //Queremos que busque la lista de mensajes cada vez que el contact_id cambie, por eso nos interesa usar un efecto, ya que esta operacion se ejecutara dependiendo del cambio de cierto valor
    useEffect(
        () => {
            loadMessages(contact_id)
        },
        [contact_id]
    )

    if(isMessagesLoading){
        return <LoaderSpinner/>
    }   

    return (
        <div className="home-main-container">
            <div className="home-header">
                <Link to="/" style={{ color: 'inherit', display: 'flex', alignItems: 'center', marginRight: 12 }}>
                    <IoIosArrowBack size={28} />
                </Link>
                {contact && (
                    <>
                        <Link to={`/contact-detail/${contact.id}`} style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={contact.img} alt={contact.name + ' profile'} className="home-header-img" style={{ cursor: 'pointer' }} />
                        </Link>
                        <div className="home-header-info">
                            <span className="home-header-name">{contact.name}</span>
                            <span className="home-header-last-time">Últ. vez: {contact.last_time_connected}</span>
                        </div>
                    </>
                )}
            </div>
            <Chat />
            <NewMessageForm/>
        </div>
    )
}


