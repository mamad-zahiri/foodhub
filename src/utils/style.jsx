const fadeIn = (element) => {
    element.classList.add("animate-fade-in")
    setTimeout(() => {
        element.classList.remove("animate-fade-in")
    }, 300)
}

export { fadeIn }
