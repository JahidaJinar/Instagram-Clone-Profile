// Load from localStorage if available
window.onload = () => {
  document.getElementById("display-name").innerText =
    localStorage.getItem("name") || "Jahida Khanom Jinar";
  document.getElementById("display-username").innerText =
    "@" + (localStorage.getItem("username") || "jahida.jinar");
  document.getElementById("display-bio").innerText =
    localStorage.getItem("bio") || "Go where the energy flows...🌸";
  document.getElementById("profile-pic").src =
    localStorage.getItem("profilePic") || "default-profile.jpg";
};

// Load existing data
window.onload = () => {
  document.getElementById("name").value = localStorage.getItem("name") || "";
  document.getElementById("username").value =
    localStorage.getItem("username") || "";
  document.getElementById("bio").value = localStorage.getItem("bio") || "";
};

function saveChanges() {
  localStorage.setItem("name", document.getElementById("name").value);
  localStorage.setItem("username", document.getElementById("username").value);
  localStorage.setItem("bio", document.getElementById("bio").value);

  const file = document.getElementById("profilePicInput").files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      localStorage.setItem("profilePic", reader.result);
      window.location.href = "index.html";
    };
    reader.readAsDataURL(file);
  } else {
    window.location.href = "index.html";
  }
}

window.onload = () => {
  // Load user data
  document.getElementById("display-name").innerText =
    localStorage.getItem("name") || "Jahida Khanom Jinar";
  document.getElementById("display-username").innerText =
    "@" + (localStorage.getItem("username") || "jahida.jinar");
  document.getElementById("display-bio").innerText =
    localStorage.getItem("bio") || "Go where the energy flows...🌸";
  document.getElementById("profile-pic").src =
    localStorage.getItem("profilePic") || "default-profile.jpg";

  // Apply saved theme
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
  }
};

function toggleTheme() {
  document.body.classList.toggle("light-theme");
  const theme = document.body.classList.contains("light-theme")
    ? "light"
    : "dark";
  localStorage.setItem("theme", theme);
}

window.onload = () => {
  document.getElementById("name").value = localStorage.getItem("name") || "";
  document.getElementById("username").value =
    localStorage.getItem("username") || "";
  document.getElementById("bio").value = localStorage.getItem("bio") || "";

  // Load theme
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
  }
};

function saveChanges() {
  localStorage.setItem("name", document.getElementById("name").value);
  localStorage.setItem("username", document.getElementById("username").value);
  localStorage.setItem("bio", document.getElementById("bio").value);

  const file = document.getElementById("profilePicInput").files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      localStorage.setItem("profilePic", reader.result);
      window.location.href = "index.html";
    };
    reader.readAsDataURL(file);
  } else {
    window.location.href = "index.html";
  }
}

function toggleTheme() {
  document.body.classList.toggle("light-theme");
  const theme = document.body.classList.contains("light-theme")
    ? "light"
    : "dark";
  localStorage.setItem("theme", theme);
}
