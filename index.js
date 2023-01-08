const input = document.getElementById("emailInput");
const text = document.querySelector(".footer--text");
const form = document.querySelector("form");

input.addEventListener("invalid", (event) => {
  event.preventDefault();
  input.classList.add("error");
  text.style.visibility = "visible";
});

input.addEventListener("focus", (event) => {
  event.preventDefault();
  input.classList.remove("error");
  text.style.visibility = "hidden";
});

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires" + d.toUTCString();
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
}

function getCookie(cname) {
  let name = `${cname}=`;
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie(cname, maxVisitNum) {
  let visit = getCookie(cname);

  if (visit == "") {
    setCookie(cname, 1, 1);
  } else if (+visit <= maxVisitNum && +visit >= 1) {
    +visit++;
    setCookie(cname, visit, 1);
  } else {
    return true;
  }
}

form.addEventListener("submit", checkCookie);
