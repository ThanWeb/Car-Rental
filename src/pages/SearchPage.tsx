import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { asyncPopulateCars } from '../states/cars/action'
import Header from '../components/Header'
import Calendar from 'react-calendar'
import Footer from '../components/Footer'
import 'react-calendar/dist/Calendar.css'
import Overview from '../components/Overview'

const SearchPage = (): ReactElement => {
    const { cars = [] }: any = useSelector((states) => states)
    const dispatch = useDispatch()

    const [driver, setDriver] = useState<any>()
    const [date, setDate] = useState<any>()
    const [time, setTime] = useState<any>()
    const [passenger, setPassenger] = useState<any>()
    const [isCalendarShowed, setIsCalendarShowed] = useState(false)

    const changeDate = (value: any): void => {
        setDate(value)
    }

    const hoursOption = []
    for (let i = 0; i < 24; i++) {
        hoursOption.push(<option key={i} value={`${i < 10 ? `0${i}` : i}:00:00.000Z`}>{`${i < 10 ? `0${i}` : i}.00 WIB`}</option>)
    }

    useEffect(() => {
        dispatch(asyncPopulateCars())
    }, [dispatch])

    useEffect(() => {
        console.log(cars)
    }, [cars])

    return (
        <div>
            <Header />
            <Overview />
            <div>
                <div>
                    <label htmlFor='driver'>Tipe Driver</label>
                    <div>
                        <select name='driver' id='driver' defaultValue={''} value={driver} onChange={(event) => { setDriver(event.target.value) }}>
                            <option value=''>Pilih Tipe Driver</option>
                            <option value='Dengan Sopir'>Dengan Sopir</option>
                            <option value='Tanpa Sopir (Lepas Kunci)'>Tanpa Sopir (Lepas Kunci)</option>
                        </select>
                        <img src='images/icons/chevron_down_gray.svg' alt='Tipe Driver' title='Tipe Driver'/>
                    </div>
                </div>
                <div>
                    <label htmlFor='datepicker'>Tanggal</label>
                    <div>
                        <div>
                            <input id='datepicker' type='text' name='datepicker' value={date} placeholder='Pilih Tanggal' onFocus={() => { setIsCalendarShowed(true) }} onBlurCapture={() => { setIsCalendarShowed(false) }}/>
                            <div className={isCalendarShowed ? 'hidden' : ''}>
                                <Calendar onChange={(value) => { changeDate(value) }} />
                            </div>
                        </div>
                        <img src='images/icons/calendar.svg' alt='Tanggal' title='Tanggal'/>
                    </div>
                </div>
                <div>
                    <label htmlFor='time'>Waktu Jemput/Ambil</label>
                    <div>
                        <select name='time' id='time' defaultValue={''} value={time} onChange={(event) => { setTime(event.target.value) }}>
                            <option value=''>Pilih Waktu</option>
                            {hoursOption}
                        </select>
                        <img src='images/icons/clock.svg' alt='Waktu Jemput/Ambil' title='Waktu Jemput/Ambil'/>
                    </div>
                </div>
                <div>
                    <label htmlFor='passenger'>Jumlah Penumpang (optional)</label>
                    <div>
                        <input type='number' name='passenger' id='passenger' min='1' value={passenger} onChange={(event) => { setPassenger(event.target.value) }}/>
                        <img src='images/icons/users.svg' alt='Jumlah Penumpang' title='Jumlah Penumpang'/>
                    </div>
                </div>
                <div>
                    <button type='button'>Cari Mobil</button>
                </div>
            </div>
            <div className='container mx-auto flex flex-wrap gap-x-6 gap-y-7'>
                {
                    cars.map((car: any, index: number) =>
                        <div key={index} className='flex search-result-item flex-col rounded-lg overflow-hidden p-6 text-sm font-light'>
                            <img src={`./images/cars/${car.image.slice(9)}`} alt={car.model} title={car.model} className='car-image'/>
                            <p className='font-normal mt-4 mb-2'>{`${car.model}/${car.type}`}</p>
                            <p className='text-base font-bold my-2'>{`${car.rentPerDay} / hari`}</p>
                            <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className='flex gap-x-2 mb-4'>
                                <img src='images/icons/users_light.svg' alt='Jumlah Penumpang' title='Jumlah Penumpang'/>
                                <p>{`${car.capacity} orang`}</p>
                            </div>
                            <div className='flex gap-x-2 mb-4'>
                                <img src='images/icons/settings_light.svg' alt='Transmisi' title='Transmisi'/>
                                <p>{car.transmission}</p>
                            </div>
                            <div className='flex gap-x-2 mb-6'>
                                <img src='images/icons/calendar_light.svg' alt='Tahun' title='Tahun'/>
                                <p>{`Tahun ${car.year}`}</p>
                            </div>
                            <button type='button' className='btn-start w-full py-4'>Pilih Mobil</button>
                        </div>
                    )
                }
            </div>
            <Footer />
        </div>
    )
}

export default SearchPage
