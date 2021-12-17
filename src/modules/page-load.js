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
    header.innerText = "Restaurant";
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
    button.id = name;
    button.innerText = name;
    container.append(button);
}

function loadPage() {
    createNav();
}


export default loadPage;