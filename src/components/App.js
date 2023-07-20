import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import User from "./User";

const App = () => {
    return <>
        <Header />
        <main>
            <SearchBar />
            <User />
        </main>
    </>
}

export default App;