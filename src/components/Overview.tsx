import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'

const Overview = (): ReactElement => {
    return (
        <div className='text-sm bg-header'>
            <div className='container flex mx-auto'>
                <div className='pt-1 px-3 flex flex-col items-start justify-center w-2/4'>
                    <h1 className='font-bold text-4xl overview-heading'>Sewa & Rental Mobil Terbaik di kawasan pulau Bali</h1>
                    <p className='font-light my-4'>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    <Link to='/cars' className='btn-start px-3 py-2 font-bold'>Mulai Sewa Mobil</Link>
                </div>
                <div className='w-2/4 relative mt-4'>
                    <img src='images/landing/car.svg' alt='Binar Car Rental' title='Binar Car Rental' className='w-full relative z-10'/>
                    <div className='car-bg bg-darker-blue absolute'/>
                </div>
            </div>
        </div>
    )
}

export default Overview
