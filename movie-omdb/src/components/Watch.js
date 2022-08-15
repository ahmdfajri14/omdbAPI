import Staricon from "../Images/staricon.png"
import Removeiconblack from "../Images/minusiconblack.png"
import Removeiconwhite from "../Images/minusiconwhite.png"
import Filmicon from  "../Images/filmicon.png"

export default function Watch (props) {

    let removeIcon = props.darkMode? Removeiconwhite : Removeiconblack;

    const watchlistElements = props.watchlist.length ? props.watchlist.map(movie=>{
        return (
            <div className="movie-card fade-in">
                <img className="movie-img" src={movie.Poster} />
                <div className="movie-info">
                    <h2 className="movie-title">{movie.Title}</h2>
                    <span className="rating-container"><img src={Staricon} className="star" />{movie.Rating}</span>

                    <div className="subtitle">
                        <p>{movie.Year}</p><p>{movie.Genre}</p>
                        <button onClick={()=>props.removeFromWatchlist(movie.Id)} className="removeBtn"><img src={removeIcon} />Remove</button>
                    </div>
                    <p>{movie.Plot}</p>
                </div>
            </div>
        )
    }) :
    <div className="placeholder-container">
        <p className="placeholder-text">No movies saved, click "Find Your Film"</p>
        <img className="placeholder-img" src={Filmicon} />
    </div>

    return (
        <div>

            <div className={`watch-container ${props.darkMode ? "dark" : ""}`}>
                {watchlistElements}
            </div>

        </div>
    )
}
