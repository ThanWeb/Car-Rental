import type { ReactElement } from 'react'

interface Question {
    question: string
    answer: string
}

const FrequentlyAskQuestions = (): ReactElement => {
    const questions: Question[] = [
        {
            question: 'Apa saja syarat yang dibutuhkan?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestias inventore temporibus, labore reiciendis, quasi ducimus praesentium, tempore ullam fuga similique odit! Eaque, commodi non corrupti obcaecati repellendus officia hic.'
        },
        {
            question: 'Berapa hari minimal sewa mobil lepas kunci?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestias inventore temporibus, labore reiciendis, quasi ducimus praesentium, tempore ullam fuga similique odit! Eaque, commodi non corrupti obcaecati repellendus officia hic.'
        },
        {
            question: 'Berapa hari sebelumnya sebaiknya booking sewa mobil?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestias inventore temporibus, labore reiciendis, quasi ducimus praesentium, tempore ullam fuga similique odit! Eaque, commodi non corrupti obcaecati repellendus officia hic.'
        },
        {
            question: 'Apakah Ada biaya antar-jemput?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestias inventore temporibus, labore reiciendis, quasi ducimus praesentium, tempore ullam fuga similique odit! Eaque, commodi non corrupti obcaecati repellendus officia hic.'
        },
        {
            question: 'Bagaimana jika terjadi kecelakaan?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestias inventore temporibus, labore reiciendis, quasi ducimus praesentium, tempore ullam fuga similique odit! Eaque, commodi non corrupti obcaecati repellendus officia hic.'
        }
    ]

    return (
        <div>
            <div>
                <h2>Frequently Asked Question</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div>
                {
                    questions.map((item, index) =>
                        <div key={index}>
                            <div>
                                <p>{item.question}</p>
                                <button type='button'>
                                    <img src='images/icons/chevron_down.svg' alt='More' title='More'/>
                                    <img src='images/icons/chevron_up.svg' alt='Close' title='Close'/>
                                </button>
                            </div>
                            <div>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default FrequentlyAskQuestions
