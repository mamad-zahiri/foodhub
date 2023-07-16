const getImageUrl = (name) => new URL(`../assets/img/${name}`, import.meta.url).href

export { getImageUrl }
