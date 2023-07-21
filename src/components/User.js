import React from "react";

const User = () => {
    return (
        <>
          <div class="searched-user">
            <div class="circle-wrapper">
              <img src="https://i.pinimg.com/236x/b4/3a/89/b43a892e3f68c50a5b7ce996aa41a1af.jpg" alt="person's image" />
            </div>
            <div class="searched-user-data">
              <h2>Person's Name</h2>
              <a href="">@username</a>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur suscipit architecto perspiciatis.</p>
            </div>
            <div class="searched-user-github-data">
              <div class="github-data">
                <p> <b> Repos </b> </p>
                <p class="data"> 09 </p>
              </div>
              <div class="github-data">
                <p> <b> Followers </b> </p>
                <p class="data"> 09 </p>
              </div>
              <div class="github-data">
                <p> <b> Following </b> </p>
                <p class="data"> 09 </p>
              </div>
            </div>
            <div class="searched-user-socials">
              <p><a href="#"><i class="fa-solid fa-location-dot fa-lg"></i></a>  [Location]</p>
              <p><a href="#"><i class="fa-solid fa-link fa-lg"></i></a>  [Link]</p>
            </div>
            <div class="searched-user-socials">
              <p><a href="#"><i class="fa-brands fa-twitter fa-lg"></i></a>  [Twitter]</p>
              <p><a href="#"><i class="fa-solid fa-phone fa-lg"></i></a>  [Link]</p>
            </div>
          </div>
        </>
    );
}

export default User;