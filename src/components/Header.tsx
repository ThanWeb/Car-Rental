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
        <header className='bg-header text-sm font-normal'>
            <div className='container mx-auto flex justify-between px-3 py-4'>
                <img src='images/logo/logo.svg' alt='Binar Car Rental Logo' title='Binar Car Rental Logo'/>
                <img src='images/icons/menu.svg' alt='Menu' title='Menu' className='hidden'/>
                <div aria-label='Header Modal' className='flex items-center'>
                    <div>
                        <div className='hidden'>
                            <span>BCR</span>
                            <img src='images/icons/close.svg' alt='Close' title='Close'/>
                        </div>
                        <nav>
                            <ul className='flex items-center gap-x-8'>
                                {
                                    navItems.map((item, index) =>
                                        <li key={index} >
                                            <Link to={item.link}>{item.text}</Link>
                                        </li>
                                    )
                                }
                                <li>
                                    <button type='button' className='btn-start px-3 py-2 font-bold'>Register</button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
