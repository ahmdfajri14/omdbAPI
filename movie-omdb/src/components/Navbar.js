import React from "react"
// import Logo from "../images/logo.png"

export default function Navbar(props) {

    return (
        <nav id="nav" className={props.darkMode ? "dark" : ""}>
            <h1>{props.searching ? "Find Your Film" : "My Watchlist"}</h1>
            <h3 onClick={props.handleClick}>{props.searching ? "My Watchlist" : "Find Your Film"}</h3>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle" ></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}
