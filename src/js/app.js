import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://i.pinimg.com/originals/e3/b6/f0/e3b6f0bc5831cb1de05894e3117e27b8.jpg", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://i.pinimg.com/originals/9d/46/41/9d46419a53bcddc7176cc3f96de175b6.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${
    variables.background == null
      ? "https://i.pinimg.com/originals/e3/b6/f0/e3b6f0bc5831cb1de05894e3117e27b8.jpg"
      : variables.background
  }" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${
            variables.avatarURL == null
              ? "https://i.pinimg.com/originals/9d/46/41/9d46419a53bcddc7176cc3f96de175b6.jpg"
              : variables.avatarURL
          }" class="photo" />
          <h1>${variables.name == null ? "Your name" : variables.name} ${
    variables.lastname == null ? "Your last name" : variables.lastname
  }</h1>
          <h2>${variables.role == null ? "Your Role" : variables.role}</h2>
          <h3>${variables.city == null ? "Your city" : variables.city}, ${
    variables.country == null ? "Your country" : variables.country
  }</h3>
          <ul class=${variables.socialMediaPosition}
          >
            <li><a href="https://twitter.com/ ${
              variables.twitter == null ? "4geeksacademy" : variables.twitter
            }"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/${
              variables.github == null ? "4geeksacademy" : variables.github
            }"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${
              variables.linkedin == null ? "4geeksacademy" : variables.linkedin
            }"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${
              variables.instagram == null
                ? "4geeksacademy"
                : variables.instagram
            }"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background:
      "https://i.pinimg.com/originals/e3/b6/f0/e3b6f0bc5831cb1de05894e3117e27b8.jpg",
    // this is the url for the profile avatar
    avatarURL:
      "https://i.pinimg.com/originals/9d/46/41/9d46419a53bcddc7176cc3f96de175b6.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null, //
    lastname: null, //
    role: null, //
    country: null, //
    city: null //
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
