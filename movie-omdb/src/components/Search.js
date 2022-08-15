import React from "react"
import Movie from "./Movie";
import Paginate from "./Paginate";
import Filmicon from  "../Images/filmicon.png"

export default function Search (props){
    const [formData, setFormData] = React.useState(
        {
            searchTerm: "",
            page: 1

        })

        function handleChange(event, value) {
            setFormData({
                searchTerm: event.target.value,
                page: value,
              });
            }


    const searchElements = props.searchResults.length ? props.searchResults.map(res=>{
        return <Movie data={res} darkMode={props.darkMode} addToWatchlist={props.addToWatchlist} watchlist={props.watchlist}/>
    }) :


    <div className="placeholder-container">
        <p className="placeholder-text">{props.noResults ? props.noResults : "Begin searching for a movie to add"}</p>
        <img className="placeholder-img" src={Filmicon} />
    </div>

    //limit api requests by using onSubmit, don't overtax api.
    return (
        <div>
            <div className={`search-container ${props.darkMode ? "dark" : ""}`}>
            <form  onSubmit={props.handleSearch}>
                <input
                type="text"
                placeholder="Search for a movie"
                onChange={handleChange}
                name="searchTerm"
                value={formData.searchTerm}

                />
            </form>
            {searchElements}
            </div>
             {props.searchResults.length > 0 ? (
                <Paginate
                    totalResults={props.searchResults.length}
                    page={formData.page}
                    handleChange={handleChange}
                />
            ) : null}
        </div>
    )
}
