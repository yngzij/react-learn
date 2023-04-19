function Film(props) {
    return (
        <div className="flex flex-col">
            <img src={props.film.cover} className="rounded-lg w-full h-auto "/>
            <div className="text-white ">
                {props.film.title}
            </div>
        </div>)
}

export default Film;
