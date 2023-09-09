import { absURL } from "../../utils/helper"

const ContactForm = () => {
    return (
        <section className="flex flex-wrap items-start max-w-6xl mx-auto">
            {/* get closer: start */}
            <div className="text-white w-full lg:w-1/2 p-8">
                <h3 className="font-title text-5xl">get closer</h3>
                <hr className="h-0.5 w-[100px] rounded-full border-yellow-400 bg-yellow-400 mt-3 mb-8" />
                <p className="mb-8">
                    Craving delicious fast food? Get closer to satisfying your hunger by contacting us online. We'll deliver your favorite
                    meals right to your doorstep!
                </p>

                <div className="flex flex-wrap mb-4">
                    <div className="w-full sm:w-1/2 min-h-full flex items-center">
                        <img src={absURL("/img/icons/map.webp")} alt="location map" className="w-10 m-6" />
                        <div>
                            <h4 className="font-title text-3xl tracking-wide">location</h4>
                            <p className="text-gray-300">JI. Pantai Kuta No. 34, Badung, Bali</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 min-h-full flex items-center">
                        <img src={absURL("/img/icons/phone.webp")} alt="phone" className="w-10 m-6" />
                        <div>
                            <h4 className="font-title text-3xl tracking-wide">phone</h4>
                            <p className="text-gray-300">+98-912-987-6543</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 min-h-full flex items-center">
                        <img src={absURL("/img/icons/envelope.webp")} alt="email" className="w-10 m-6" />
                        <div>
                            <h4 className="font-title text-3xl tracking-wide">email</h4>
                            <p className="text-gray-300">client@foodhub.com</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 min-h-full flex items-center">
                        <img src={absURL("/img/icons/clock.webp")} alt="clock" className="w-10 m-6" />
                        <div>
                            <h4 className="font-title text-3xl tracking-wide">open hour</h4>
                            <p className="text-gray-300">10:00 am - 09:00 pm</p>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-500 mb-6" />

                <div className="flex justify-between">
                    <h4 className="font-title text-3xl">our social media</h4>
                    <ul className="flex gap-x-4">
                        <li>
                            <a href="">
                                <img src={absURL("/img/icons/telegram.webp")} alt="telegram" className="inline-block w-7" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={absURL("/img/icons/instagram.webp")} alt="instagram" className="inline-block w-7" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={absURL("/img/icons/linkedin.webp")} alt="linkedin" className="inline-block w-7" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* get closer: end */}

            <form action="" className="text-white flex flex-wrap justify-start w-full lg:w-1/2 p-8">
                <h4 className="w-full font-title text-3xl">your details</h4>

                <label className="w-full sm:w-1/2 font-bold sm:pr-2 my-2">
                    Your Name <span className="text-yellow-500">*</span>
                    <input
                        type="text"
                        className="block bg-[#151515] rounded-md font-normal text-sm p-3 w-full my-2"
                        placeholder="Your Name"
                    />
                </label>

                <label className="w-full sm:w-1/2 font-bold sm:pl-2 my-2">
                    Email <span className="text-yellow-500">*</span>
                    <input
                        type="email"
                        className="block bg-[#151515] rounded-md font-normal text-sm p-3 w-full my-2"
                        placeholder="example@domain.com"
                    />
                </label>

                <label className="w-full font-bold my-2">
                    Subject <span className="text-yellow-500">*</span>
                    <input
                        type="text"
                        className="block bg-[#151515] rounded-md font-normal text-sm p-3 w-full my-2"
                        placeholder="subject"
                    />
                </label>

                <label className="w-full font-bold my-2">
                    Comment / Question <span className="text-yellow-500">*</span>
                    <textarea
                        rows={4}
                        className="block bg-[#151515] rounded-md font-normal text-sm p-3 w-full my-2"
                        placeholder="your message"
                    />
                </label>

                <button type="submit" className="block bg-yellow-500 py-2 px-4 rounded-md">
                    send message
                </button>
            </form>
        </section>
    )
}

export default ContactForm
