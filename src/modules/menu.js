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

    createMenuItem("appetizer", "Breadsticks", "Sed ut perspiciatis unde omnis iste unde ", "$4.50");
    createMenuItem("appetizer", "Tacos", "Sed ut perspiciatis unde omnis iste", "$4.50");
    createMenuItem("appetizer", "Calamari", "Sed ut perspiciatis unde omnis iste", "$4.50");
    createMenuItem("appetizer", "Spring Roll", "Sed ut perspiciatis unde omnis iste unde ", "$4.50");
    createMenuItem("appetizer", "Peanuts", "Sed ut perspiciatis unde omnis iste", "$4.50");
    createMenuItem("appetizer", "An egg", "Sed ut perspiciatis unde omnis iste unde ", "$4.50");
    createMenuItem("appetizer", "Boiled Denim", "Sed ut perspiciatis unde omnis iste", "$4.50");
    createMenuItem("appetizer", "Onion Rings", "Sed ut perspiciatis unde omnis iste unde ", "$4.50");
    createMenuItem("appetizer", "Chicken Nuggets", "Sed ut perspiciatis unde omnis iste", "$4.50");

    createMenuItem("main", "Chicken Caeser Salad", "Sed ut perspiciatis unde omnis iste", "$14.50");
    createMenuItem("main", "Fried Pork Chops and Gravy", "Sed ut perspiciatis unde omnis", "$14.50");
    createMenuItem("main", "Cheese Stick", "Sed ut perspiciatis unde", "$14.50");
    createMenuItem("main", "Gyro Sandwhich", "Sed ut perspiciatis unde omnis iste", "$14.50");
    createMenuItem("main", "Spaghetti Aglio E Olio", "Sed ut perspiciatis unde omnis iste", "$14.50");
    createMenuItem("main", "Kyle's Cheeseburger", "Sed ut perspiciatis unde omnis iste", "$14.50");
    createMenuItem("main", "BLT Sandwich", "Sed ut perspiciatis unde omnis", "$14.50");
    createMenuItem("main", "Odon Noodles", "Sed ut perspiciatis unde omnis iste", "$14.50");
    createMenuItem("main", "Turkey Burger", "Sed ut perspiciatis unde", "$14.50");

    createMenuItem("drinks", "Mango Lassi", "Sed ut perspiciatis unde omnis iste", "$14.50");
    createMenuItem("drinks", "Red Wine", "Sed ut perspiciatis unde omnis iste unde ", "$14.50");
    createMenuItem("drinks", "Fancy Juice", "Sed ut perspiciatis unde omnis iste", "$14.50");
    createMenuItem("drinks", "Soda", "Sed ut perspiciatis unde omnis iste unde ", "$14.50");

    createMenuItem("dessert", "Double Chocolate Cake", "Sed ut perspiciatis unde omnis iste", "$14.50");
    createMenuItem("dessert", "Sorbet", "Sed ut perspiciatis unde omnis iste unde ", "$14.50");
    createMenuItem("dessert", "Ice Cream", "Sed ut perspiciatis unde omnis iste", "$14.50");
    createMenuItem("dessert", "M&Ms", "Sed ut perspiciatis unde omnis iste unde ", "$14.50");

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
