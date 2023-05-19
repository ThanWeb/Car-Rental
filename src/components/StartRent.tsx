import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'

const StartRent = (): ReactElement => {
    return (
        <div>
            <div className='container p-16 text-center bg-darker-blue mx-auto text-white rounded-xl'>
                <h1 className='text-4xl font-bold mb-4'>Sewa Mobil di Bali Sekarang</h1>
                <p className='text-sm font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link to='/cars' className='btn-start px-3 py-2 font-bold mt-12 inline-block'>Mulai Sewa Mobil</Link>
            </div>
        </div>
    )
}

export default StartRent
