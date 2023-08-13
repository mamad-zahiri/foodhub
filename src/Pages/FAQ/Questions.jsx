import { useEffect, useState } from "react"
import axios from "axios"
import { absURL } from "../../utils/helper"

const Questions = () => {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        axios
            .get(absURL("/data/faq-questions.json"))
            .then((response) => {
                setQuestions(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    })

    return (
        <section className="flex flex-col flex-wrap items-center p-4 max-w-6xl mx-auto text-white mb-10">
            <h2 className="text-5xl font-title text-center">frequently asked questions</h2>

            <hr className="h-0.5 w-64 rounded-full border-yellow-400 bg-yellow-400 mt-2 mb-16" />

            <div className="flex flex-wrap gap-y-12 md:px-8 lg:px-0">
                {questions.map((item) => (
                    <div className="flex h-full items-start w-full lg:w-1/2" key={item.id}>
                        <img src={absURL("/img/icons/question.png")} alt="question mark" className="w-8 mx-4 hidden sm:block" />
                        <div className="px-3 sm:px-0">
                            <h4 className="font-title text-2xl tracking-wide mb-2">
                                <span className="text-yellow-500 sm:hidden">{item.no}. </span>
                                {item.question}
                            </h4>
                            <p className="text-gray-400 lg:pr-8">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Questions
