import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const NewsAndArticles = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        axios
            .get(`${import.meta.env.BASE_URL}data/news.json`)
            .then((response) => setNews(response.data))
            .catch((error) => console.log(error))
    }, [])

    return (
        <section className="mx-auto my-14 flex max-w-6xl flex-col items-center justify-center gap-x-8 gap-y-8 px-4">
            <h3 className="font-title text-5xl text-white ">NEWS AND ARTICLES</h3>
            <hr className="h-0.5 w-full border-yellow-500 bg-yellow-500 md:w-[150px]" />

            <div className="flex w-full flex-wrap justify-center">
                {news.map((item) => (
                    <div className="mb-3 p-4 w-full sm:w-1/2 lg:w-1/3" key={item.id}>
                        <div className=" text-white relative h-full text-left">
                            <div
                                style={{
                                    background: `url(${import.meta.env.BASE_URL}img/${item.headerImageURL})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                }}
                                className="aspect-square mb-5 w-full rounded-md relative"
                            >
                                <div className="absolute bottom-1.5 left-0.5">
                                    {item.keywords.map((kw, index) => (
                                        <small
                                            className="inline-block rounded-full px-2 py-1 mx-0.5 font-semibold uppercase backdrop-blur-md bg-black bg-opacity-40 text-xs"
                                            key={index}
                                        >
                                            {kw}
                                        </small>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-wrap content-between justify-center">
                                <h3 className="mb-2 font-title text-3xl sm:text-2xl tracking-wide font-bold">{item.title}</h3>
                                <p className="mb-7 text-slate-400">{item.summary}</p>
                                <Link to={item.URL} className="underline underline-offset-4 block mx-auto text-sm text-yellow-500">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default NewsAndArticles
