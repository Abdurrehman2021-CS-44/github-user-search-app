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
              <p>{props.bio === null? "No bio" : props.bio}</p>
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
              <p><a href="#"><i class="fa-solid fa-location-dot fa-lg"></i></a>   {props.location === null? "Not Available" : props.location}</p>
              <p><a href={props.html_url}><i class="fa-solid fa-link fa-lg"></i> Visit on github</a></p>
            </div>
            <div class="searched-user-socials">
              <p><a href="#"><i class="fa-brands fa-twitter fa-lg"></i></a>  {props.twitter_username === null? "Not Available" : props.twitter_username}</p>
              <p><a href="#"><i class="fa-solid fa-phone fa-lg"></i></a>  Not Available</p>
            </div>
          </div>
        </>
    );
}

export default User;