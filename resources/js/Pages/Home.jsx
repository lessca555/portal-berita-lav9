import React from "react"
import { Link, Head } from "@inertiajs/inertia-react"

export default function Home(props){
    console.log(props);

    return(
        <div className="flex justify-center items-center min-h-screen
        bg-white">
            <Head title={props.title} />
            <h1>{props.description}</h1>
            <div>
                {props.news ? props.news.map((data, i) => {
                    return (
                        <div key={i} className="p-4 m-2 bg-white text-black shadow-md round-md">
                            <p className="text-2xl">{data.title}</p>
                            <p>{data.description}</p>
                            <i className="text-sm">{data.category}</i>
                            <br />
                            <i className="text-sm">{data.author}</i>
                        </div>
                    )
                }) : <p>Belum ada berita</p>}
            </div>
        </div>
    )

}
