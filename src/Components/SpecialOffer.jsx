import { useNavigate } from "react-router-dom"

const SpecialOffer = () => {
    const navigate = useNavigate()

    return (
        <div className="bg-[url('/img/misc/special-offer-bg.webp')] bg-center bg-no-repeat bg-cover min-h-screen">
            <div className="w-full min-h-screen flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-[8px]">
                <section className="py-24 px-4 max-w-6xl mx-auto text-white">
                    <h3 className="w-full text-center md:w-1/2 md:text-left text-5xl font-bold tracking-wide font-title">
                        GET A SPECIAL OFFER FOR YOUR SPECIAL OCCASION
                    </h3>

                    <hr className="h-0.5 w-full border-yellow-500 bg-yellow-500 md:w-36 my-8" />

                    <p className="w-full text-center md:w-1/2 md:text-left mb-8">
                        Looking for a way to make your special occasion even more memorable? Look no further than our fast food restaurant!
                        For a limited time only, we're offering a special deal just for you. Get a free side dish and drink with any meal
                        purchase when you mention this offer at the register. Don't miss out on this fantastic opportunity to celebrate in
                        style!
                    </p>

                    <button
                        className="block w-fit mx-auto md:mx-0 rounded-md bg-yellow-400 p-5 py-3 text-sm text-slate-900"
                        onClick={() => navigate("/reservation")}
                    >
                        Book a Reservation
                    </button>
                </section>
            </div>
        </div>
    )
}

export default SpecialOffer
