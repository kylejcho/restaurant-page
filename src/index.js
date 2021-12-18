import loadPage from "./modules/page-load";
import createMenuContent from "./modules/menu"

loadPage();


document.addEventListener('click', (e) => {
    if (e.target.id.includes("Button")) {
        tabSwitch(e.target.id)
    }
})

const tabSwitch = (tab) => {
    let a = tab.replace('Button', '');
    if (a == "menu" || "homeMenu") {
        createMenuContent();
    } else if (a == "contact" || "homeContact") {

    } else {

    }
}