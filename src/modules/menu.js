const createMenuContent = () => {
    const menuContentContainer = document.createElement("div");
    menuContentContainer.id = "menuContentContainer";
    let content = document.querySelector("#content");
    content.children.item(1).replaceWith(menuContentContainer);

    const menu = document.createElement('div');
    menu.id = "menu";
    menuContentContainer.append(menu);

    const header= document.createElement('header');
    header.id = "menuHeader";
    header.innerText = "Menu"
    menu.append(header);
}

export default createMenuContent;
