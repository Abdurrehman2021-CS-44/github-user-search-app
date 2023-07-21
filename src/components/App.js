import React, { useState } from "react";
import Header from "./Header";
import User from "./User";
import NotFound from "./NotFound"

const App = () => {
    const [userData, setUserData] = useState({});
    const [user, setUser] = useState("Abdurrehman2021-CS-44");
    const [change, setChange] = useState(false);

    const getData = async (username) => {
        const response = await fetch("https://api.github.com/users/"+username);
        const data = await response.json();
        setUserData(data);
    }

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setUser(inputValue);
        console.log(inputValue);
    }

    const handleClick = () => {
        getData(user);
        setChange(true);
        console.log(userData.name);
        console.log(userData.login);
        console.log(userData.bio);
        console.log(userData.followers);
        console.log(userData.following);
        console.log(userData.public_repos);
        console.log(userData.location);
        console.log(userData.html_url);
        console.log(userData.twitter_username);
        console.log(userData.avatar_url);
    }

    return <>
        <Header />
        <div className="search-bar">
            <input className="search-input" type="text" placeholder="Enter username" value={user} onChange={handleChange} />
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
            <NotFound />
        }
    </>
}

export default App;