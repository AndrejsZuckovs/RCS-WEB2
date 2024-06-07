document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded!");
  const banner = document.getElementById("cookie-banner");
  const acceptedButton = document.getElementById("accept-cookies");

  if (!document.cookie.includes("cookie_accepted=true")) {
    banner.classList.remove("hidden");
  } else {
    banner.classList.add("hidden");
  }

  console.log(document.cookie);

  acceptedButton.addEventListener("click", function () {
    document.cookie = "cookie_accepted=true;path=/";
    banner.classList.add("hidden");
  });
});
