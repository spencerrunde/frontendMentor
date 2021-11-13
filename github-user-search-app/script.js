let profile = {
  fetchProfile: function (userName) {
    fetch("https://api.github.com/users/" + userName)
      .then((response) => response.json())
      .then((data) => this.displayProfile(data));
  },

  displayProfile: function (data) {
    //setting user information
    const {
      avatar_url,
      bio,
      blog,
      company,
      created_at,
      followers,
      following,
      location,
      login,
      name,
      public_repos,
      twitter_username,
      message,
    } = data;

    console.log(data);

    // card header scripts
    // month array for date formatting
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // fires if user profile is found
    if (message !== "Not Found") {
      // removing error message
      document.querySelector(".error-msg").style.display = "none";

      // card header styles
      document.querySelector(".avatar").src = avatar_url;
      document.querySelector("h1").innerHTML = name;
      document.querySelector(".profile-link").innerHTML = "@" + login;
      document.querySelector(".profile-link").href =
        "https://github.com/" + login;
      formatted_created_at = created_at.split("T").shift().split("-");
      document.querySelector("h2").innerHTML = `Joined ${
        formatted_created_at[2]
      } ${months[formatted_created_at[1] - 1]} ${formatted_created_at[0]}`;

      // card body scripts
      if (bio === null) {
        document.querySelector(".card-body").innerHTML =
          "This profile has no bio";
      } else {
        document.querySelector(".card-body").innerHTML = bio;
      }

      // card stats scripts
      document.querySelector(".repos span").innerHTML = public_repos;
      document.querySelector(".followers span").innerHTML = followers;
      document.querySelector(".following span").innerHTML = following;

      // card footer scripts
      function checkNull(data, className) {
        if (data === null || data == "") {
          document.querySelector(className).style.opacity = 0.5;
          return "Not Available";
        } else {
          document.querySelector(className).style.opacity = 1;
          return data;
        }
      }

      document.querySelector(".location-text").innerHTML = checkNull(
        location,
        ".location"
      );
      document.querySelector(".blog-link").innerHTML = checkNull(
        blog,
        ".website"
      );
      document.querySelector(".blog-link").href = blog;
      document.querySelector(".twitter-text").innerHTML = checkNull(
        twitter_username,
        ".twitter"
      );
      document.querySelector(".company-text").innerHTML = checkNull(
        company,
        ".company"
      );
    }

    // adding error message if user is not found
    if (message == "Not Found") {
      document.querySelector(".error-msg").style.display = "block";
    }
  },

  // search function
  search: function () {
    this.fetchProfile(document.querySelector(".search").value);
  },
};

//defaulting to octocats profile on inital load!
profile.fetchProfile("octocat");

// event listeners for search bar
// fires on search button click
document.querySelector(".search-button").addEventListener("click", function () {
  profile.search();
});

// fires on enter press
document.querySelector(".search").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    profile.search();
  }
});

// dark mode toggle function
// initial state is dark
let darkMode = true;
document.querySelector(".theme").addEventListener("click", function () {
  if (darkMode == true) {
    darkMode = false;
    document.querySelector(".theme span").innerText = "dark";
    document.querySelector(".theme img").src = "./images/icon-moon.svg";
    document.querySelector("body").classList.add("light-mode");
    console.log("Light mode toggled!");
  } else {
    darkMode = true;
    document.querySelector(".theme span").innerText = "light";
    document.querySelector(".theme img").src = "./images/icon-sun.svg";
    document.querySelector("body").classList.remove("light-mode");
    console.log("Dark mode toggled!");
  }
});
