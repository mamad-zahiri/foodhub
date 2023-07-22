const SectionFlex = (props) => {
    const { children, className } = props
    return <section className={"mx-auto flex max-w-6xl flex-col items-center justify-center md:flex-row " + className}>{children}</section>
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

export { SectionFlex, Hr, BuyOneBtn }
