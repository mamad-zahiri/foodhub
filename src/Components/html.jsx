const SectionFlex = (props) => {
    const { children, className } = props
    return <section className={"mx-auto flex max-w-6xl flex-col items-center justify-center md:flex-row " + className}>{children}</section>
}

const Hr = () => <hr className="mx-auto max-w-sm border-gray-800 md:max-w-xl lg:max-w-4xl" />

const ByOneBtn = (props) => (
    <a href={props.href} className={"mt-2 rounded-full bg-slate-200 px-4 py-1 text-sm text-gray-950 " + props.className}>
        {props.children ? props.children : "Buy One"}
    </a>
)

export { SectionFlex, Hr, ByOneBtn }
