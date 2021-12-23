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
    homeAboutButton.id = "homeAboutButton";
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

    createMenuItem("appetizer", "Bread", "Sed ut perspiciatis unde omnis iste natus", "$4.50");
    createMenuItem("appetizer", "Bread", "Sed ut perspiciatis unde omnis iste natus", "$4.50");
    createMenuItem("appetizer", "Bread", "Sed ut perspiciatis unde omnis iste natus", "$4.50");
    createMenuItem("appetizer", "Bread", "Sed ut perspiciatis unde omnis iste natus", "$4.50");
    createMenuItem("appetizer", "Bread", "Sed ut perspiciatis unde omnis iste natus", "$4.50");
    createMenuItem("appetizer", "Bread", "Sed ut perspiciatis unde omnis iste natus", "$4.50");
    createMenuItem("appetizer", "Bread", "Sed ut perspiciatis unde omnis iste natus", "$4.50");
    createMenuItem("appetizer", "Bread", "Sed ut perspiciatis unde omnis iste natus", "$4.50");
    createMenuItem("appetizer", "Bread", "Sed ut perspiciatis unde omnis iste natus", "$4.50");
    createMenuItem("appetizer", "Bread", "Sed ut perspiciatis unde omnis iste natus", "$4.50");
    createMenuItem("appetizer", "Bread", "Sed ut perspiciatis unde omnis iste natus", "$4.50");

    createMenuItem("main", "Cheese", "Sed ut perspiciatis unde omnis iste natus", "$14.50");
    createMenuItem("main", "Cheese", "Sed ut perspiciatis unde omnis iste natus", "$14.50");
    createMenuItem("main", "Cheese", "Sed ut perspiciatis unde omnis iste natus", "$14.50");
    createMenuItem("main", "Cheese", "Sed ut perspiciatis unde omnis iste natus", "$14.50");
    createMenuItem("main", "Cheese", "Sed ut perspiciatis unde omnis iste natus", "$14.50");
    createMenuItem("main", "Cheese", "Sed ut perspiciatis unde omnis iste natus", "$14.50");
    createMenuItem("main", "Cheese", "Sed ut perspiciatis unde omnis iste natus", "$14.50");
    createMenuItem("main", "Cheese", "Sed ut perspiciatis unde omnis iste natus", "$14.50");
    createMenuItem("main", "Cheese", "Sed ut perspiciatis unde omnis iste natus", "$14.50");
    createMenuItem("main", "Cheese", "Sed ut perspiciatis unde omnis iste natus", "$14.50");
    createMenuItem("main", "Cheese", "Sed ut perspiciatis unde omnis iste natus", "$14.50");

    createMenuItem("drinks", "Water", "Sed ut perspiciatis unde omnis iste natus", "$14.50");
    createMenuItem("drinks", "Water", "Sed ut perspiciatis unde omnis iste natus", "$14.50");
    createMenuItem("drinks", "Water", "Sed ut perspiciatis unde omnis iste natus", "$14.50");
    createMenuItem("drinks", "Water", "Sed ut perspiciatis unde omnis iste natus", "$14.50");
    createMenuItem("drinks", "Water", "Sed ut perspiciatis unde omnis iste natus", "$14.50");

    createMenuItem("dessert", "Cake", "Sed ut perspiciatis unde omnis iste natus", "$14.50");
    createMenuItem("dessert", "Cake", "Sed ut perspiciatis unde omnis iste natus", "$14.50");
    createMenuItem("dessert", "Cake", "Sed ut perspiciatis unde omnis iste natus", "$14.50");
    createMenuItem("dessert", "Cake", "Sed ut perspiciatis unde omnis iste natus", "$14.50");
    createMenuItem("dessert", "Cake", "Sed ut perspiciatis unde omnis iste natus", "$14.50");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsb0JBQW9CLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3JGcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7O0FDcENoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5R0s7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFROzs7Ozs7VUNoRHZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOMkM7QUFDRztBQUNNO0FBQ047QUFDOUM7QUFDQSw4REFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBaUI7QUFDekIsTUFBTTtBQUNOLFFBQVEsNERBQW9CO0FBQzVCLE1BQU07QUFDTixRQUFRLHlEQUFpQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlQ29udGFjdENvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWN0Q29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWN0Q29udGVudENvbnRhaW5lci5pZCA9IFwiY29udGFjdENvbnRlbnRDb250YWluZXJcIjtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgY29udGVudC5jaGlsZHJlbi5pdGVtKDEpLnJlcGxhY2VXaXRoKGNvbnRhY3RDb250ZW50Q29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBjb250YWN0Q29udGFpbmVyQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdENvbnRhaW5lckJhY2tncm91bmQuaWQgPSBcImNvbnRhY3RDb250YWluZXJCYWNrZ3JvdW5kXCI7XHJcbiAgICBjb250YWN0Q29udGVudENvbnRhaW5lci5hcHBlbmQoY29udGFjdENvbnRhaW5lckJhY2tncm91bmQpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3RDb250YWluZXIuaWQgPSBcImNvbnRhY3RDb250YWluZXJcIjtcclxuICAgIGNvbnRhY3RDb250YWluZXJCYWNrZ3JvdW5kLmFwcGVuZChjb250YWN0Q29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXI9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgaGVhZGVyLmlkID0gXCJjb250YWN0SGVhZGVyXCI7XHJcbiAgICBoZWFkZXIuaW5uZXJUZXh0ID0gXCJDT05UQUNUXCJcclxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kKGhlYWRlcik7XHJcblxyXG4gICAgY29uc3QgY29udGFjdE1hcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdE1hcENvbnRhaW5lci5pZCA9IFwiY29udGFjdE1hcENvbnRhaW5lclwiO1xyXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmQoY29udGFjdE1hcENvbnRhaW5lcik7XHJcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgYS5pbm5lclRleHQgPSAoXCJLWUxFJ1NcIik7XHJcbiAgICBhLmlkID0gXCJhXCJcclxuICAgIGNvbnRhY3RNYXBDb250YWluZXIuYXBwZW5kKGEpO1xyXG4gICAgY29uc3QgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGIuaW5uZXJUZXh0ID0gKFwiS0lUQ0hFTlwiKTtcclxuICAgIGIuaWQgPSBcImJcIlxyXG4gICAgY29udGFjdE1hcENvbnRhaW5lci5hcHBlbmQoYilcclxuXHJcbiAgICBjb25zdCBjb250YWN0SW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdEluZm9Db250YWluZXIuaWQgPSBcImNvbnRhY3RJbmZvQ29udGFpbmVyXCI7XHJcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZChjb250YWN0SW5mb0NvbnRhaW5lcik7XHJcblxyXG4gICAgY3JlYXRlQ29udGFjdEVsZW1lbnQoXCJhZGRyZXNzSGVhZGVyXCIsIFwiS1lMRSdTIEtJVENIRU5cIik7XHJcbiAgICBjcmVhdGVDb250YWN0RWxlbWVudChcImFkZHJlc3NcIiwgXCI2NiBTaWx2ZXIgU3BlYXIgU3QuXFxuSW5kaWFuYXBvbGlzLCBJTiA0NjIwMVwiKTtcclxuICAgIGNyZWF0ZUNvbnRhY3RFbGVtZW50KFwicGhvbmVcIiwgXCIoMjQwKS01MjUtNjgzNFwiKTtcclxuICAgIGNyZWF0ZUNvbnRhY3RFbGVtZW50KFwiZW1haWxcIiwgXCJreWxlc2tpdGNoZW5AcmVzdGF1cmFudC5jb21cIik7XHJcblxyXG4gICAgY3JlYXRlSG91cnNDb250YWluZXIoKGNvbnRhY3RJbmZvQ29udGFpbmVyKSk7XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUNvbnRhY3RFbGVtZW50ID0gKGlkLCBjb250ZW50KSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkaXYuaWQgPSBpZDtcclxuICAgIGRpdi5pbm5lclRleHQgPSBjb250ZW50O1xyXG4gICAgY29udGFjdEluZm9Db250YWluZXIuYXBwZW5kKGRpdilcclxufVxyXG5cclxuY29uc3QgY3JlYXRlSG91cnNDb250YWluZXIgPSAoY29udGFjdEluZm9Db250YWluZXIpID0+IHtcclxuICAgIGNvbnN0IGhvdXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBob3Vyc0NvbnRhaW5lci5pZCA9IFwiaG91cnNDb250YWluZXJcIjtcclxuICAgIGNvbnRhY3RJbmZvQ29udGFpbmVyLmFwcGVuZChob3Vyc0NvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgaG91cnNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBob3Vyc0hlYWRlci5pZCA9IFwiaG91cnNIZWFkZXJcIjtcclxuICAgIGhvdXJzSGVhZGVyLmlubmVyVGV4dCA9IFwiSE9VUlNcIjtcclxuICAgIGhvdXJzQ29udGFpbmVyLmFwcGVuZChob3Vyc0hlYWRlcik7XHJcblxyXG4gICAgY3JlYXRlSG91cnNDb250ZW50KFwiTW9uZGF5IC0gV2VkbmVzZGF5OlwiLCBcIjEwQU0gLSAxMlBNXCIsIGhvdXJzQ29udGFpbmVyKTtcclxuICAgIGNyZWF0ZUhvdXJzQ29udGVudChcIlRodXJkYXkgLSBGcmlkYXk6XCIsIFwiOUFNIC0gMTJQTVwiLCBob3Vyc0NvbnRhaW5lcik7XHJcbiAgICBjcmVhdGVIb3Vyc0NvbnRlbnQoXCJTYXR1cmRheTpcIiwgXCIxUE0gLSAxMlBNXCIsIGhvdXJzQ29udGFpbmVyKTtcclxuICAgIGNyZWF0ZUhvdXJzQ29udGVudChcIlN1bmRheTpcIiwgXCIxUE0gLSAxMFBNXCIsIGhvdXJzQ29udGFpbmVyKTtcclxuXHJcblxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVIb3Vyc0NvbnRlbnQgPSAoZGF5UmFuZ2UsIGhvdXJSYW5nZSwgaG91cnNDb250YWluZXIpID0+IHtcclxuICAgIGNvbnN0IGhvdXJzQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaG91cnNDb250ZW50Q29udGFpbmVyLmlkID0gXCJob3Vyc0NvbnRlbnRDb250YWluZXJcIjtcclxuICAgIGhvdXJzQ29udGFpbmVyLmFwcGVuZChob3Vyc0NvbnRlbnRDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGRheXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkYXlzLmlkID0gXCJkYXlzXCI7XHJcbiAgICBkYXlzLmlubmVyVGV4dCA9IGRheVJhbmdlO1xyXG4gICAgaG91cnNDb250ZW50Q29udGFpbmVyLmFwcGVuZChkYXlzKTtcclxuXHJcbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGhvdXJzLmlkID0gXCJob3Vyc1wiO1xyXG4gICAgaG91cnMuaW5uZXJUZXh0ID0gaG91clJhbmdlO1xyXG4gICAgaG91cnNDb250ZW50Q29udGFpbmVyLmFwcGVuZChob3Vycyk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0Q29udGVudDtcclxuIiwiY29uc3QgY3JlYXRlSG9tZUNvbnRlbnQgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgaG9tZUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaG9tZUNvbnRlbnRDb250YWluZXIuaWQgPSBcImhvbWVDb250ZW50Q29udGFpbmVyXCI7XHJcbiAgICBcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgaWYgKGNvbnRlbnQuY2hpbGRFbGVtZW50Q291bnQgPT0gMykge1xyXG4gICAgICAgIGNvbnRlbnQuY2hpbGRyZW4uaXRlbSgxKS5yZXBsYWNlV2l0aChob21lQ29udGVudENvbnRhaW5lcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hcHBlbmQoaG9tZUNvbnRlbnRDb250YWluZXIpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG5cclxuICAgIGNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhvbWVDb250ZW50LmlkID0gXCJob21lQ29udGVudFwiO1xyXG4gICAgaG9tZUNvbnRlbnRDb250YWluZXIuYXBwZW5kKGhvbWVDb250ZW50KTtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSBcIkVYUEVSSUVOQ0UgS1lMRSdTIEtJVENIRU4uXCI7XHJcbiAgICBob21lQ29udGVudC5hcHBlbmQodGl0bGUpO1xyXG4gICAgY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHN1YlRpdGxlLmlubmVyVGV4dCA9IFwiRU5KT1kgRk9PRCBGUk9NIEFMTCBBUk9VTkQgVEhFIFdPUkxELlwiXHJcbiAgICBob21lQ29udGVudC5hcHBlbmQoc3ViVGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGhvbWVNZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGhvbWVNZW51QnV0dG9uLmlkID0gXCJob21lTWVudUJ1dHRvblwiO1xyXG4gICAgaG9tZU1lbnVCdXR0b24uaW5uZXJUZXh0ID0gXCJTRUUgTUVOVVwiO1xyXG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kKGhvbWVNZW51QnV0dG9uKTtcclxuXHJcbiAgICBjb25zdCBob21lQWJvdXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgaG9tZUFib3V0QnV0dG9uLmlkID0gXCJob21lQWJvdXRCdXR0b25cIjtcclxuICAgIGhvbWVBYm91dEJ1dHRvbi5pbm5lclRleHQgPSBcIkNPTlRBQ1RcIjtcclxuICAgIGhvbWVDb250ZW50LmFwcGVuZChob21lQWJvdXRCdXR0b24pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lQ29udGVudDsiLCJjb25zdCBjcmVhdGVNZW51Q29udGVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1lbnVDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1lbnVDb250ZW50Q29udGFpbmVyLmlkID0gXCJtZW51Q29udGVudENvbnRhaW5lclwiO1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmNoaWxkcmVuLml0ZW0oMSkucmVwbGFjZVdpdGgobWVudUNvbnRlbnRDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnUuaWQgPSBcIm1lbnVcIjtcclxuICAgIG1lbnVDb250ZW50Q29udGFpbmVyLmFwcGVuZChtZW51KTtcclxuXHJcblxyXG4gICAgY29uc3QgaGVhZGVyPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGhlYWRlci5pZCA9IFwibWVudUhlYWRlclwiO1xyXG4gICAgaGVhZGVyLmlubmVyVGV4dCA9IFwiRk9PRCBNRU5VXCJcclxuICAgIG1lbnUuYXBwZW5kKGhlYWRlcik7XHJcblxyXG5cclxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGltYWdlLnNyYyA9IFwiLi9pbWFnZXMvbG9nby5wbmdcIjtcclxuICAgIGltYWdlLmFsdCA9IFwibG9nb1wiO1xyXG4gICAgaW1hZ2UuaWQgPSBcImxvZ28yXCI7XHJcbiAgICBoZWFkZXIuYXBwZW5kKGltYWdlKTtcclxuXHJcblxyXG5cclxuICAgIGNyZWF0ZU1lbnVDb2x1bW4oXCJhcHBldGl6ZXJcIiwgbWVudSk7XHJcbiAgICBjcmVhdGVNZW51Q29sdW1uKFwibWFpblwiLCBtZW51KTtcclxuICAgIGNyZWF0ZU1lbnVDb2x1bW4oXCJkcmlua3NcIiwgbWVudSk7XHJcbiAgICBjcmVhdGVNZW51Q29sdW1uKFwiZGVzc2VydFwiLCBtZW51KTtcclxuXHJcbiAgICBjcmVhdGVNZW51SXRlbShcImFwcGV0aXplclwiLCBcIkJyZWFkXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiYXBwZXRpemVyXCIsIFwiQnJlYWRcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQ0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJhcHBldGl6ZXJcIiwgXCJCcmVhZFwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImFwcGV0aXplclwiLCBcIkJyZWFkXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiYXBwZXRpemVyXCIsIFwiQnJlYWRcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQ0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJhcHBldGl6ZXJcIiwgXCJCcmVhZFwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImFwcGV0aXplclwiLCBcIkJyZWFkXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiYXBwZXRpemVyXCIsIFwiQnJlYWRcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQ0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJhcHBldGl6ZXJcIiwgXCJCcmVhZFwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImFwcGV0aXplclwiLCBcIkJyZWFkXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiYXBwZXRpemVyXCIsIFwiQnJlYWRcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQ0LjUwXCIpO1xyXG5cclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwibWFpblwiLCBcIkNoZWVzZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJtYWluXCIsIFwiQ2hlZXNlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIm1haW5cIiwgXCJDaGVlc2VcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwibWFpblwiLCBcIkNoZWVzZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJtYWluXCIsIFwiQ2hlZXNlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIm1haW5cIiwgXCJDaGVlc2VcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwibWFpblwiLCBcIkNoZWVzZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJtYWluXCIsIFwiQ2hlZXNlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIm1haW5cIiwgXCJDaGVlc2VcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwibWFpblwiLCBcIkNoZWVzZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJtYWluXCIsIFwiQ2hlZXNlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcblxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJkcmlua3NcIiwgXCJXYXRlclwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJkcmlua3NcIiwgXCJXYXRlclwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJkcmlua3NcIiwgXCJXYXRlclwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJkcmlua3NcIiwgXCJXYXRlclwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJkcmlua3NcIiwgXCJXYXRlclwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDE0LjUwXCIpO1xyXG5cclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiZGVzc2VydFwiLCBcIkNha2VcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiZGVzc2VydFwiLCBcIkNha2VcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiZGVzc2VydFwiLCBcIkNha2VcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiZGVzc2VydFwiLCBcIkNha2VcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiZGVzc2VydFwiLCBcIkNha2VcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuXHJcbn1cclxuXHJcblxyXG5jb25zdCBjcmVhdGVNZW51Q29sdW1uID0gKHR5cGUsIG1lbnUpID0+IHtcclxuICAgIGNvbnN0IG1lbnVUeXBlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51VHlwZUNvbnRhaW5lci5pZCA9IHR5cGUgKyBcIkNvbnRhaW5lclwiO1xyXG4gICAgbWVudVR5cGVDb250YWluZXIuY2xhc3NMaXN0ID0gXCJtZW51VHlwZUNvbnRhaW5lclwiXHJcbiAgICBtZW51LmFwcGVuZChtZW51VHlwZUNvbnRhaW5lcilcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QgPSBcIm1lbnVUeXBlSGVhZGVyXCI7XHJcbiAgICBoZWFkZXIuaW5uZXJUZXh0ID0gdHlwZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgbWVudVR5cGVDb250YWluZXIuYXBwZW5kKGhlYWRlcik7XHJcbn1cclxuXHJcblxyXG5jb25zdCBjcmVhdGVNZW51SXRlbSA9ICh0eXBlLCBuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UpID0+IHtcclxuICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0ID0gXCJpdGVtQ29udGFpbmVyXCI7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIHR5cGUgKyBcIkNvbnRhaW5lclwiKS5hcHBlbmQoaXRlbUNvbnRhaW5lcilcclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpdGVtTmFtZS5jbGFzc0xpc3QgPSBcIml0ZW1OYW1lXCI7XHJcbiAgICBpdGVtTmFtZS5pbm5lclRleHQgPSBuYW1lO1xyXG4gICAgaXRlbUNvbnRhaW5lci5hcHBlbmQoaXRlbU5hbWUpXHJcblxyXG4gICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaXRlbURlc2NyaXB0aW9uLmNsYXNzTGlzdCA9IFwiaXRlbURlc2NyaXB0aW9uXCI7XHJcbiAgICBpdGVtRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gZGVzY3JpcHRpb247XHJcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZChpdGVtRGVzY3JpcHRpb24pXHJcblxyXG4gICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaXRlbVByaWNlLmNsYXNzTGlzdCA9IFwiaXRlbVByaWNlXCI7XHJcbiAgICBpdGVtUHJpY2UuaW5uZXJUZXh0ID0gcHJpY2U7XHJcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZChpdGVtUHJpY2UpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudUNvbnRlbnQ7XHJcbiIsImltcG9ydCBjcmVhdGVIb21lQ29udGVudCBmcm9tIFwiLi9ob21lXCJcclxuXHJcbmNvbnN0IGNyZWF0ZU5hdiA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgICBuYXYuaWQgPSAnbmF2QmFyJztcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hcHBlbmQobmF2KTtcclxuICAgIGNyZWF0ZUhlYWRlcihuYXYpO1xyXG4gICAgY3JlYXRlVGFiQnV0dG9uQ29udGFpbmVyKG5hdik7XHJcbiAgICBcclxufVxyXG5cclxuY29uc3QgY3JlYXRlSGVhZGVyID0gKG5hdikgPT4ge1xyXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgaW1hZ2Uuc3JjID0gXCIuL2ltYWdlcy9sb2dvLnBuZ1wiO1xyXG4gICAgaW1hZ2UuYWx0ID0gXCJsb2dvXCI7XHJcbiAgICBpbWFnZS5pZCA9IFwibG9nb1wiO1xyXG4gICAgbmF2LmFwcGVuZChpbWFnZSk7XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVRhYkJ1dHRvbkNvbnRhaW5lciA9IChuYXYpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuaWQgPSBcInRhYnNDb250YWluZXJcIjtcclxuICAgIG5hdi5hcHBlbmQoY29udGFpbmVyKTtcclxuICAgIGNyZWF0ZVRhYkJ1dHRvbihcIkhvbWVcIiwgY29udGFpbmVyKTtcclxuICAgIGNyZWF0ZVRhYkJ1dHRvbihcIk1lbnVcIiwgY29udGFpbmVyKTtcclxuICAgIGNyZWF0ZVRhYkJ1dHRvbihcIkNvbnRhY3RcIiwgY29udGFpbmVyKTtcclxufVxyXG5cclxuY29uc3QgY3JlYXRlVGFiQnV0dG9uID0gKG5hbWUsIGNvbnRhaW5lcikgPT4ge1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGJ1dHRvbi5pZCA9IG5hbWUudG9Mb3dlckNhc2UoKSArIFwiQnV0dG9uXCI7XHJcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gbmFtZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZChidXR0b24pO1xyXG4gICAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lQnV0dG9uJyk7XHJcbiAgICBob21lVGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kKGZvb3Rlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQYWdlKCkge1xyXG4gICAgY3JlYXRlTmF2KCk7XHJcbiAgICBjcmVhdGVIb21lQ29udGVudCgpO1xyXG4gICAgY3JlYXRlRm9vdGVyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRQYWdlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRQYWdlIGZyb20gXCIuL21vZHVsZXMvcGFnZS1sb2FkXCI7XHJcbmltcG9ydCBjcmVhdGVNZW51Q29udGVudCBmcm9tIFwiLi9tb2R1bGVzL21lbnVcIlxyXG5pbXBvcnQgY3JlYXRlQ29udGFjdENvbnRlbnQgZnJvbSBcIi4vbW9kdWxlcy9jb250YWN0XCJcclxuaW1wb3J0IGNyZWF0ZUhvbWVDb250ZW50IGZyb20gXCIuL21vZHVsZXMvaG9tZVwiXHJcblxyXG5sb2FkUGFnZSgpO1xyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5pZC5pbmNsdWRlcyhcIkJ1dHRvblwiKSkge1xyXG4gICAgICAgIHRhYlN3aXRjaChlLnRhcmdldC5pZCk7XHJcbiAgICAgICAgdGFiSGlnaGxpZ2h0KGUpO1xyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgdGFiU3dpdGNoID0gKHRhYikgPT4ge1xyXG4gICAgbGV0IGEgPSB0YWIucmVwbGFjZSgnQnV0dG9uJywgJycpO1xyXG4gICAgaWYgKGEgPT0gXCJtZW51XCIgfHwgYSA9PSBcImhvbWVNZW51XCIpIHtcclxuICAgICAgICBjcmVhdGVNZW51Q29udGVudCgpO1xyXG4gICAgfSBlbHNlIGlmIChhID09IFwiY29udGFjdFwiIHx8IGEgPT0gXCJob21lQ29udGFjdFwiKSB7XHJcbiAgICAgICAgY3JlYXRlQ29udGFjdENvbnRlbnQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY3JlYXRlSG9tZUNvbnRlbnQoKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgdGFiSGlnaGxpZ2h0ID0gKGUpID0+IHtcclxuICAgIGxldCBjaGlsZHJlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFic0NvbnRhaW5lclwiKS5jaGlsZE5vZGVzXHJcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGxpbmsgPT4gbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcblxyXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=