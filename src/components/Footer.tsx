import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'

const Footer = (): ReactElement => {
    return (
        <footer>
            <div>
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to='#our-services'>Our Services</Link>
                    </li>
                    <li>
                        <Link to='#why-us'>Why Us</Link>
                    </li>
                    <li>
                        <Link to='#testimonial'>Testimonial</Link>
                    </li>
                    <li>
                        <Link to='#faq'>FAQ</Link>
                    </li>
                </ul>
            </div>
            <div>
                <p>Connect with us</p>
                <div>
                    <Link to='https://www.facebook.com/' target='_blank'>
                        <img src='images/icons/facebook.svg' alt='Facebook' title='Facebook'/>
                    </Link>
                    <Link to='https://www.instagram.com/' target='_blank'>
                        <img src='images/icons/instagram.svg' alt='Instagram' title='Instagram'/>
                    </Link>
                    <Link to='https://twitter.com/' target='_blank'>
                        <img src='images/icons/twitter.svg' alt='Twitter' title='Twitter'/>
                    </Link>
                    <Link to='https://mail.google.com/mail/' target='_blank'>
                        <img src='images/icons/mail.svg' alt='Email' title='Email'/>
                    </Link>
                    <Link to='https://www.twitch.tv/' target='_blank'>
                        <img src='images/icons/twitch.svg' alt='Twitch' title='Twitch'/>
                    </Link>
                </div>
            </div>
            <div>
                <p>Copyright Binar 2022</p>
                <img src='images/logo/logo.svg' alt='Binar Car Rental Logo' title='Binar Car Rental Logo'/>
            </div>
        </footer>
    )
}

export default Footer
