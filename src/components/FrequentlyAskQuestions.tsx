import type { ReactElement } from 'react'
import { useState } from 'react'

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

    const [showedQuestion, setShowedQuestion] = useState(0)

    const changeShowedQuestion = (value: number): void => {
        if (showedQuestion === value) {
            setShowedQuestion(-1)
        } else {
            setShowedQuestion(value)
        }
    }

    return (
        <div className='py-24'>
            <div className='container flex mx-auto'>
                <div className='w-5/12'>
                    <h2 className='text-2xl leading-9 font-bold'>Frequently Asked Question</h2>
                    <p className='text-sm font-light mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className='w-7/12 flex flex-col gap-y-4'>
                    {
                        questions.map((item, index) =>
                            <div key={index} className='rounded border px-6 py-4 text-sm font-light'>
                                <div className='flex justify-between'>
                                    <p>{item.question}</p>
                                    <button type='button' onClick={() => { changeShowedQuestion(index) }}>
                                        <img src='images/icons/chevron_down.svg' alt='More' title='More' className={index === showedQuestion ? 'block' : 'hidden'}/>
                                        <img src='images/icons/chevron_up.svg' alt='Close' title='Close' className={index === showedQuestion ? 'hidden' : 'block'}/>
                                    </button>
                                </div>
                                <div className={`${index === showedQuestion ? 'block' : 'hidden'} mt-4`}>
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default FrequentlyAskQuestions
