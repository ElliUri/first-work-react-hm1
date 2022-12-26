import React from 'react';
import { Navbar } from '../../common';
import './Header.css';

function Header() {
    return (
        <section className='header'>
            <section className='header-top'>
                <section className='header-top__logo'>
                <a href="#" className='header-logo'>LOGO</a>
                </section>
                <section className='header-top__navbar'>
                    <section className='header-top__navigation'>
                    <Navbar />
                    </section>
                  <h1 className='header-top__seperator' />
                </section>
            </section>
            <section className='header-bottom'>
                <section className='header-bottom__phone'>
                    phone number: +996702456987                </section>
                <section className='header-bottom__email'>
                    email:
                blablabla@gmail.com
                </section>
            </section>
        </section>
    )
}
// export default Header;