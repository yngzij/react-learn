import Film from "./Film";

function Hero() {
    const films = [
        {
            title: "The Shawshank Redemption",
            year: "1994",
            cover:"https://i.ytimg.com/vi/tx4jrbD7kJI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6HPcjnQ9M6q4yXyDBK8ee2IZqJQ",
            director: "Frank Darabont",
            duration: "2h 22min",
            genre: ["Crime", "Drama"],
            rate: "9.3"
        },
        {
            title: "The Shawshank Redemption",
            year: "1994",
            director: "Frank Darabont",
            duration: "2h 22min",
            cover: "https://i.ytimg.com/vi/KfcoQTA4p6A/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCLMltzNIvZorEvDERXD4O12N5Fpw",
            genre: ["Crime", "Drama"],
            rate: "9.3"
        }, {
            title: "The Shawshank Redemption",
            year: "1994",

            cover: "https://i.ytimg.com/vi/KfcoQTA4p6A/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCLMltzNIvZorEvDERXD4O12N5Fpw",
            director: "Frank Darabont",
            duration: "2h 22min",
            genre: ["Crime", "Drama"],
            rate: "9.3"
        },
        {
            title: "The Shawshank Redemption",
            year: "1994",
            cover: "https://i.ytimg.com/vi/KfcoQTA4p6A/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCLMltzNIvZorEvDERXD4O12N5Fpw",
            director: "Frank Darabont",
            duration: "2h 22min",
            genre: ["Crime", "Drama"],
            rate: "9.3"
        }, {
            title: "The Shawshank Redemption",
            year: "1994",

            cover: "https://i.ytimg.com/vi/KfcoQTA4p6A/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCLMltzNIvZorEvDERXD4O12N5Fpw",
            director: "Frank Darabont",
            duration: "2h 22min",
            genre: ["Crime", "Drama"],
            rate: "9.3"
        }, {
            title: "The Shawshank Redemption",
            year: "1994",
            cover: "https://i.ytimg.com/vi/KfcoQTA4p6A/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCLMltzNIvZorEvDERXD4O12N5Fpw",
            director: "Frank Darabont",
            duration: "2h 22min",
            genre: ["Crime", "Drama"],
            rate: "9.3"
        }, {
            title: "The Shawshank Redemption",
            year: "1994",
            cover: "https://i.ytimg.com/vi/KfcoQTA4p6A/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCLMltzNIvZorEvDERXD4O12N5Fpw",
            director: "Frank Darabont",
            duration: "2h 22min",
            genre: ["Crime", "Drama"],
            rate: "9.3"
        }, {
            title: "The Shawshank Redemption",
            year: "1994",

            cover: "https://i.ytimg.com/vi/KfcoQTA4p6A/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCLMltzNIvZorEvDERXD4O12N5Fpw",
            director: "Frank Darabont",
            duration: "2h 22min",
            genre: ["Crime", "Drama"],
            rate: "9.3"
        }, {
            title: "The Shawshank Redemption",
            year: "1994",
            cover: "https://i.ytimg.com/vi/KfcoQTA4p6A/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCLMltzNIvZorEvDERXD4O12N5Fpw",
            director: "Frank Darabont",
            duration: "2h 22min",
            genre: ["Crime", "Drama"],
            rate: "9.3"
        }, {
            title: "The Shawshank Redemption",
            year: "1994",
            cover: "https://i.ytimg.com/vi/KfcoQTA4p6A/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCLMltzNIvZorEvDERXD4O12N5Fpw",
            director: "Frank Darabont",
            duration: "2h 22min",
            genre: ["Crime", "Drama"],
            rate: "9.3"
        }, {
            title: "The Shawshank Redemption",
            year: "1994",
            cover: "https://i.ytimg.com/vi/KfcoQTA4p6A/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLCLMltzNIvZorEvDERXD4O12N5Fpw",
            director: "Frank Darabont",
            duration: "2h 22min",
            genre: ["Crime", "Drama"],
            rate: "9.3"
        }
    ];

    const items = films.map((film) => {
        return (
            <div>
                <Film film={film}>
                </Film>
            </div>
        )
    })

    return (
        <div className="flex flex-1 block ml-16 mt-10 bg-content">
            <div className="grid grid-cols-6 gap-4">
                {items}
            </div>
        </div>
    )
}

export default Hero;