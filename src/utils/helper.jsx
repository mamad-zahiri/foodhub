const absURL = (url) => {
    let base = import.meta.env.BASE_URL
    if (base[base.length - 1] == "/") base = base.slice(0, base.length - 1)
    return base + url
}

export { absURL }
