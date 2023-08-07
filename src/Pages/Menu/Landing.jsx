const Landing = () => {
    return (
        <div className="-z-10 w-full bg-[url('/img/bg/menu.jpg')] bg-cover mb-10">
            <div className="w-full pt-40 pb-28 flex flex-col items-center justify-center gap-y-8 bg-gradient-to-b  from-transparent from-0% via-[#0008] via-25% to-black to-90%">
                <h2 className="font-title text-4xl font-extrabold text-white md:text-6xl">Menu</h2>
                <hr className="h-0.5 w-[100px] rounded-full border-yellow-400 bg-yellow-400" />
                <p className="text-base text-white max-w-lg text-center">
                    Fast Food, Faster Service. Our delicious menu options make us the ultimate destination for foodies on the go.
                </p>
            </div>
        </div>
    )
}

export default Landing
