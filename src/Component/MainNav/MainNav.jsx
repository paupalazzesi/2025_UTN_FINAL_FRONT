import React from 'react'
import './MainNav.scss';
import ContactImage from '../ContactImage/ContactImage';
import images from '../../assets/images/images';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

export default function MainNav() {
  return (
    <nav className="main-nav">
        <ul className="nav-list">
          <li className="nav-list_item" aria-label='Contacts'>
            <a href="#">
              <i class="bi bi-chat-left-text"></i>
              <label htmlFor="">States</label>
            </a>
          </li>
          <li className="nav-list_item" aria-label='States'>
            <a href="#">
              <i class="bi bi-phone-vibrate"></i>
              <label htmlFor="">States</label>
            </a>
          </li>
          <li className="nav-list_item" aria-label='Contacts'>
            <a href="#">
              <i class="bi bi-people"></i>
              <label htmlFor="">Groups</label>
            </a>
          </li>
        </ul>
        <div className='user-profile'>
          <ThemeToggle />
          <ContactImage img={images.pam} name={images.pam}/>
        </div>
    </nav>
  )
}
