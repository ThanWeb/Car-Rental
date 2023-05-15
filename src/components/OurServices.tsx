import type { ReactElement } from 'react'

const OurServices = (): ReactElement => {
    const serviceItems: string[] = [
        'Sewa Mobil Dengan Supir di Bali 12 Jam',
        'Sewa Mobil Lepas Kunci di Bali 24 Jam',
        'Sewa Mobil Jangka Panjang Bulanan',
        'Gratis Antar - Jemput Mobil di Bandara',
        'Layanan Airport Transfer / Drop In Out'
    ]

    return (
        <div>
            <div>
                <img src='images/landing/services.svg' alt='Our Services' title='Our Services'/>
            </div>
            <div>
                <h2>Best Car Rental for any kind of trip in Bali!</h2>
                <p>Sewa mobil di Bali bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                <ul>
                    {
                        serviceItems.map((item, index) =>
                            <li key={index}>
                                <img src='images/icons/blue-check.svg' alt='Check'/>
                                <span>{item}</span>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default OurServices
