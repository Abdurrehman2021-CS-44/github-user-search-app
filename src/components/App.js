import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import User from "./User";
import NotFound from "./NotFound"

const App = () => {
    const [userData, setUserData] = useState({});
    const [user, setUser] = useState("Abdurrehman2021-CS-44");
    const [change, setChange] = useState(false);
    const [anotherChange, setAnotherChange] = useState(false);

    const searchRef = useRef(null);

    const getData = async (username) => {
        const response = await fetch("https://api.github.com/users/"+username.split(" ").join(""));
        const data = await response.json();
        setUserData(data);
    }

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setUser(inputValue);
    }

    const handleClick = (e) => {
        
        getData(user);

        setAnotherChange(true);

        if (userData.message){
            setChange(false);
        } else {
            setChange(true);
        }

        e.target.click();
    }

    return <>
        <Header />
        <div className="search-bar">
            <input className="search-input" ref={searchRef} type="text" placeholder="Enter username" value={user} onChange={handleChange} />
            <button className="search-btn" onClick={handleClick}><i className="fa-solid fa-magnifying-glass fa-xl"></i></button>
        </div>
        {
            change ?
            <User 
                name={userData.name}
                login={userData.login}
                bio={userData.bio}
                followers={userData.followers}
                following={userData.following}
                public_repos={userData.public_repos}
                location={userData.location}
                html_url={userData.html_url}
                twitter_username={userData.twitter_username}
                avatar_url={userData.avatar_url}
            />
            :
            anotherChange &&
            <NotFound />
        }
    </>
}

export default App;