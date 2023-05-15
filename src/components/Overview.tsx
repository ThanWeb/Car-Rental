import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'

const Overview = (): ReactElement => {
    return (
        <div>
            <div>
                <h1>Sewa & Rental Mobil Terbaik di kawasan pulau Bali</h1>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <Link to='/cars'>Mulai Sewa Mobil</Link>
            </div>
            <div>
                <img src='images/landing/car.svg' alt='Binar Car Rental' title='Binar Car Rental'/>
                <div className='car-bg'/>
            </div>
        </div>
    )
}

export default Overview
