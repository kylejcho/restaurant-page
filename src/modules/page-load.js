import createHomeContent from "./home"

const createNav = () => {
    const nav = document.createElement("nav");
    nav.id = 'navBar';
    document.querySelector("#content").append(nav);
    createHeader(nav);
    createTabButtonContainer(nav);
    
}

const createHeader = (nav) => {
    const image = document.createElement("img");
    image.src = "./images/logo.png";
    image.alt = "logo";
    image.id = "logo";
    nav.append(image);
}

const createTabButtonContainer = (nav) => {
    const container = document.createElement("div");
    container.id = "tabsContainer";
    nav.append(container);
    createTabButton("Home", container);
    createTabButton("Menu", container);
    createTabButton("Contact", container);
}

const createTabButton = (name, container) => {
    const button = document.createElement("button");
    button.id = name.toLowerCase() + "Button";
    button.innerText = name.toUpperCase();
    container.append(button);
    const homeTab = document.querySelector('#homeButton');
    homeTab.classList.add('active')
}

const createFooter = () => {
    const footer = document.createElement("footer");
    document.querySelector("#content").append(footer);

    const footerName = document.createElement('p');
    footerName.id = "footerName";
    footerName.innerText = 'Copyright © 2021 kylejcho';
    footer.append(footerName);

    const githubIcon = document.createElement('a');
    githubIcon.className = "fab fa-github";
    githubIcon.href = "https://github.com/kylejcho"
    footer.append(githubIcon);
}

function loadPage() {
    createNav();
    createHomeContent();
    createFooter();
}

export default loadPage;