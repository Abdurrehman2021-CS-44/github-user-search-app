import React from "react";

const SearchBar = () => {
    return (
        <form class="search-container" onsubmit="submitForm(event)">
          <img src="./assets/icon-search.svg" class="search-icon" alt="Search icon" />
          <input
            type="text"
            class="search-input"
            placeholder="Search GitHub username..."
            name="GitHub Username"
            id="github-username"
          />
          <p class="body search-error hidden" id="search-error">No results</p>
          <p class="body search-error hidden" id="empty-field">Empty Field</p>
          <button class="btn btn-primary" type="submit">Search</button>
        </form>
    );
}

export default SearchBar;