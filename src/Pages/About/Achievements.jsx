import { absURL } from "../../utils/helper"

const Achievements = () => {
    return (
        <section className="flex flex-wrap gap-y-16 gap-x-14 max-w-6xl mx-auto p-4 my-8 justify-evenly items-center text-white">
            <div className="w-52 ml-14 relative flex justify-end items-center bg-red-600 p-4 rounded-lg">
                <img
                    src={absURL("/img/about-us/achievements/cooking-hat.png")}
                    className="w-48 drop-shadow-dark-sm absolute -left-20"
                    alt="cooking hat"
                />
                <div className="text-center w-2/3">
                    <p className="font-extrabold text-4xl drop-shadow-lg">16 +</p>
                    <small className="text-md">Exprerience</small>
                </div>
            </div>

            <div className="w-52 ml-14 relative flex justify-end items-center bg-amber-500 p-4 rounded-lg">
                <img
                    src={absURL("/img/about-us/achievements/food.png")}
                    className="w-40 drop-shadow-dark-sm absolute -left-20"
                    alt="dish of food"
                />
                <div className="text-center w-2/3">
                    <p className="font-extrabold text-4xl drop-shadow-lg">90 +</p>
                    <small className="text-md">Menu Variant</small>
                </div>
            </div>

            <div className="w-52 ml-14 relative flex justify-end items-center bg-green-600 p-4 rounded-lg">
                <img
                    src={absURL("/img/about-us/achievements/kiosk.png")}
                    className="w-40 drop-shadow-dark-sm absolute -left-20"
                    alt="kiosk"
                />
                <div className="text-center w-2/3">
                    <p className="font-extrabold text-4xl drop-shadow-lg">24 +</p>
                    <small className="text-md">Restaurant Branch</small>
                </div>
            </div>
        </section>
    )
}

export default Achievements
