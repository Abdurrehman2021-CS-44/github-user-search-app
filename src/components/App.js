import React from "react";
import Header from "./Header";
import User from "./User";
import NotFound from "./NotFound"

const App = () => {
    return <>
        <Header />
        <div className="search-bar">
            <input className="search-input" type="text" placeholder="Enter username" />
            <button className="search-btn"><i className="fa-solid fa-magnifying-glass fa-xl"></i></button>
        </div>
        <User />
        <NotFound />
    </>
}

export default App;