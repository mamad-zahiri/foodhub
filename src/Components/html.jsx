const SectionFlex = (props) => {
    const { children, className } = props
    return (
        <section className={"mx-auto my-14 flex max-w-6xl flex-col items-center justify-center md:flex-row " + className}>
            {children}
        </section>
    )
}

const Hr = () => <hr className="mx-auto max-w-sm border-gray-800 md:max-w-xl lg:max-w-4xl" />

const BuyOneBtn = ({ bg, fg, href, className, children }) => (
    <a
        href={href ? href : ""}
        className={`mt-2 rounded-full px-4 py-1 text-sm
        ${bg ? bg : "bg-slate-50"} 
        ${fg ? fg : "text-gray-900"} 
        ${className ? className : ""}`}
    >
        {children ? children : "Buy One"}
    </a>
)

const paginationCurrentButton = (no, onClick = () => {}) => (
    <button onClick={onClick} className="text-yellow-500 underline underline-offset-2">
        {no}
    </button>
)

const paginationButton = (no, onClick = () => {}) => (
    <button onClick={onClick} className="hover:text-yellow-500">
        {no}
    </button>
)

const Header = ({ title, description, bgImage }) => {
    return (
        <div
            className="-z-10 w-full mb-5"
            style={{
                backgroundImage: `url('${import.meta.env.BASE_URL}${bgImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="w-full py-44 px-4 flex flex-col items-center justify-center gap-y-8 bg-gradient-to-b  from-[#000b] to-[#000000f8]">
                <h2 className="font-title text-6xl font-extrabold text-white tracking-wide">{title}</h2>
                <hr className="h-0.5 w-[100px] rounded-full border-yellow-400 bg-yellow-400" />
                <p className="text-base text-white max-w-lg text-center">{description}</p>
            </div>
        </div>
    )
}

export { SectionFlex, Hr, BuyOneBtn, paginationCurrentButton, paginationButton, Header }
