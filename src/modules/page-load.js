const createNav = () => {
    const nav = document.createElement("nav");
    nav.id = 'navBar';
    document.querySelector("#content").append(nav);
    createHeader(nav);
    createTabButtonContainer(nav);
}

const createHeader = (nav) => {
    const header = document.createElement("header");
    header.id = "pageTitle"
    header.innerText = "KYLE'S KITCHEN";
    nav.append(header);
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
    button.id = name + "Button";
    button.innerText = name.toUpperCase();
    container.append(button);
}

const createHomeContent = () => {
    const homeContent = document.createElement("div");
    homeContent.id = "homeContent";
    document.querySelector("#content").append(homeContent);
    const title = document.createElement("header");
    title.innerText = "ENJOY FOOD FROM KYLE'S KITCHEN.";
    homeContent.append(title);
    const subTitle = document.createElement("p");
    subTitle.innerText = "We a great selection of food from all around the world. Enjoy every taste that this earth has to offer!"
    homeContent.append(subTitle);
}

const createFooter = () => {
    const footer = document.createElement("footer");
    document.querySelector("#content").append(footer);
}



function loadPage() {
    createNav();
    createHomeContent();
    createFooter();
}


export default loadPage;