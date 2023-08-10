import axios from "axios"
import { useEffect, useState } from "react"

const CustomerReview = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axios
            .get("./data/review.json")
            .then((response) => setReviews(response.data))
            .catch((error) => console.log(error))
    }, [])

    return (
        <div className="bg-[#111111]">
            <section className="mx-auto flex max-w-6xl flex-col items-center justify-center md:flex-row text-white sm:flex-row flex-wrap mb-0 pb-20">
                <h3 className="w-full text-center font-title text-5xl font-bold mt-14 mb-6 px-4 tracking-wide">
                    CUSTOMER REVIEW
                    <hr className="mx-auto h-0.5 w-full border-yellow-500 bg-yellow-500 md:w-36 mt-8" />
                </h3>

                <p className="w-full text-center mb-8 px-8 text-gray-400">
                    Real Stories, Honest Feedback. Experience the Flavorful Delights Through Their Words
                </p>

                <div className="w-full flex justify-center flex-wrap">
                    {reviews.map((item) => (
                        <div className="w-full sm:max-w-[360px] p-4 mb-8" key={item.id}>
                            <div className="bg-black h-full flex flex-col justify-between p-5 pb-7 rounded-lg shadow-2xl shadow-gray-800">
                                <p className="text-base text-slate-300 mb-8">{item.review}</p>

                                <div className="flex justify-between">
                                    <div className="flex">
                                        <img className="w-14 rounded-full" src={`./img/${item.avatarURL}`} alt="" />

                                        <p className="ml-2 font-title text-lg tracking-wider">
                                            {item.authorFName} {item.authorLName}
                                            <br />
                                            <small className="font-[initial] text-sm text-gray-400">{item.designation}</small>
                                        </p>
                                    </div>
                                    <span className="justify-self-[flex-end] font-title text-9xl h-5 after:text-yellow-500 after:content-['\201D']"></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default CustomerReview
