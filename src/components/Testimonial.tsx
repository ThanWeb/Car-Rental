import type { ReactElement } from 'react'

interface TestimonialItem {
    name: string
    age: number
    address: string
    image: string
    testimonial: string
}

const Testimonial = (): ReactElement => {
    const testimonialItems: TestimonialItem[] = [
        {
            name: 'Jana Doe',
            age: 32,
            address: 'Bromo',
            image: 'testimonial_2.svg',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
        },
        {
            name: 'John Dee',
            age: 32,
            address: 'Bromo',
            image: 'testimonial_1.svg',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
        },
        {
            name: 'Johanna Dee',
            age: 32,
            address: 'Bromo',
            image: 'testimonial_2.svg',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
        }
    ]
    const stars: any[] = []

    for (let i = 0; i < 5; i++) {
        stars.push(<img key={i} src='images/icons/star.svg' alt='Star' title='Star'/>)
    }

    return (
        <div id='testimonial' className='py-24'>
            <h2 className='text-2xl leading-9 font-bold mb-4 text-center'>Testimonial</h2>
            <p className='font-light text-sm mb-10 text-center'>Berbagai review positif dari para pelanggan kami</p>
            <div className='flex gap-x-8'>
                {
                    testimonialItems.map((item, index) =>
                        <div key={index} className='py-10 px-8 flex gap-x-12 testimonial-item'>
                            <div className='flex items-center w-full'>
                                <img src={`images/landing/${item.image}`} alt={item.name} title={item.name} className='w-full'/>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <div className='flex'>
                                    {stars}
                                </div>
                                <div>
                                    <p className='font-light text-sm mb-2'>{item.testimonial}</p>
                                    <span className='font-normal text-sm'>{`${item.name} ${item.age}, ${item.address}`}</span>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Testimonial
