import { absURL } from "../../utils/helper"

const DreamCreators = () => {
    return (
        <section className="flex flex-wrap gap-6 max-w-6xl mx-auto p-4 my-8 justify-evenly items-center text-white">
            <div className="w-full text-center">
                <h3 className="font-title text-5xl">
                    dream creators at <span className="text-yellow-500">Food</span>Hub
                </h3>
                <hr className="h-0.5 w-48 mx-auto rounded-full border-yellow-400 bg-yellow-400 mt-2 mb-6" />
                <p>Meet the brilliant creators behind the dreamy flavors that bring FoodHub's dishes to life</p>
            </div>

            <div className="relative rounded-lg overflow-hidden">
                <img src={absURL("/img/about-us/dream-creators/1.jpg")} className="w-72" alt="Michael Thompson, chef at foodhub" />
                <h6 className="absolute bottom-0 left-0 text-center text-lg bg-[#1115] w-full p-4 backdrop-blur-lg">Michael Thompson</h6>
            </div>

            <div className="relative rounded-lg overflow-hidden">
                <img src={absURL("/img/about-us/dream-creators/2.jpg")} className="w-72" alt="Somchai Thongdee, chef at foodhub" />
                <h6 className="absolute bottom-0 left-0 text-center text-lg bg-[#1115] w-full p-4 backdrop-blur-lg">Somchai Thongdee</h6>
            </div>

            <div className="relative rounded-lg overflow-hidden">
                <img src={absURL("/img/about-us/dream-creators/3.jpg")} className="w-72" alt="Marcus Antonius, chef at foodhub" />
                <h6 className="absolute bottom-0 left-0 text-center text-lg bg-[#1115] w-full p-4 backdrop-blur-lg">Marcus Antonius</h6>
            </div>
        </section>
    )
}

export default DreamCreators
