import "./main.css";
import home from "./pages/home";
import contact from "./pages/contact";
import menu from "./pages/menu";

console.log("Restaurant page is running.");

const content = document.getElementById("content");

const headerText = document.createElement("h1");
headerText.append("Restaurant");

const main = document.createElement("main");

const nav = document.createElement("nav");

const homeLink = document.createElement("a");
homeLink.append("Home");
homeLink.addEventListener("click", () => {
  main.innerText = "";
  main.append(home);
});

const contactLink = document.createElement("a");
contactLink.append("Contact");
contactLink.addEventListener("click", () => {
  main.innerText = "";
  main.append(contact);
});

const menuLink = document.createElement("a");
menuLink.append("Menu");
menuLink.addEventListener("click", () => {
  main.innerText = "";
  main.append(menu);
});

nav.append(homeLink, contactLink, menuLink);

content.append(headerText);
content.append(nav);
content.append(main);

function onInitialPageLoad() {
  main.append(home);
}

onInitialPageLoad();
