import React, { useRef, useState } from "react";
import Header from "./Header";
import User from "./User";
import NotFound from "./NotFound"

const App = () => {
    const [userData, setUserData] = useState({});
    const [user, setUser] = useState("");
    const [change, setChange] = useState(false);
    const [anotherChange, setAnotherChange] = useState(false);

    const searchRef = useRef(null);

    const getData = async () => {
        const response = await fetch("https://api.github.com/users/"+user.split(" ").join(""));
        const data = await response.json();
        setUserData(data);
    }

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setUser(inputValue);
    }

    const handleClick = () => {
        if (user === ""){
            searchRef.current.focus();
            return;
        }
        getData();
        if (userData !== {}){
            setChange(true);
            // setChange(userData.message !== "Not Found");
        }
        else {
            setChange(false);
        }
        setAnotherChange(true);

        console.log(userData);
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