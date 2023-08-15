const ReservationForm = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    const today = `${year}-${month}-${day}`

    return (
        <form action="" className="text-white flex flex-wrap justify-start w-full lg:w-1/2 p-8">
            <h4 className="w-full font-title text-3xl">reservation details</h4>

            <label className="w-full sm:w-1/2 font-bold sm:pr-2 my-2">
                Your Name <span className="text-yellow-500">*</span>
                <input type="text" className="block bg-[#151515] rounded-md font-normal text-sm p-3 w-full my-2" placeholder="Your Name" />
            </label>

            <label className="w-full sm:w-1/2 font-bold sm:pl-2 my-2">
                Email <span className="text-yellow-500">*</span>
                <input
                    type="email"
                    className="block bg-[#151515] rounded-md font-normal text-sm p-3 w-full my-2"
                    placeholder="example@domain.com"
                />
            </label>

            <label className="w-full sm:w-1/2 font-bold sm:pr-2 my-2">
                Phone <span className="text-yellow-500">*</span>
                <input type="tel" className="block bg-[#151515] rounded-md font-normal text-sm p-3 w-full my-2" placeholder="Your Number" />
            </label>

            <label className="w-full sm:w-1/2 font-bold sm:pl-2 my-2">
                Reservation Date <span className="text-yellow-500">*</span>
                <input type="date" className="block bg-[#151515] rounded-md font-normal text-sm p-3 w-full my-2" defaultValue={today} />
            </label>

            <label className="w-full font-bold my-2">
                Note <span className="text-yellow-500">*</span>
                <textarea rows={4} className="block bg-[#151515] rounded-md font-normal text-sm p-3 w-full my-2" placeholder="Your Note" />
            </label>

            <button type="submit" className="block bg-yellow-500 py-2 px-4 rounded-md">
                Book A Table
            </button>
        </form>
    )
}

export default ReservationForm
