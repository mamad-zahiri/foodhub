import { absURL } from "../../utils/helper"

const Info = () => {
    return (
        <div className="text-white w-full lg:w-1/2 p-8">
            <h3 className="font-title text-4xl">Reserve your table online from here</h3>
            <hr className="h-0.5 w-[100px] rounded-full border-yellow-400 bg-yellow-400 mt-3 mb-8" />
            <p className="mb-4">
                Indulge in our scrumptious fast food delights; reserve your table online here for a seamless and convenient dining
                experience!
            </p>

            <div className="flex justify-start items-start text-gray-400 gap-x-2 mb-2">
                <img src={absURL("/img/icons/check.webp")} alt="check" className="w-4" />
                <p className="text-xs">
                    Seamless Booking Experience: Our online table reservation system offers a hassle-free and efficient booking experience.
                    You can choose your preferred date, time, and table with just a few clicks. It eliminates the need for phone calls or
                    waiting in line, saving you valuable time.
                </p>
            </div>

            <div className="flex justify-start items-start text-gray-400 gap-x-2 mb-2">
                <img src={absURL("/img/icons/check.webp")} alt="check" className="w-4" />
                <p className="text-xs">
                    Real-Time Availability Check: This feature provides instant confirmation of your reservation by checking the real-time
                    availability of tables. It ensures that there are no overlaps or double bookings, providing a smooth dining experience
                    for our valued customers.
                </p>
            </div>

            <h4 className="font-title text-2xl mb-3 mt-10">contact directly</h4>

            <hr className="border-gray-500" />

            <div className="flex flex-wrap mb-3">
                <div className="w-full sm:w-1/2 min-h-full flex items-center">
                    <img src={absURL("/img/icons/phone.webp")} alt="phone" className="w-10 m-6" />
                    <div>
                        <h4 className="font-title text-2xl tracking-wide">phone</h4>
                        <p className="text-gray-300 text-sm">+98-912-987-6543</p>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 min-h-full flex items-center">
                    <img src={absURL("/img/icons/envelope.webp")} alt="email" className="w-10 m-6" />
                    <div>
                        <h4 className="font-title text-2xl tracking-wide">email</h4>
                        <p className="text-gray-300 text-sm">client@foodhub.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
