function Film(props) {
    return (
        <div className="flex flex-col">
            <img src={props.film.cover} className="h-56 w-40 rounded-lg "/>
            <div className="text-white ">
                {props.film.title}
            </div>
        </div>)
}

export default Film;
