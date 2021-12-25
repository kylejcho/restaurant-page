/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createContactContent = () => {
    const contactContentContainer = document.createElement("div");
    contactContentContainer.id = "contactContentContainer";
    let content = document.querySelector("#content");
    content.children.item(1).replaceWith(contactContentContainer);

    const contactContainerBackground = document.createElement('div');
    contactContainerBackground.id = "contactContainerBackground";
    contactContentContainer.append(contactContainerBackground);

    const contactContainer = document.createElement('div');
    contactContainer.id = "contactContainer";
    contactContainerBackground.append(contactContainer);

    const header= document.createElement('header');
    header.id = "contactHeader";
    header.innerText = "CONTACT"
    contactContainer.append(header);

    const contactMapContainer = document.createElement('div');
    contactMapContainer.id = "contactMapContainer";
    contactContainer.append(contactMapContainer);
    const a = document.createElement('p');
    a.innerText = ("KYLE'S");
    a.id = "a"
    contactMapContainer.append(a);
    const b = document.createElement('p');
    b.innerText = ("KITCHEN");
    b.id = "b"
    contactMapContainer.append(b)

    const contactInfoContainer = document.createElement('div');
    contactInfoContainer.id = "contactInfoContainer";
    contactContainer.append(contactInfoContainer);

    createContactElement("addressHeader", "KYLE'S KITCHEN");
    createContactElement("address", "66 Silver Spear St.\nIndianapolis, IN 46201");
    createContactElement("phone", "(240)-525-6834");
    createContactElement("email", "kyleskitchen@restaurant.com");

    createHoursContainer((contactInfoContainer));
}

const createContactElement = (id, content) => {
    const div = document.createElement('p');
    div.id = id;
    div.innerText = content;
    contactInfoContainer.append(div)
}

const createHoursContainer = (contactInfoContainer) => {
    const hoursContainer = document.createElement('div');
    hoursContainer.id = "hoursContainer";
    contactInfoContainer.append(hoursContainer);

    const hoursHeader = document.createElement('p');
    hoursHeader.id = "hoursHeader";
    hoursHeader.innerText = "HOURS";
    hoursContainer.append(hoursHeader);

    createHoursContent("Monday - Wednesday:", "10AM - 12PM", hoursContainer);
    createHoursContent("Thurday - Friday:", "9AM - 12PM", hoursContainer);
    createHoursContent("Saturday:", "1PM - 12PM", hoursContainer);
    createHoursContent("Sunday:", "1PM - 10PM", hoursContainer);


}

const createHoursContent = (dayRange, hourRange, hoursContainer) => {
    const hoursContentContainer = document.createElement('div');
    hoursContentContainer.id = "hoursContentContainer";
    hoursContainer.append(hoursContentContainer);

    const days = document.createElement('p');
    days.id = "days";
    days.innerText = dayRange;
    hoursContentContainer.append(days);

    const hours = document.createElement('p');
    hours.id = "hours";
    hours.innerText = hourRange;
    hoursContentContainer.append(hours);
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactContent);


/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createHomeContent = () => {

    const homeContentContainer = document.createElement("div");
    homeContentContainer.id = "homeContentContainer";
    
    let content = document.querySelector("#content");
    if (content.childElementCount == 3) {
        content.children.item(1).replaceWith(homeContentContainer);
    } else {
        document.querySelector("#content").append(homeContentContainer);
    }
    


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
    homeAboutButton.id = "homeContactButton";
    homeAboutButton.innerText = "CONTACT";
    homeContent.append(homeAboutButton);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomeContent);

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
    createMenuItem("main", "Fried Pork Chops and Gravy", "Sed ut perspiciatis unde omnis iste unde ", "$14.50");
    createMenuItem("main", "Cheese", "Sed ut perspiciatis unde omnis iste", "$14.50");
    createMenuItem("main", "Gyro Sandwhich", "Sed ut perspiciatis unde omnis iste unde ", "$14.50");
    createMenuItem("main", "Spaghetti Aglio E Olio", "Sed ut perspiciatis unde omnis iste", "$14.50");
    createMenuItem("main", "Kyle's Cheeseburger", "Sed ut perspiciatis unde omnis iste", "$14.50");
    createMenuItem("main", "BLT Sandwich", "Sed ut perspiciatis unde omnis iste unde ", "$14.50");
    createMenuItem("main", "Odon Noodles", "Sed ut perspiciatis unde omnis iste", "$14.50");
    createMenuItem("main", "Turkey Burger", "Sed ut perspiciatis unde omnis iste unde ", "$14.50");

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





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuContent);


/***/ }),

/***/ "./src/modules/page-load.js":
/*!**********************************!*\
  !*** ./src/modules/page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/modules/home.js");


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
    githubIcon.href = "https://github.com/kylejchos"
    footer.append(githubIcon);
}

function loadPage() {
    createNav();
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    createFooter();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page-load */ "./src/modules/page-load.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact */ "./src/modules/contact.js");
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");





(0,_modules_page_load__WEBPACK_IMPORTED_MODULE_0__["default"])();


document.addEventListener('click', (e) => {
    if (e.target.id.includes("Button")) {
        tabSwitch(e.target.id);
        tabHighlight(e);
    }
})

const tabSwitch = (tab) => {
    let a = tab.replace('Button', '');
    if (a == "menu" || a == "homeMenu") {
        (0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
    } else if (a == "contact" || a == "homeContact") {
        (0,_modules_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
    } else {
        (0,_modules_home__WEBPACK_IMPORTED_MODULE_3__["default"])();
    }
}

const tabHighlight = (e) => {
    let children = document.querySelector("#tabsContainer").childNodes
    children.forEach(link => link.classList.remove('active'));

    e.target.classList.add('active');
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsb0JBQW9CLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3JGcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7O0FDcENoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4R0s7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQWlCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVE7Ozs7OztVQzFEdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04yQztBQUNHO0FBQ007QUFDTjtBQUM5QztBQUNBLDhEQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFpQjtBQUN6QixNQUFNO0FBQ04sUUFBUSw0REFBb0I7QUFDNUIsTUFBTTtBQUNOLFFBQVEseURBQWlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVDb250YWN0Q29udGVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhY3RDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhY3RDb250ZW50Q29udGFpbmVyLmlkID0gXCJjb250YWN0Q29udGVudENvbnRhaW5lclwiO1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmNoaWxkcmVuLml0ZW0oMSkucmVwbGFjZVdpdGgoY29udGFjdENvbnRlbnRDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RDb250YWluZXJCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0Q29udGFpbmVyQmFja2dyb3VuZC5pZCA9IFwiY29udGFjdENvbnRhaW5lckJhY2tncm91bmRcIjtcclxuICAgIGNvbnRhY3RDb250ZW50Q29udGFpbmVyLmFwcGVuZChjb250YWN0Q29udGFpbmVyQmFja2dyb3VuZCk7XHJcblxyXG4gICAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdENvbnRhaW5lci5pZCA9IFwiY29udGFjdENvbnRhaW5lclwiO1xyXG4gICAgY29udGFjdENvbnRhaW5lckJhY2tncm91bmQuYXBwZW5kKGNvbnRhY3RDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIuaWQgPSBcImNvbnRhY3RIZWFkZXJcIjtcclxuICAgIGhlYWRlci5pbm5lclRleHQgPSBcIkNPTlRBQ1RcIlxyXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmQoaGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCBjb250YWN0TWFwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0TWFwQ29udGFpbmVyLmlkID0gXCJjb250YWN0TWFwQ29udGFpbmVyXCI7XHJcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZChjb250YWN0TWFwQ29udGFpbmVyKTtcclxuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBhLmlubmVyVGV4dCA9IChcIktZTEUnU1wiKTtcclxuICAgIGEuaWQgPSBcImFcIlxyXG4gICAgY29udGFjdE1hcENvbnRhaW5lci5hcHBlbmQoYSk7XHJcbiAgICBjb25zdCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgYi5pbm5lclRleHQgPSAoXCJLSVRDSEVOXCIpO1xyXG4gICAgYi5pZCA9IFwiYlwiXHJcbiAgICBjb250YWN0TWFwQ29udGFpbmVyLmFwcGVuZChiKVxyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0SW5mb0NvbnRhaW5lci5pZCA9IFwiY29udGFjdEluZm9Db250YWluZXJcIjtcclxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kKGNvbnRhY3RJbmZvQ29udGFpbmVyKTtcclxuXHJcbiAgICBjcmVhdGVDb250YWN0RWxlbWVudChcImFkZHJlc3NIZWFkZXJcIiwgXCJLWUxFJ1MgS0lUQ0hFTlwiKTtcclxuICAgIGNyZWF0ZUNvbnRhY3RFbGVtZW50KFwiYWRkcmVzc1wiLCBcIjY2IFNpbHZlciBTcGVhciBTdC5cXG5JbmRpYW5hcG9saXMsIElOIDQ2MjAxXCIpO1xyXG4gICAgY3JlYXRlQ29udGFjdEVsZW1lbnQoXCJwaG9uZVwiLCBcIigyNDApLTUyNS02ODM0XCIpO1xyXG4gICAgY3JlYXRlQ29udGFjdEVsZW1lbnQoXCJlbWFpbFwiLCBcImt5bGVza2l0Y2hlbkByZXN0YXVyYW50LmNvbVwiKTtcclxuXHJcbiAgICBjcmVhdGVIb3Vyc0NvbnRhaW5lcigoY29udGFjdEluZm9Db250YWluZXIpKTtcclxufVxyXG5cclxuY29uc3QgY3JlYXRlQ29udGFjdEVsZW1lbnQgPSAoaWQsIGNvbnRlbnQpID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGRpdi5pZCA9IGlkO1xyXG4gICAgZGl2LmlubmVyVGV4dCA9IGNvbnRlbnQ7XHJcbiAgICBjb250YWN0SW5mb0NvbnRhaW5lci5hcHBlbmQoZGl2KVxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVIb3Vyc0NvbnRhaW5lciA9IChjb250YWN0SW5mb0NvbnRhaW5lcikgPT4ge1xyXG4gICAgY29uc3QgaG91cnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhvdXJzQ29udGFpbmVyLmlkID0gXCJob3Vyc0NvbnRhaW5lclwiO1xyXG4gICAgY29udGFjdEluZm9Db250YWluZXIuYXBwZW5kKGhvdXJzQ29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBob3Vyc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGhvdXJzSGVhZGVyLmlkID0gXCJob3Vyc0hlYWRlclwiO1xyXG4gICAgaG91cnNIZWFkZXIuaW5uZXJUZXh0ID0gXCJIT1VSU1wiO1xyXG4gICAgaG91cnNDb250YWluZXIuYXBwZW5kKGhvdXJzSGVhZGVyKTtcclxuXHJcbiAgICBjcmVhdGVIb3Vyc0NvbnRlbnQoXCJNb25kYXkgLSBXZWRuZXNkYXk6XCIsIFwiMTBBTSAtIDEyUE1cIiwgaG91cnNDb250YWluZXIpO1xyXG4gICAgY3JlYXRlSG91cnNDb250ZW50KFwiVGh1cmRheSAtIEZyaWRheTpcIiwgXCI5QU0gLSAxMlBNXCIsIGhvdXJzQ29udGFpbmVyKTtcclxuICAgIGNyZWF0ZUhvdXJzQ29udGVudChcIlNhdHVyZGF5OlwiLCBcIjFQTSAtIDEyUE1cIiwgaG91cnNDb250YWluZXIpO1xyXG4gICAgY3JlYXRlSG91cnNDb250ZW50KFwiU3VuZGF5OlwiLCBcIjFQTSAtIDEwUE1cIiwgaG91cnNDb250YWluZXIpO1xyXG5cclxuXHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUhvdXJzQ29udGVudCA9IChkYXlSYW5nZSwgaG91clJhbmdlLCBob3Vyc0NvbnRhaW5lcikgPT4ge1xyXG4gICAgY29uc3QgaG91cnNDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBob3Vyc0NvbnRlbnRDb250YWluZXIuaWQgPSBcImhvdXJzQ29udGVudENvbnRhaW5lclwiO1xyXG4gICAgaG91cnNDb250YWluZXIuYXBwZW5kKGhvdXJzQ29udGVudENvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgZGF5cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGRheXMuaWQgPSBcImRheXNcIjtcclxuICAgIGRheXMuaW5uZXJUZXh0ID0gZGF5UmFuZ2U7XHJcbiAgICBob3Vyc0NvbnRlbnRDb250YWluZXIuYXBwZW5kKGRheXMpO1xyXG5cclxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaG91cnMuaWQgPSBcImhvdXJzXCI7XHJcbiAgICBob3Vycy5pbm5lclRleHQgPSBob3VyUmFuZ2U7XHJcbiAgICBob3Vyc0NvbnRlbnRDb250YWluZXIuYXBwZW5kKGhvdXJzKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhY3RDb250ZW50O1xyXG4iLCJjb25zdCBjcmVhdGVIb21lQ29udGVudCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBob21lQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBob21lQ29udGVudENvbnRhaW5lci5pZCA9IFwiaG9tZUNvbnRlbnRDb250YWluZXJcIjtcclxuICAgIFxyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgICBpZiAoY29udGVudC5jaGlsZEVsZW1lbnRDb3VudCA9PSAzKSB7XHJcbiAgICAgICAgY29udGVudC5jaGlsZHJlbi5pdGVtKDEpLnJlcGxhY2VXaXRoKGhvbWVDb250ZW50Q29udGFpbmVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFwcGVuZChob21lQ29udGVudENvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcblxyXG4gICAgY29uc3QgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaG9tZUNvbnRlbnQuaWQgPSBcImhvbWVDb250ZW50XCI7XHJcbiAgICBob21lQ29udGVudENvbnRhaW5lci5hcHBlbmQoaG9tZUNvbnRlbnQpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiRVhQRVJJRU5DRSBLWUxFJ1MgS0lUQ0hFTi5cIjtcclxuICAgIGhvbWVDb250ZW50LmFwcGVuZCh0aXRsZSk7XHJcbiAgICBjb25zdCBzdWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgc3ViVGl0bGUuaW5uZXJUZXh0ID0gXCJFTkpPWSBGT09EIEZST00gQUxMIEFST1VORCBUSEUgV09STEQuXCJcclxuICAgIGhvbWVDb250ZW50LmFwcGVuZChzdWJUaXRsZSk7XHJcblxyXG4gICAgY29uc3QgaG9tZU1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgaG9tZU1lbnVCdXR0b24uaWQgPSBcImhvbWVNZW51QnV0dG9uXCI7XHJcbiAgICBob21lTWVudUJ1dHRvbi5pbm5lclRleHQgPSBcIlNFRSBNRU5VXCI7XHJcbiAgICBob21lQ29udGVudC5hcHBlbmQoaG9tZU1lbnVCdXR0b24pO1xyXG5cclxuICAgIGNvbnN0IGhvbWVBYm91dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBob21lQWJvdXRCdXR0b24uaWQgPSBcImhvbWVDb250YWN0QnV0dG9uXCI7XHJcbiAgICBob21lQWJvdXRCdXR0b24uaW5uZXJUZXh0ID0gXCJDT05UQUNUXCI7XHJcbiAgICBob21lQ29udGVudC5hcHBlbmQoaG9tZUFib3V0QnV0dG9uKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZUNvbnRlbnQ7IiwiY29uc3QgY3JlYXRlTWVudUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtZW51Q29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZW51Q29udGVudENvbnRhaW5lci5pZCA9IFwibWVudUNvbnRlbnRDb250YWluZXJcIjtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgY29udGVudC5jaGlsZHJlbi5pdGVtKDEpLnJlcGxhY2VXaXRoKG1lbnVDb250ZW50Q29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51LmlkID0gXCJtZW51XCI7XHJcbiAgICBtZW51Q29udGVudENvbnRhaW5lci5hcHBlbmQobWVudSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGhlYWRlcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIuaWQgPSBcIm1lbnVIZWFkZXJcIjtcclxuICAgIGhlYWRlci5pbm5lclRleHQgPSBcIkZPT0QgTUVOVVwiXHJcbiAgICBtZW51LmFwcGVuZChoZWFkZXIpO1xyXG5cclxuXHJcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBpbWFnZS5zcmMgPSBcIi4vaW1hZ2VzL2xvZ28ucG5nXCI7XHJcbiAgICBpbWFnZS5hbHQgPSBcImxvZ29cIjtcclxuICAgIGltYWdlLmlkID0gXCJsb2dvMlwiO1xyXG4gICAgaGVhZGVyLmFwcGVuZChpbWFnZSk7XHJcblxyXG5cclxuXHJcbiAgICBjcmVhdGVNZW51Q29sdW1uKFwiYXBwZXRpemVyXCIsIG1lbnUpO1xyXG4gICAgY3JlYXRlTWVudUNvbHVtbihcIm1haW5cIiwgbWVudSk7XHJcbiAgICBjcmVhdGVNZW51Q29sdW1uKFwiZHJpbmtzXCIsIG1lbnUpO1xyXG4gICAgY3JlYXRlTWVudUNvbHVtbihcImRlc3NlcnRcIiwgbWVudSk7XHJcblxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJhcHBldGl6ZXJcIiwgXCJCcmVhZHN0aWNrc1wiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIHVuZGUgXCIsIFwiJDQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImFwcGV0aXplclwiLCBcIlRhY29zXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGVcIiwgXCIkNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiYXBwZXRpemVyXCIsIFwiQ2FsYW1hcmlcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZVwiLCBcIiQ0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJhcHBldGl6ZXJcIiwgXCJTcHJpbmcgUm9sbFwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIHVuZGUgXCIsIFwiJDQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImFwcGV0aXplclwiLCBcIlBlYW51dHNcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZVwiLCBcIiQ0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJhcHBldGl6ZXJcIiwgXCJBbiBlZ2dcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSB1bmRlIFwiLCBcIiQ0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJhcHBldGl6ZXJcIiwgXCJCb2lsZWQgRGVuaW1cIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZVwiLCBcIiQ0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJhcHBldGl6ZXJcIiwgXCJPbmlvbiBSaW5nc1wiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIHVuZGUgXCIsIFwiJDQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImFwcGV0aXplclwiLCBcIkNoaWNrZW4gTnVnZ2V0c1wiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlXCIsIFwiJDQuNTBcIik7XHJcblxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJtYWluXCIsIFwiQ2hpY2tlbiBDYWVzZXIgU2FsYWRcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZVwiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwibWFpblwiLCBcIkZyaWVkIFBvcmsgQ2hvcHMgYW5kIEdyYXZ5XCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgdW5kZSBcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIm1haW5cIiwgXCJDaGVlc2VcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZVwiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwibWFpblwiLCBcIkd5cm8gU2FuZHdoaWNoXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgdW5kZSBcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIm1haW5cIiwgXCJTcGFnaGV0dGkgQWdsaW8gRSBPbGlvXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGVcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIm1haW5cIiwgXCJLeWxlJ3MgQ2hlZXNlYnVyZ2VyXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGVcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIm1haW5cIiwgXCJCTFQgU2FuZHdpY2hcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSB1bmRlIFwiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwibWFpblwiLCBcIk9kb24gTm9vZGxlc1wiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJtYWluXCIsIFwiVHVya2V5IEJ1cmdlclwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIHVuZGUgXCIsIFwiJDE0LjUwXCIpO1xyXG5cclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiZHJpbmtzXCIsIFwiTWFuZ28gTGFzc2lcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZVwiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiZHJpbmtzXCIsIFwiUmVkIFdpbmVcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSB1bmRlIFwiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiZHJpbmtzXCIsIFwiRmFuY3kgSnVpY2VcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZVwiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiZHJpbmtzXCIsIFwiU29kYVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIHVuZGUgXCIsIFwiJDE0LjUwXCIpO1xyXG5cclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiZGVzc2VydFwiLCBcIkRvdWJsZSBDaG9jb2xhdGUgQ2FrZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJkZXNzZXJ0XCIsIFwiU29yYmV0XCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgdW5kZSBcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImRlc3NlcnRcIiwgXCJJY2UgQ3JlYW1cIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZVwiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiZGVzc2VydFwiLCBcIk0mTXNcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSB1bmRlIFwiLCBcIiQxNC41MFwiKTtcclxuXHJcbn1cclxuXHJcblxyXG5jb25zdCBjcmVhdGVNZW51Q29sdW1uID0gKHR5cGUsIG1lbnUpID0+IHtcclxuICAgIGNvbnN0IG1lbnVUeXBlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51VHlwZUNvbnRhaW5lci5pZCA9IHR5cGUgKyBcIkNvbnRhaW5lclwiO1xyXG4gICAgbWVudVR5cGVDb250YWluZXIuY2xhc3NMaXN0ID0gXCJtZW51VHlwZUNvbnRhaW5lclwiXHJcbiAgICBtZW51LmFwcGVuZChtZW51VHlwZUNvbnRhaW5lcilcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QgPSBcIm1lbnVUeXBlSGVhZGVyXCI7XHJcbiAgICBoZWFkZXIuaW5uZXJUZXh0ID0gdHlwZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgbWVudVR5cGVDb250YWluZXIuYXBwZW5kKGhlYWRlcik7XHJcbn1cclxuXHJcblxyXG5jb25zdCBjcmVhdGVNZW51SXRlbSA9ICh0eXBlLCBuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UpID0+IHtcclxuICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0ID0gXCJpdGVtQ29udGFpbmVyXCI7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIHR5cGUgKyBcIkNvbnRhaW5lclwiKS5hcHBlbmQoaXRlbUNvbnRhaW5lcilcclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpdGVtTmFtZS5jbGFzc0xpc3QgPSBcIml0ZW1OYW1lXCI7XHJcbiAgICBpdGVtTmFtZS5pbm5lclRleHQgPSBuYW1lO1xyXG4gICAgaXRlbUNvbnRhaW5lci5hcHBlbmQoaXRlbU5hbWUpXHJcblxyXG4gICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaXRlbURlc2NyaXB0aW9uLmNsYXNzTGlzdCA9IFwiaXRlbURlc2NyaXB0aW9uXCI7XHJcbiAgICBpdGVtRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gZGVzY3JpcHRpb247XHJcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZChpdGVtRGVzY3JpcHRpb24pXHJcblxyXG4gICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaXRlbVByaWNlLmNsYXNzTGlzdCA9IFwiaXRlbVByaWNlXCI7XHJcbiAgICBpdGVtUHJpY2UuaW5uZXJUZXh0ID0gcHJpY2U7XHJcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZChpdGVtUHJpY2UpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudUNvbnRlbnQ7XHJcbiIsImltcG9ydCBjcmVhdGVIb21lQ29udGVudCBmcm9tIFwiLi9ob21lXCJcclxuXHJcbmNvbnN0IGNyZWF0ZU5hdiA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgICBuYXYuaWQgPSAnbmF2QmFyJztcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hcHBlbmQobmF2KTtcclxuICAgIGNyZWF0ZUhlYWRlcihuYXYpO1xyXG4gICAgY3JlYXRlVGFiQnV0dG9uQ29udGFpbmVyKG5hdik7XHJcbiAgICBcclxufVxyXG5cclxuY29uc3QgY3JlYXRlSGVhZGVyID0gKG5hdikgPT4ge1xyXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgaW1hZ2Uuc3JjID0gXCIuL2ltYWdlcy9sb2dvLnBuZ1wiO1xyXG4gICAgaW1hZ2UuYWx0ID0gXCJsb2dvXCI7XHJcbiAgICBpbWFnZS5pZCA9IFwibG9nb1wiO1xyXG4gICAgbmF2LmFwcGVuZChpbWFnZSk7XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVRhYkJ1dHRvbkNvbnRhaW5lciA9IChuYXYpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuaWQgPSBcInRhYnNDb250YWluZXJcIjtcclxuICAgIG5hdi5hcHBlbmQoY29udGFpbmVyKTtcclxuICAgIGNyZWF0ZVRhYkJ1dHRvbihcIkhvbWVcIiwgY29udGFpbmVyKTtcclxuICAgIGNyZWF0ZVRhYkJ1dHRvbihcIk1lbnVcIiwgY29udGFpbmVyKTtcclxuICAgIGNyZWF0ZVRhYkJ1dHRvbihcIkNvbnRhY3RcIiwgY29udGFpbmVyKTtcclxufVxyXG5cclxuY29uc3QgY3JlYXRlVGFiQnV0dG9uID0gKG5hbWUsIGNvbnRhaW5lcikgPT4ge1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ1dHRvbi5pZCA9IG5hbWUudG9Mb3dlckNhc2UoKSArIFwiQnV0dG9uXCI7XHJcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gbmFtZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZChidXR0b24pO1xyXG4gICAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lQnV0dG9uJyk7XHJcbiAgICBob21lVGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kKGZvb3Rlcik7XHJcblxyXG4gICAgY29uc3QgZm9vdGVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGZvb3Rlck5hbWUuaWQgPSBcImZvb3Rlck5hbWVcIjtcclxuICAgIGZvb3Rlck5hbWUuaW5uZXJUZXh0ID0gJ0NvcHlyaWdodCDCqSAyMDIxIGt5bGVqY2hvJztcclxuICAgIGZvb3Rlci5hcHBlbmQoZm9vdGVyTmFtZSk7XHJcblxyXG4gICAgY29uc3QgZ2l0aHViSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGdpdGh1Ykljb24uY2xhc3NOYW1lID0gXCJmYWIgZmEtZ2l0aHViXCI7XHJcbiAgICBnaXRodWJJY29uLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9reWxlamNob3NcIlxyXG4gICAgZm9vdGVyLmFwcGVuZChnaXRodWJJY29uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XHJcbiAgICBjcmVhdGVOYXYoKTtcclxuICAgIGNyZWF0ZUhvbWVDb250ZW50KCk7XHJcbiAgICBjcmVhdGVGb290ZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZFBhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZFBhZ2UgZnJvbSBcIi4vbW9kdWxlcy9wYWdlLWxvYWRcIjtcclxuaW1wb3J0IGNyZWF0ZU1lbnVDb250ZW50IGZyb20gXCIuL21vZHVsZXMvbWVudVwiXHJcbmltcG9ydCBjcmVhdGVDb250YWN0Q29udGVudCBmcm9tIFwiLi9tb2R1bGVzL2NvbnRhY3RcIlxyXG5pbXBvcnQgY3JlYXRlSG9tZUNvbnRlbnQgZnJvbSBcIi4vbW9kdWxlcy9ob21lXCJcclxuXHJcbmxvYWRQYWdlKCk7XHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmlkLmluY2x1ZGVzKFwiQnV0dG9uXCIpKSB7XHJcbiAgICAgICAgdGFiU3dpdGNoKGUudGFyZ2V0LmlkKTtcclxuICAgICAgICB0YWJIaWdobGlnaHQoZSk7XHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCB0YWJTd2l0Y2ggPSAodGFiKSA9PiB7XHJcbiAgICBsZXQgYSA9IHRhYi5yZXBsYWNlKCdCdXR0b24nLCAnJyk7XHJcbiAgICBpZiAoYSA9PSBcIm1lbnVcIiB8fCBhID09IFwiaG9tZU1lbnVcIikge1xyXG4gICAgICAgIGNyZWF0ZU1lbnVDb250ZW50KCk7XHJcbiAgICB9IGVsc2UgaWYgKGEgPT0gXCJjb250YWN0XCIgfHwgYSA9PSBcImhvbWVDb250YWN0XCIpIHtcclxuICAgICAgICBjcmVhdGVDb250YWN0Q29udGVudCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjcmVhdGVIb21lQ29udGVudCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB0YWJIaWdobGlnaHQgPSAoZSkgPT4ge1xyXG4gICAgbGV0IGNoaWxkcmVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWJzQ29udGFpbmVyXCIpLmNoaWxkTm9kZXNcclxuICAgIGNoaWxkcmVuLmZvckVhY2gobGluayA9PiBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuXHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==