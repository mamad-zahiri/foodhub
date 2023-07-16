const SectionFlex = (props) => {
    const { children, className } = props
    return <section className={"mx-auto flex max-w-6xl flex-col items-center justify-center md:flex-row " + className}>{children}</section>
}

const Hr = () => <hr className="mx-auto max-w-sm border-gray-800 md:max-w-xl lg:max-w-4xl" />

export { SectionFlex, Hr }
