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
        <div id='our-services'>
            <div className='container flex mx-auto gap-x-24 items-center py-24'>
                <div className='w-2/4'>
                    <img src='images/landing/services.svg' alt='Our Services' title='Our Services' className='w-full'/>
                </div>
                <div className='w-2/4'>
                    <h2 className='font-bold text-2xl leading-9'>Best Car Rental for any kind of trip in Bali!</h2>
                    <p className='tex-sm font-light mt-6 mb-4'>Sewa mobil di Bali bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                    <ul className='text-sm font-light flex flex-col gap-y-4'>
                        {
                            serviceItems.map((item, index) =>
                                <li key={index} className='flex gap-x-4'>
                                    <img src='images/icons/blue-check.svg' alt='Check'/>
                                    <span>{item}</span>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OurServices
