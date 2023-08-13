import { absURL } from "../utils/helper"

const Subscribe = () => {
    return (
        <section className="flex bg-yellow-500 flex-col md:flex-row justify-center items-center gap-y-16 md:justify-evenly py-16 px-10 md:px-24 gap-x-16">
            <div className="text-center md:text-left w-fit">
                <h3 className="font-title font-semibold text-[40px] tracking-wide mb-3">GET EXCLUSIVE UPDATE</h3>
                <p className="text-base text-white">Foods, Discounts, Recipes at Your Inbox!</p>
            </div>

            <form action="" className="flex grow w-full md:w-1/2 flex-wrap justify-center gap-5">
                <input type="text" className="h-14 grow rounded-lg px-5 placeholder:text-sm" placeholder="Email" />
                <button type="submit" className="h-14 bg-black text-white w-fit rounded-lg px-5 text-sm">
                    <img src={absURL("/img/misc/subscribe-icon.png")} alt="send icon" className="inline-block w-5 mr-3 align-top" />
                    Subscribe Now
                </button>
            </form>
        </section>
    )
}

export default Subscribe
