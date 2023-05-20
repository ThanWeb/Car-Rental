import type { ReactElement } from 'react'
import { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

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
    const testimonialItemsElement: any[] = []
    const stars: any[] = []
    const [indexCarousel, setIndexCarousel] = useState(0)

    for (let i = 0; i < 5; i++) {
        stars.push(<img key={i} src='images/icons/star.svg' alt='Star' title='Star'/>)
    }

    for (let i = 0; i < testimonialItems.length; i++) {
        testimonialItemsElement.push(
            <div key={i} className='mx-4 py-10 px-8 flex gap-x-12 testimonial-item'>
                <div className='flex items-center w-full'>
                    <img src={`images/landing/${testimonialItems[i].image}`} alt={testimonialItems[i].name} title={testimonialItems[i].name} className='w-full'/>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <div className='flex'>
                        {stars}
                    </div>
                    <div>
                        <p className='font-light text-sm mb-2'>{testimonialItems[i].testimonial}</p>
                        <span className='font-normal text-sm'>{`${testimonialItems[i].name} ${testimonialItems[i].age}, ${testimonialItems[i].address}`}</span>
                    </div>
                </div>
            </div>
        )
    }

    const responsiveCarousel = {
        0: {
            items: 3
        }
    }

    const changeCarouselIndex = (value: number): void => {
        if (value === -1) {
            if (indexCarousel === 0) {
                setIndexCarousel(2)
            } else {
                setIndexCarousel(indexCarousel + value)
            }
        } else {
            if (indexCarousel === 2) {
                setIndexCarousel(0)
            } else {
                setIndexCarousel(indexCarousel + value)
            }
        }
        // console.log(value)
    }

    return (
        <div id='testimonial' className='py-24'>
            <h2 className='text-2xl leading-9 font-bold mb-4 text-center'>Testimonial</h2>
            <p className='font-light text-sm mb-10 text-center'>Berbagai review positif dari para pelanggan kami</p>
            <div className='flex gap-x-8'>
                <AliceCarousel activeIndex={indexCarousel} mouseTracking items={testimonialItemsElement} infinite={true} responsive={responsiveCarousel} disableDotsControls={true} disableButtonsControls={true} />
            </div>
            <div className='mt-6 flex gap-x-6 w-full justify-center'>
                <button type='button' className='testimonial-btn rounded-full border flex p-1 justify-center items-center' onClick={() => { changeCarouselIndex(-1) }}>
                    <img src='images/icons/chevron_left.svg' alt='Left' title='Left' />
                </button>
                <button type='button' className='testimonial-btn rounded-full border flex p-1 justify-center items-center' onClick={() => { changeCarouselIndex(1) }}>
                    <img src='images/icons/chevron_right.svg' alt='Right' title='Right' />
                </button>
            </div>
        </div>
    )
}

export default Testimonial
