import React from "react"
import Staricon from "../Images/staricon.png"
import Addiconblack from "../Images/addiconblack.png"
import Addiconwhite from "../Images/addiconwhite.png"

export default function Movie(props) {
    const [movieData, setMovieData] = React.useState([])
    const [inWatchlist, setInWatchlist] = React.useState(false);

    let addIcon = props.darkMode? Addiconwhite : Addiconblack;

    React.useEffect(() => {
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=ad56d582&t=${props.data}`)
            .then(res => res.json())
            .then(data => setMovieData(data))
    }, [props.data])


    let foundInWatchlist;
    //check every time if the current Movie component getting rendered is already in the watchlist
    for (let movie of props.watchlist){
        if (movie.Title === movieData.Title){
           foundInWatchlist = true;
        }
    }

    return (
        <div className="movie-card fade-in">
            <img className="movie-img" src={movieData.Poster} />
            <div className="movie-info">
                <h2 className="movie-title">{movieData.Title}</h2>
                <span className="rating-container"><img src={Staricon} className="star" />{movieData.imdbRating}</span>

                <div className="subtitle">
                    <p>{movieData.Year}</p><p>{movieData.Genre}</p>
                    {!foundInWatchlist && <button onClick={()=> props.addToWatchlist(movieData)} className="addBtn"><img src={addIcon} />ADD</button>}
                </div>
                <p>{movieData.Plot}</p>
            </div>
        </div>
    )
}
