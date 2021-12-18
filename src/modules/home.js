const createHomeContent = () => {
    let content = document.querySelector("#content");
    if (content.childElementCount == 3) {
        content.children.item(1).replaceWith(homeContentContainer);
        return;
    }

    const homeContentContainer = document.createElement("div");
    homeContentContainer.id = "homeContentContainer";
    document.querySelector("#content").append(homeContentContainer);


    const homeContent = document.createElement("div");
    homeContent.id = "homeContent";
    homeContentContainer.append(homeContent);

    const title = document.createElement("header");
    title.innerText = "EXPERIENCE KYLE'S KITCHEN.";
    homeContent.append(title);
    const subTitle = document.createElement("p");
    subTitle.innerText = "ENJOY FOOD FROM ALL AROUND THE WORLD."
    homeContent.append(subTitle);

    const homeMenuButton = document.createElement("button");
    homeMenuButton.id = "homeMenuButton";
    homeMenuButton.innerText = "SEE MENU";
    homeContent.append(homeMenuButton);

    const homeAboutButton = document.createElement("button");
    homeAboutButton.id = "homeAboutButton";
    homeAboutButton.innerText = "CONTACT";
    homeContent.append(homeAboutButton);
}

export default createHomeContent;