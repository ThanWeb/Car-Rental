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
        <div>
            <h2>Testimonial</h2>
            <div>
                {
                    testimonialItems.map((item, index) =>
                        <div key={index}>
                            <div>
                                <div>
                                    <img src={`images/landing/${item.image}`} alt={item.name} title={item.name}/>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span>{stars}</span>
                                </div>
                                <div>
                                    <p>{item.testimonial}</p>
                                    <span>{`${item.name} ${item.age}, ${item.address}`}</span>
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
