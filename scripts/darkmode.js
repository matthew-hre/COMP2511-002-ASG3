// set the dark mode preference to local storage
const darkModePreference = localStorage.getItem("darkMode");

// if the dark mode preference is enabled, change the css root variables to dark mode
if (darkModePreference === "enabled") {
  // this time to avoid flicker
  darkMode();

  // this is a hack to ensure text is correct
  setTimeout(() => {
    darkMode();
  }, 1);
}

// a function to change the css root variables to dark mode
function darkMode() {
  const darkModeToggle = document.getElementById("dark-mode");

  document.documentElement.style.setProperty("--primary", "#3297fc");
  document.documentElement.style.setProperty("--secondary", "#131313");
  document.documentElement.style.setProperty(
    "--filter",
    "invert(43%) sepia(95%) saturate(1192%) hue-rotate(190deg) brightness(102%) contrast(98%)"
  );
  document.documentElement.style.setProperty(
    "--reverse-filter",
    "invert(0%) sepia(4%) saturate(2446%) hue-rotate(45deg) brightness(101%) contrast(85%)"
  );

  // save the dark mode preference to local storage
  localStorage.setItem("darkMode", "enabled");

  if (darkModeToggle) {
    darkModeToggle.innerHTML =
      "<a onclick='toggleDarkMode()' href='javascript:void(0)'>light mode</a>";
  }
}

// a function to change the css root variables to light mode
function lightMode() {
  const darkModeToggle = document.getElementById("dark-mode");

  document.documentElement.style.setProperty("--primary", "#b50603");
  document.documentElement.style.setProperty("--secondary", "#fffffe");
  document.documentElement.style.setProperty(
    "--filter",
    "invert(12%) sepia(65%) saturate(6584%) hue-rotate(5deg) brightness(85%) contrast(112%)"
  );
  document.documentElement.style.setProperty(
    "--reverse-filter",
    "invert(98%) sepia(4%) saturate(1116%) hue-rotate(337deg) brightness(109%) contrast(105%)"
  );

  // save the light mode preference to local storage
  localStorage.setItem("darkMode", null);

  if (darkModeToggle) {
    darkModeToggle.innerHTML =
      "<a onclick='toggleDarkMode()' href='javascript:void(0)'>dark mode</a>";
  }
}

function toggleDarkMode() {
  // get the dark mode preference from local storage
  const darkModePreference = localStorage.getItem("darkMode");

  // if the dark mode preference is enabled, change the css root variables to light mode
  if (darkModePreference === "enabled") {
    lightMode();
  } else {
    darkMode();
  }
}
