import type { ReactElement } from 'react'

interface WhyUsItem {
    image: string
    title: string
    description: string
}

const WhyUs = (): ReactElement => {
    const whyUsItems: WhyUsItem[] = [
        {
            image: 'complete.svg',
            title: 'Mobil Lengkap',
            description: 'Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat'
        },
        {
            image: 'price.svg',
            title: 'Harga Murah',
            description: 'Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain'
        },
        {
            image: '24_hours.svg',
            title: 'Layanan 24 Jam',
            description: 'Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu'
        },
        {
            image: 'professional.svg',
            title: 'Sopir Profesional',
            description: 'Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu'
        }
    ]

    return (
        <div>
            <div className='container mx-auto'>
                <h2 className='font-bold text-2xl leading-9 mb-4'>Why Us?</h2>
                <p className='text-sm mb-8 font-light'>Mengapa harus pilih Binar Car Rental?</p>
                <div className='flex gap-x-6'>
                    {
                        whyUsItems.map((item, index) =>
                            <div key={index} className='p-4 flex flex-col gap-y-4 border-2 rounded-lg w-1/4'>
                                <img src={`images/icons/${item.image}`} alt={item.title} title={item.title} className='w-8'/>
                                <h3 className='text-base font-bold'>{item.title}</h3>
                                <p className='font-light text-sm'>{item.description}</p>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default WhyUs
