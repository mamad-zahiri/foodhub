import homePageDateURL from "../../assets/json/homePage.json?url"

const Menu = () => {
    // const homePageDefaultData = JSON.parse(homePageJson)
    // console.log(homePageDefaultData)
    // console.log(homePageDateURL)
    fetch(homePageDateURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })

    return (
        <section className="mx-auto my-14 flex max-w-6xl flex-col items-center justify-center gap-x-8 gap-y-8 px-4">
            <h3 className="font-[Staatliches] text-5xl text-white ">OUR BEST MENU</h3>
            <hr className="h-0.5 w-full border-yellow-500 bg-yellow-500 md:w-[150px]" />
            <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tenetur eius quas sunt distinctio? At labore error atque
                libero accusantium.
            </p>
            <ul className="flex items-center justify-center gap-x-8 text-white [&>li]:rounded-lg [&>li]:bg-[#0f141d] [&>li]:px-8 [&>li]:py-4 [&>li]:transition-all hover:[&>li]:cursor-pointer hover:[&>li]:bg-yellow-500 hover:[&>li]:text-gray-900">
                <li>Food</li>
                <li>Snack</li>
                <li>Beverage</li>
            </ul>
        </section>
    )
}

export default Menu
