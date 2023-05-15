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
            <h2>Why Us?</h2>
            <p>Mengapa harus pilih Binar Car Rental?</p>
            <div>
                {
                    whyUsItems.map((item, index) =>
                        <div key={index}>
                            <img src={`images/icons/${item.image}`} alt={item.title} title={item.title}/>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default WhyUs
