import { Link } from "@inertiajs/inertia-react";

const Paginator = ({meta}) => {
    console.log(meta)
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return(
        <div className="btn-group">
            {prev && <Link href={prev} className="btn">«</Link>}
            <button className="btn">{current}</button>
            {next && <Link href={next} className="btn">»</Link>}
        </div>
        // <h1>knbtl</h1>
    )
}

export default Paginator
