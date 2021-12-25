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
    header.innerText = "FOOD MENU"
    menu.append(header);


    const image = document.createElement("img");
    image.src = "./images/logo.png";
    image.alt = "logo";
    image.id = "logo2";
    header.append(image);



    createMenuColumn("appetizer", menu);
    createMenuColumn("main", menu);
    createMenuColumn("drinks", menu);
    createMenuColumn("dessert", menu);

    createMenuItem("appetizer", "Bread", "Sed ut perspiciatis unde omnis iste", "$4.50");
    createMenuItem("appetizer", "Bread", "Sed ut perspiciatis unde omnis iste", "$4.50");
    createMenuItem("appetizer", "Bread", "Sed ut perspiciatis unde omnis iste", "$4.50");
    createMenuItem("appetizer", "Bread", "Sed ut perspiciatis unde omnis iste", "$4.50");
    createMenuItem("appetizer", "Bread", "Sed ut perspiciatis unde omnis iste", "$4.50");
    createMenuItem("appetizer", "Bread", "Sed ut perspiciatis unde omnis iste", "$4.50");
    createMenuItem("appetizer", "Bread", "Sed ut perspiciatis unde omnis iste", "$4.50");
    createMenuItem("appetizer", "Bread", "Sed ut perspiciatis unde omnis iste", "$4.50");

    createMenuItem("main", "Cheese", "Sed ut perspiciatis unde omnis iste", "$14.50");
    createMenuItem("main", "Cheese", "Sed ut perspiciatis unde omnis iste", "$14.50");
    createMenuItem("main", "Cheese", "Sed ut perspiciatis unde omnis iste", "$14.50");
    createMenuItem("main", "Cheese", "Sed ut perspiciatis unde omnis iste", "$14.50");
    createMenuItem("main", "Cheese", "Sed ut perspiciatis unde omnis iste", "$14.50");
    createMenuItem("main", "Cheese", "Sed ut perspiciatis unde omnis iste", "$14.50");
    createMenuItem("main", "Cheese", "Sed ut perspiciatis unde omnis iste", "$14.50");
    createMenuItem("main", "Cheese", "Sed ut perspiciatis unde omnis iste", "$14.50");

    createMenuItem("drinks", "Water", "Sed ut perspiciatis unde omnis iste", "$14.50");
    createMenuItem("drinks", "Water", "Sed ut perspiciatis unde omnis iste", "$14.50");
    createMenuItem("drinks", "Water", "Sed ut perspiciatis unde omnis iste", "$14.50");
    createMenuItem("drinks", "Water", "Sed ut perspiciatis unde omnis iste", "$14.50");

    createMenuItem("dessert", "Cake", "Sed ut perspiciatis unde omnis iste", "$14.50");
    createMenuItem("dessert", "Cake", "Sed ut perspiciatis unde omnis iste", "$14.50");
    createMenuItem("dessert", "Cake", "Sed ut perspiciatis unde omnis iste", "$14.50");

}


const createMenuColumn = (type, menu) => {
    const menuTypeContainer = document.createElement('div');
    menuTypeContainer.id = type + "Container";
    menuTypeContainer.classList = "menuTypeContainer"
    menu.append(menuTypeContainer)

    const header = document.createElement('header');
    header.classList = "menuTypeHeader";
    header.innerText = type.toUpperCase();
    menuTypeContainer.append(header);
}


const createMenuItem = (type, name, description, price) => {
    const itemContainer = document.createElement('div');
    itemContainer.classList = "itemContainer";

    document.querySelector("#" + type + "Container").append(itemContainer)
    
    

    const itemName = document.createElement('p');
    itemName.classList = "itemName";
    itemName.innerText = name;
    itemContainer.append(itemName)

    const itemDescription = document.createElement('p');
    itemDescription.classList = "itemDescription";
    itemDescription.innerText = description;
    itemContainer.append(itemDescription)

    const itemPrice = document.createElement('p');
    itemPrice.classList = "itemPrice";
    itemPrice.innerText = price;
    itemContainer.append(itemPrice);
}





export default createMenuContent;
