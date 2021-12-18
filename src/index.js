import loadPage from "./modules/page-load";
import createMenuContent from "./modules/menu"
import createContactContent from "./modules/contact"
import createHomeContent from "./modules/home"

loadPage();


document.addEventListener('click', (e) => {
    if (e.target.id.includes("Button")) {
        tabSwitch(e.target.id)
    }
})

const tabSwitch = (tab) => {
    let a = tab.replace('Button', '');
    if (a == "menu" || a == "homeMenu") {
        createMenuContent();
    } else if (a == "contact" || a == "homeContact") {
        createContactContent();
    } else {
        createHomeContent();
    }
}