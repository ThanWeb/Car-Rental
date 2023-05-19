import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { asyncPopulateCars } from '../states/cars/action'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Overview from '../components/Overview'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const SearchPage = (): ReactElement => {
    const { cars = [] }: any = useSelector((states) => states)
    const dispatch = useDispatch()

    const [driver, setDriver] = useState<any>('Dengan Sopir')
    const [selectedDate, setDate] = useState<any>(new Date())
    const [time, setTime] = useState<any>('00:00:00.000Z')
    const [passenger, setPassenger] = useState<any>('1')

    const changeDate = (value: any): void => {
        setDate(value)
    }

    const hoursOption = []
    for (let i = 0; i < 24; i++) {
        hoursOption.push(<option key={i} value={`${i < 10 ? `0${i}` : i}:00:00.000Z`} className='font-light text-sm'>{`${i < 10 ? `0${i}` : i}.00 WITA`}</option>)
    }

    useEffect(() => {
        dispatch(asyncPopulateCars())
    }, [dispatch])

    // useEffect(() => {
    //     console.log(cars)
    //     console.log(driver, `${selectedDate.toISOString().slice(0, 11)}${time}`, cars[0]?.availableAt, passenger)
    // }, [driver, selectedDate, time, passenger])

    const filter = (cars: any[]): any[] => {
        if (driver === 'Dengan Sopir') {
            return cars.filter((car: any) => car.capacity >= passenger && car.available === true && new Date(car.availableAt) <= new Date(`${selectedDate.toISOString().slice(0, 11)}${time}`))
        } else {
            return cars.filter((car: any) => car.capacity >= passenger && car.available === false && new Date(car.availableAt) <= new Date(`${selectedDate.toISOString().slice(0, 11)}${time}`))
        }
    }

    return (
        <div>
            <Header />
            <Overview />
            <div className='container mx-auto flex search-filter z-20 relative rounded-lg bg-white p-6 gap-x-4'>
                <div className='w-1/4 font-light text-sm'>
                    <label htmlFor='driver'>Tipe Driver</label>
                    <div className='flex border px-3 py-2 justify-between mt-1'>
                        <select name='driver' id='driver' value={driver} onChange={(event) => { setDriver(event.target.value) }} className='w-full'>
                            <option className='font-light text-sm' value='Dengan Sopir'>Dengan Sopir</option>
                            <option className='font-light text-sm' value='Tanpa Sopir (Lepas Kunci)'>Tanpa Sopir (Lepas Kunci)</option>
                        </select>
                        <img src='images/icons/chevron_down_gray.svg' alt='Tipe Driver' title='Tipe Driver'/>
                    </div>
                </div>
                <div className='w-1/4 font-light text-sm'>
                    <label htmlFor='datepicker'>Tanggal</label>
                    <div className='mt-1 flex border px-3 py-2 justify-between'>
                        <DatePicker selected={selectedDate} onChange={(date: any) => { changeDate(date) }} />
                        <img src='images/icons/calendar.svg' alt='Tanggal' title='Tanggal'/>
                    </div>
                </div>
                <div className='w-1/4 font-light text-sm'>
                    <label htmlFor='time'>Waktu Jemput/Ambil</label>
                    <div className='flex border px-3 py-2 justify-between mt-1'>
                        <select name='time' id='time' value={time} onChange={(event) => { setTime(event.target.value) }} className='w-full'>
                            {hoursOption}
                        </select>
                        <img src='images/icons/clock.svg' alt='Waktu Jemput/Ambil' title='Waktu Jemput/Ambil'/>
                    </div>
                </div>
                <div className='w-1/4 font-light text-sm'>
                    <label htmlFor='passenger'>Jumlah Penumpang (optional)</label>
                    <div className='flex border px-3 py-2 justify-between mt-1'>
                        <input type='number' name='passenger' id='passenger' min='1' value={passenger} onChange={(event) => { setPassenger(event.target.value) }} placeholder='Jumlah Penumpang' className='w-full'/>
                        <img src='images/icons/users.svg' alt='Jumlah Penumpang' title='Jumlah Penumpang'/>
                    </div>
                </div>
                <div className='hidden'>
                    <button type='button'>Cari Mobil</button>
                </div>
            </div>
            <div className='search-result mt-10 container mx-auto flex flex-wrap gap-x-6 gap-y-7'>
                {
                    filter(cars).length > 0
                        ? filter(cars).map((car: any, index: number) =>
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
                        : <h2 className='text-center w-full'>Maaf tidak ada hasil pencarian</h2>
                }
            </div>
            <Footer />
        </div>
    )
}

export default SearchPage
