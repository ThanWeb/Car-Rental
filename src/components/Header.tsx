import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'

interface NavItem {
    link: string
    text: string
}

const Header = (): ReactElement => {
    const navItems: NavItem[] = [
        {
            link: '/#our-services',
            text: 'Out Services'
        },
        {
            link: '/#why-us',
            text: 'Why Us'
        },
        {
            link: '/#testimonial',
            text: 'Testimonial'
        },
        {
            link: '/#faq',
            text: 'FAQ'
        }
    ]

    return (
        <header>
            <img src='images/logo/logo.svg' alt='Binar Car Rental Logo' title='Binar Car Rental Logo'/>
            <img src='images/icons/menu.svg' alt='Menu' title='Menu'/>
            <div aria-label='Header Modal'>
                <div>
                    <div>
                        <span>BCR</span>
                        <img src='images/icons/close.svg' alt='Close' title='Close'/>
                    </div>
                    <nav>
                        <ul>
                            {
                                navItems.map((item, index) =>
                                    <li key={index} >
                                        <Link to={item.link}>{item.text}</Link>
                                    </li>
                                )
                            }
                            <li>
                                <button type='button'>Register</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
