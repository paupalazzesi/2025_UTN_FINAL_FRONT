import { useParams, Link } from 'react-router';
import { getContactList } from '../../services/contactService';
import ContactImage from '../../Component/ContactImage/ContactImage'; 
import './ProfileScreen.scss';

export default function ProfileScreen() {
    const { contact_id } = useParams();
    const contactList = getContactList();
    const contact = contactList.find(contact => String(contact.id) === String(contact_id));

    if (!contact) {
        return <div className="contact-detail-container">Contacto no encontrado</div>;
    }

    return (
        <div className="contact-detail">
            <header className='main-header'>
                <Link to={`/contacts/${contact.id}/messages`} className="main-header_back-button">    
                  <i class="bi bi-arrow-left"></i>
                </Link>   
            </header>                    
            <main>
                <div className="contact-detail_main-info">
                    <ContactImage img={contact.img} contact_name={contact.name}/>
                    <h2 className="contact-detail_main-info_name">{contact.name}</h2>
                    <span className="contact-detail_main-info_phone-number">{contact.phoneNumber}</span>
                    <div className="contact-detail_main-info_last-time">Últ. vez: {contact.last_time_connected}</div>
                </div>

                <div className='contact-detail_actions'>
                    <button><i class="bi bi-telephone"></i>Call</button>
                    <button><i class="bi bi-camera-video"></i>Video</button>
                    <button><i class="bi bi-search"></i>Search</button>
                </div> 

                <div className='section'>                    
                    <p className='contact-detail_description-text'>{contact.description}</p>
                    <span>19th November 2024</span>
                </div>

                <ul className='section'>
                    <li className='section_item'>
                       <i class="bi bi-bell"></i> 
                       Notifications                        
                    </li>
                    <li className='section_item'>
                        <i class="bi bi-card-image"></i>
                        Media files visibility
                    </li>
                    <li className='section_item'>                        
                        <i class="bi bi-star"></i>
                        Starred messages
                    </li>
                                      
                </ul>               
                
            </main>
        </div>
    );
}
