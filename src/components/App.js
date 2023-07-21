import React, { useState } from "react";
import Header from "./Header";
import User from "./User";
import NotFound from "./NotFound"

const App = () => {
    const [userData, setUserData] = useState({});
    const [user, setUser] = useState("Abdurrehman2021-CS-44");

    const getData = async () => {
        const response = await fetch("https://api.github.com/users/"+user);
        const data = await response.json();
        setUserData(data);
        console.log(userData)
    }

    return <>
        <Header />
        <div className="search-bar">
            <input className="search-input" type="text" placeholder="Enter username" value={user} onChange={handleChange} />
            <button className="search-btn"><i className="fa-solid fa-magnifying-glass fa-xl"></i></button>
        </div>
        <User />
        <NotFound />
    </>
}

export default App;