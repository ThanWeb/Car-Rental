import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'

const StartRent = (): ReactElement => {
    return (
        <div>
            <h1>Sewa Mobil di Bali Sekarang</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link to='/cars'>Mulai Sewa Mobil</Link>
        </div>
    )
}

export default StartRent
