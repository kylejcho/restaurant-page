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

    createMenuItem("appetizer", "Bread", "Sed ut perspiciatis unde omnis iste", "$4.50");
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
    createMenuItem("main", "Cheese", "Sed ut perspiciatis unde omnis iste", "$14.50");

    createMenuItem("drinks", "Water", "Sed ut perspiciatis unde omnis iste", "$14.50");
    createMenuItem("drinks", "Water", "Sed ut perspiciatis unde omnis iste", "$14.50");
    createMenuItem("drinks", "Water", "Sed ut perspiciatis unde omnis iste", "$14.50");
    createMenuItem("drinks", "Water", "Sed ut perspiciatis unde omnis iste", "$14.50");

    createMenuItem("dessert", "Cake", "Sed ut perspiciatis unde omnis iste", "$14.50");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsb0JBQW9CLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3JGcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7O0FDcENoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4R0s7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQWlCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVE7Ozs7OztVQzFEdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04yQztBQUNHO0FBQ007QUFDTjtBQUM5QztBQUNBLDhEQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFpQjtBQUN6QixNQUFNO0FBQ04sUUFBUSw0REFBb0I7QUFDNUIsTUFBTTtBQUNOLFFBQVEseURBQWlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVDb250YWN0Q29udGVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhY3RDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhY3RDb250ZW50Q29udGFpbmVyLmlkID0gXCJjb250YWN0Q29udGVudENvbnRhaW5lclwiO1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmNoaWxkcmVuLml0ZW0oMSkucmVwbGFjZVdpdGgoY29udGFjdENvbnRlbnRDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RDb250YWluZXJCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0Q29udGFpbmVyQmFja2dyb3VuZC5pZCA9IFwiY29udGFjdENvbnRhaW5lckJhY2tncm91bmRcIjtcclxuICAgIGNvbnRhY3RDb250ZW50Q29udGFpbmVyLmFwcGVuZChjb250YWN0Q29udGFpbmVyQmFja2dyb3VuZCk7XHJcblxyXG4gICAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdENvbnRhaW5lci5pZCA9IFwiY29udGFjdENvbnRhaW5lclwiO1xyXG4gICAgY29udGFjdENvbnRhaW5lckJhY2tncm91bmQuYXBwZW5kKGNvbnRhY3RDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIuaWQgPSBcImNvbnRhY3RIZWFkZXJcIjtcclxuICAgIGhlYWRlci5pbm5lclRleHQgPSBcIkNPTlRBQ1RcIlxyXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmQoaGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCBjb250YWN0TWFwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0TWFwQ29udGFpbmVyLmlkID0gXCJjb250YWN0TWFwQ29udGFpbmVyXCI7XHJcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZChjb250YWN0TWFwQ29udGFpbmVyKTtcclxuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBhLmlubmVyVGV4dCA9IChcIktZTEUnU1wiKTtcclxuICAgIGEuaWQgPSBcImFcIlxyXG4gICAgY29udGFjdE1hcENvbnRhaW5lci5hcHBlbmQoYSk7XHJcbiAgICBjb25zdCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgYi5pbm5lclRleHQgPSAoXCJLSVRDSEVOXCIpO1xyXG4gICAgYi5pZCA9IFwiYlwiXHJcbiAgICBjb250YWN0TWFwQ29udGFpbmVyLmFwcGVuZChiKVxyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0SW5mb0NvbnRhaW5lci5pZCA9IFwiY29udGFjdEluZm9Db250YWluZXJcIjtcclxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kKGNvbnRhY3RJbmZvQ29udGFpbmVyKTtcclxuXHJcbiAgICBjcmVhdGVDb250YWN0RWxlbWVudChcImFkZHJlc3NIZWFkZXJcIiwgXCJLWUxFJ1MgS0lUQ0hFTlwiKTtcclxuICAgIGNyZWF0ZUNvbnRhY3RFbGVtZW50KFwiYWRkcmVzc1wiLCBcIjY2IFNpbHZlciBTcGVhciBTdC5cXG5JbmRpYW5hcG9saXMsIElOIDQ2MjAxXCIpO1xyXG4gICAgY3JlYXRlQ29udGFjdEVsZW1lbnQoXCJwaG9uZVwiLCBcIigyNDApLTUyNS02ODM0XCIpO1xyXG4gICAgY3JlYXRlQ29udGFjdEVsZW1lbnQoXCJlbWFpbFwiLCBcImt5bGVza2l0Y2hlbkByZXN0YXVyYW50LmNvbVwiKTtcclxuXHJcbiAgICBjcmVhdGVIb3Vyc0NvbnRhaW5lcigoY29udGFjdEluZm9Db250YWluZXIpKTtcclxufVxyXG5cclxuY29uc3QgY3JlYXRlQ29udGFjdEVsZW1lbnQgPSAoaWQsIGNvbnRlbnQpID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGRpdi5pZCA9IGlkO1xyXG4gICAgZGl2LmlubmVyVGV4dCA9IGNvbnRlbnQ7XHJcbiAgICBjb250YWN0SW5mb0NvbnRhaW5lci5hcHBlbmQoZGl2KVxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVIb3Vyc0NvbnRhaW5lciA9IChjb250YWN0SW5mb0NvbnRhaW5lcikgPT4ge1xyXG4gICAgY29uc3QgaG91cnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhvdXJzQ29udGFpbmVyLmlkID0gXCJob3Vyc0NvbnRhaW5lclwiO1xyXG4gICAgY29udGFjdEluZm9Db250YWluZXIuYXBwZW5kKGhvdXJzQ29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBob3Vyc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGhvdXJzSGVhZGVyLmlkID0gXCJob3Vyc0hlYWRlclwiO1xyXG4gICAgaG91cnNIZWFkZXIuaW5uZXJUZXh0ID0gXCJIT1VSU1wiO1xyXG4gICAgaG91cnNDb250YWluZXIuYXBwZW5kKGhvdXJzSGVhZGVyKTtcclxuXHJcbiAgICBjcmVhdGVIb3Vyc0NvbnRlbnQoXCJNb25kYXkgLSBXZWRuZXNkYXk6XCIsIFwiMTBBTSAtIDEyUE1cIiwgaG91cnNDb250YWluZXIpO1xyXG4gICAgY3JlYXRlSG91cnNDb250ZW50KFwiVGh1cmRheSAtIEZyaWRheTpcIiwgXCI5QU0gLSAxMlBNXCIsIGhvdXJzQ29udGFpbmVyKTtcclxuICAgIGNyZWF0ZUhvdXJzQ29udGVudChcIlNhdHVyZGF5OlwiLCBcIjFQTSAtIDEyUE1cIiwgaG91cnNDb250YWluZXIpO1xyXG4gICAgY3JlYXRlSG91cnNDb250ZW50KFwiU3VuZGF5OlwiLCBcIjFQTSAtIDEwUE1cIiwgaG91cnNDb250YWluZXIpO1xyXG5cclxuXHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUhvdXJzQ29udGVudCA9IChkYXlSYW5nZSwgaG91clJhbmdlLCBob3Vyc0NvbnRhaW5lcikgPT4ge1xyXG4gICAgY29uc3QgaG91cnNDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBob3Vyc0NvbnRlbnRDb250YWluZXIuaWQgPSBcImhvdXJzQ29udGVudENvbnRhaW5lclwiO1xyXG4gICAgaG91cnNDb250YWluZXIuYXBwZW5kKGhvdXJzQ29udGVudENvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgZGF5cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGRheXMuaWQgPSBcImRheXNcIjtcclxuICAgIGRheXMuaW5uZXJUZXh0ID0gZGF5UmFuZ2U7XHJcbiAgICBob3Vyc0NvbnRlbnRDb250YWluZXIuYXBwZW5kKGRheXMpO1xyXG5cclxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaG91cnMuaWQgPSBcImhvdXJzXCI7XHJcbiAgICBob3Vycy5pbm5lclRleHQgPSBob3VyUmFuZ2U7XHJcbiAgICBob3Vyc0NvbnRlbnRDb250YWluZXIuYXBwZW5kKGhvdXJzKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhY3RDb250ZW50O1xyXG4iLCJjb25zdCBjcmVhdGVIb21lQ29udGVudCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBob21lQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBob21lQ29udGVudENvbnRhaW5lci5pZCA9IFwiaG9tZUNvbnRlbnRDb250YWluZXJcIjtcclxuICAgIFxyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgICBpZiAoY29udGVudC5jaGlsZEVsZW1lbnRDb3VudCA9PSAzKSB7XHJcbiAgICAgICAgY29udGVudC5jaGlsZHJlbi5pdGVtKDEpLnJlcGxhY2VXaXRoKGhvbWVDb250ZW50Q29udGFpbmVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFwcGVuZChob21lQ29udGVudENvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcblxyXG4gICAgY29uc3QgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaG9tZUNvbnRlbnQuaWQgPSBcImhvbWVDb250ZW50XCI7XHJcbiAgICBob21lQ29udGVudENvbnRhaW5lci5hcHBlbmQoaG9tZUNvbnRlbnQpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiRVhQRVJJRU5DRSBLWUxFJ1MgS0lUQ0hFTi5cIjtcclxuICAgIGhvbWVDb250ZW50LmFwcGVuZCh0aXRsZSk7XHJcbiAgICBjb25zdCBzdWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgc3ViVGl0bGUuaW5uZXJUZXh0ID0gXCJFTkpPWSBGT09EIEZST00gQUxMIEFST1VORCBUSEUgV09STEQuXCJcclxuICAgIGhvbWVDb250ZW50LmFwcGVuZChzdWJUaXRsZSk7XHJcblxyXG4gICAgY29uc3QgaG9tZU1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgaG9tZU1lbnVCdXR0b24uaWQgPSBcImhvbWVNZW51QnV0dG9uXCI7XHJcbiAgICBob21lTWVudUJ1dHRvbi5pbm5lclRleHQgPSBcIlNFRSBNRU5VXCI7XHJcbiAgICBob21lQ29udGVudC5hcHBlbmQoaG9tZU1lbnVCdXR0b24pO1xyXG5cclxuICAgIGNvbnN0IGhvbWVBYm91dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBob21lQWJvdXRCdXR0b24uaWQgPSBcImhvbWVDb250YWN0QnV0dG9uXCI7XHJcbiAgICBob21lQWJvdXRCdXR0b24uaW5uZXJUZXh0ID0gXCJDT05UQUNUXCI7XHJcbiAgICBob21lQ29udGVudC5hcHBlbmQoaG9tZUFib3V0QnV0dG9uKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZUNvbnRlbnQ7IiwiY29uc3QgY3JlYXRlTWVudUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtZW51Q29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZW51Q29udGVudENvbnRhaW5lci5pZCA9IFwibWVudUNvbnRlbnRDb250YWluZXJcIjtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgY29udGVudC5jaGlsZHJlbi5pdGVtKDEpLnJlcGxhY2VXaXRoKG1lbnVDb250ZW50Q29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51LmlkID0gXCJtZW51XCI7XHJcbiAgICBtZW51Q29udGVudENvbnRhaW5lci5hcHBlbmQobWVudSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGhlYWRlcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIuaWQgPSBcIm1lbnVIZWFkZXJcIjtcclxuICAgIGhlYWRlci5pbm5lclRleHQgPSBcIkZPT0QgTUVOVVwiXHJcbiAgICBtZW51LmFwcGVuZChoZWFkZXIpO1xyXG5cclxuXHJcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBpbWFnZS5zcmMgPSBcIi4vaW1hZ2VzL2xvZ28ucG5nXCI7XHJcbiAgICBpbWFnZS5hbHQgPSBcImxvZ29cIjtcclxuICAgIGltYWdlLmlkID0gXCJsb2dvMlwiO1xyXG4gICAgaGVhZGVyLmFwcGVuZChpbWFnZSk7XHJcblxyXG5cclxuXHJcbiAgICBjcmVhdGVNZW51Q29sdW1uKFwiYXBwZXRpemVyXCIsIG1lbnUpO1xyXG4gICAgY3JlYXRlTWVudUNvbHVtbihcIm1haW5cIiwgbWVudSk7XHJcbiAgICBjcmVhdGVNZW51Q29sdW1uKFwiZHJpbmtzXCIsIG1lbnUpO1xyXG4gICAgY3JlYXRlTWVudUNvbHVtbihcImRlc3NlcnRcIiwgbWVudSk7XHJcblxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJhcHBldGl6ZXJcIiwgXCJCcmVhZFwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlXCIsIFwiJDQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImFwcGV0aXplclwiLCBcIkJyZWFkXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGVcIiwgXCIkNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiYXBwZXRpemVyXCIsIFwiQnJlYWRcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZVwiLCBcIiQ0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJhcHBldGl6ZXJcIiwgXCJCcmVhZFwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlXCIsIFwiJDQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImFwcGV0aXplclwiLCBcIkJyZWFkXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGVcIiwgXCIkNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiYXBwZXRpemVyXCIsIFwiQnJlYWRcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZVwiLCBcIiQ0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJhcHBldGl6ZXJcIiwgXCJCcmVhZFwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlXCIsIFwiJDQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImFwcGV0aXplclwiLCBcIkJyZWFkXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGVcIiwgXCIkNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiYXBwZXRpemVyXCIsIFwiQnJlYWRcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZVwiLCBcIiQ0LjUwXCIpO1xyXG5cclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwibWFpblwiLCBcIkNoZWVzZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJtYWluXCIsIFwiQ2hlZXNlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGVcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIm1haW5cIiwgXCJDaGVlc2VcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZVwiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwibWFpblwiLCBcIkNoZWVzZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJtYWluXCIsIFwiQ2hlZXNlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGVcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIm1haW5cIiwgXCJDaGVlc2VcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZVwiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwibWFpblwiLCBcIkNoZWVzZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJtYWluXCIsIFwiQ2hlZXNlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGVcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIm1haW5cIiwgXCJDaGVlc2VcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZVwiLCBcIiQxNC41MFwiKTtcclxuXHJcbiAgICBjcmVhdGVNZW51SXRlbShcImRyaW5rc1wiLCBcIldhdGVyXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGVcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImRyaW5rc1wiLCBcIldhdGVyXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGVcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImRyaW5rc1wiLCBcIldhdGVyXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGVcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImRyaW5rc1wiLCBcIldhdGVyXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGVcIiwgXCIkMTQuNTBcIik7XHJcblxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJkZXNzZXJ0XCIsIFwiQ2FrZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJkZXNzZXJ0XCIsIFwiQ2FrZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJkZXNzZXJ0XCIsIFwiQ2FrZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJkZXNzZXJ0XCIsIFwiQ2FrZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlXCIsIFwiJDE0LjUwXCIpO1xyXG5cclxufVxyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZU1lbnVDb2x1bW4gPSAodHlwZSwgbWVudSkgPT4ge1xyXG4gICAgY29uc3QgbWVudVR5cGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVUeXBlQ29udGFpbmVyLmlkID0gdHlwZSArIFwiQ29udGFpbmVyXCI7XHJcbiAgICBtZW51VHlwZUNvbnRhaW5lci5jbGFzc0xpc3QgPSBcIm1lbnVUeXBlQ29udGFpbmVyXCJcclxuICAgIG1lbnUuYXBwZW5kKG1lbnVUeXBlQ29udGFpbmVyKVxyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdCA9IFwibWVudVR5cGVIZWFkZXJcIjtcclxuICAgIGhlYWRlci5pbm5lclRleHQgPSB0eXBlLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBtZW51VHlwZUNvbnRhaW5lci5hcHBlbmQoaGVhZGVyKTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZU1lbnVJdGVtID0gKHR5cGUsIG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSkgPT4ge1xyXG4gICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QgPSBcIml0ZW1Db250YWluZXJcIjtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgdHlwZSArIFwiQ29udGFpbmVyXCIpLmFwcGVuZChpdGVtQ29udGFpbmVyKVxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGl0ZW1OYW1lLmNsYXNzTGlzdCA9IFwiaXRlbU5hbWVcIjtcclxuICAgIGl0ZW1OYW1lLmlubmVyVGV4dCA9IG5hbWU7XHJcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZChpdGVtTmFtZSlcclxuXHJcbiAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0ID0gXCJpdGVtRGVzY3JpcHRpb25cIjtcclxuICAgIGl0ZW1EZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXNjcmlwdGlvbjtcclxuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kKGl0ZW1EZXNjcmlwdGlvbilcclxuXHJcbiAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpdGVtUHJpY2UuY2xhc3NMaXN0ID0gXCJpdGVtUHJpY2VcIjtcclxuICAgIGl0ZW1QcmljZS5pbm5lclRleHQgPSBwcmljZTtcclxuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kKGl0ZW1QcmljZSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51Q29udGVudDtcclxuIiwiaW1wb3J0IGNyZWF0ZUhvbWVDb250ZW50IGZyb20gXCIuL2hvbWVcIlxyXG5cclxuY29uc3QgY3JlYXRlTmF2ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICAgIG5hdi5pZCA9ICduYXZCYXInO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFwcGVuZChuYXYpO1xyXG4gICAgY3JlYXRlSGVhZGVyKG5hdik7XHJcbiAgICBjcmVhdGVUYWJCdXR0b25Db250YWluZXIobmF2KTtcclxuICAgIFxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAobmF2KSA9PiB7XHJcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBpbWFnZS5zcmMgPSBcIi4vaW1hZ2VzL2xvZ28ucG5nXCI7XHJcbiAgICBpbWFnZS5hbHQgPSBcImxvZ29cIjtcclxuICAgIGltYWdlLmlkID0gXCJsb2dvXCI7XHJcbiAgICBuYXYuYXBwZW5kKGltYWdlKTtcclxufVxyXG5cclxuY29uc3QgY3JlYXRlVGFiQnV0dG9uQ29udGFpbmVyID0gKG5hdikgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5pZCA9IFwidGFic0NvbnRhaW5lclwiO1xyXG4gICAgbmF2LmFwcGVuZChjb250YWluZXIpO1xyXG4gICAgY3JlYXRlVGFiQnV0dG9uKFwiSG9tZVwiLCBjb250YWluZXIpO1xyXG4gICAgY3JlYXRlVGFiQnV0dG9uKFwiTWVudVwiLCBjb250YWluZXIpO1xyXG4gICAgY3JlYXRlVGFiQnV0dG9uKFwiQ29udGFjdFwiLCBjb250YWluZXIpO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVUYWJCdXR0b24gPSAobmFtZSwgY29udGFpbmVyKSA9PiB7XHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnV0dG9uLmlkID0gbmFtZS50b0xvd2VyQ2FzZSgpICsgXCJCdXR0b25cIjtcclxuICAgIGJ1dHRvbi5pbm5lclRleHQgPSBuYW1lLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKGJ1dHRvbik7XHJcbiAgICBjb25zdCBob21lVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWVCdXR0b24nKTtcclxuICAgIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxufVxyXG5cclxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hcHBlbmQoZm9vdGVyKTtcclxuXHJcbiAgICBjb25zdCBmb290ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZm9vdGVyTmFtZS5pZCA9IFwiZm9vdGVyTmFtZVwiO1xyXG4gICAgZm9vdGVyTmFtZS5pbm5lclRleHQgPSAnQ29weXJpZ2h0IMKpIDIwMjEga3lsZWpjaG8nO1xyXG4gICAgZm9vdGVyLmFwcGVuZChmb290ZXJOYW1lKTtcclxuXHJcbiAgICBjb25zdCBnaXRodWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgZ2l0aHViSWNvbi5jbGFzc05hbWUgPSBcImZhYiBmYS1naXRodWJcIjtcclxuICAgIGdpdGh1Ykljb24uaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL2t5bGVqY2hvc1wiXHJcbiAgICBmb290ZXIuYXBwZW5kKGdpdGh1Ykljb24pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUGFnZSgpIHtcclxuICAgIGNyZWF0ZU5hdigpO1xyXG4gICAgY3JlYXRlSG9tZUNvbnRlbnQoKTtcclxuICAgIGNyZWF0ZUZvb3RlcigpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkUGFnZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkUGFnZSBmcm9tIFwiLi9tb2R1bGVzL3BhZ2UtbG9hZFwiO1xyXG5pbXBvcnQgY3JlYXRlTWVudUNvbnRlbnQgZnJvbSBcIi4vbW9kdWxlcy9tZW51XCJcclxuaW1wb3J0IGNyZWF0ZUNvbnRhY3RDb250ZW50IGZyb20gXCIuL21vZHVsZXMvY29udGFjdFwiXHJcbmltcG9ydCBjcmVhdGVIb21lQ29udGVudCBmcm9tIFwiLi9tb2R1bGVzL2hvbWVcIlxyXG5cclxubG9hZFBhZ2UoKTtcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuaWQuaW5jbHVkZXMoXCJCdXR0b25cIikpIHtcclxuICAgICAgICB0YWJTd2l0Y2goZS50YXJnZXQuaWQpO1xyXG4gICAgICAgIHRhYkhpZ2hsaWdodChlKTtcclxuICAgIH1cclxufSlcclxuXHJcbmNvbnN0IHRhYlN3aXRjaCA9ICh0YWIpID0+IHtcclxuICAgIGxldCBhID0gdGFiLnJlcGxhY2UoJ0J1dHRvbicsICcnKTtcclxuICAgIGlmIChhID09IFwibWVudVwiIHx8IGEgPT0gXCJob21lTWVudVwiKSB7XHJcbiAgICAgICAgY3JlYXRlTWVudUNvbnRlbnQoKTtcclxuICAgIH0gZWxzZSBpZiAoYSA9PSBcImNvbnRhY3RcIiB8fCBhID09IFwiaG9tZUNvbnRhY3RcIikge1xyXG4gICAgICAgIGNyZWF0ZUNvbnRhY3RDb250ZW50KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNyZWF0ZUhvbWVDb250ZW50KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHRhYkhpZ2hsaWdodCA9IChlKSA9PiB7XHJcbiAgICBsZXQgY2hpbGRyZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhYnNDb250YWluZXJcIikuY2hpbGROb2Rlc1xyXG4gICAgY2hpbGRyZW4uZm9yRWFjaChsaW5rID0+IGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG5cclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9