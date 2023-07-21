import React from "react";

const User = (props) => {
    return (
        <>
          <div class="searched-user">
            <div class="circle-wrapper">
              <img src={props.avatar_url} alt="person's image" />
            </div>
            <div class="searched-user-data">
              <h2>{props.name}</h2>
              <a href="">@{props.login}</a>
              <p>{props.bio}</p>
            </div>
            <div class="searched-user-github-data">
              <div class="github-data">
                <p> <b> Repos </b> </p>
                <p class="data"> {props.public_repos} </p>
              </div>
              <div class="github-data">
                <p> <b> Followers </b> </p>
                <p class="data"> {props.followers} </p>
              </div>
              <div class="github-data">
                <p> <b> Following </b> </p>
                <p class="data"> {props.following} </p>
              </div>
            </div>
            <div class="searched-user-socials">
              <p><a href="#"><i class="fa-solid fa-location-dot fa-lg"></i></a>  {props.location}</p>
              <p><a href="#"><i class="fa-solid fa-link fa-lg"></i></a>  {props.html_url}</p>
            </div>
            <div class="searched-user-socials">
              <p><a href="#"><i class="fa-brands fa-twitter fa-lg"></i></a>  {props.twitter_username}</p>
              <p><a href="#"><i class="fa-solid fa-phone fa-lg"></i></a>  Null</p>
            </div>
          </div>
        </>
    );
}

export default User;