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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsb0JBQW9CLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3JGcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7O0FDcENoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5R0s7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFROzs7Ozs7VUNoRHZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOMkM7QUFDRztBQUNNO0FBQ047QUFDOUM7QUFDQSw4REFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBaUI7QUFDekIsTUFBTTtBQUNOLFFBQVEsNERBQW9CO0FBQzVCLE1BQU07QUFDTixRQUFRLHlEQUFpQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlQ29udGFjdENvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWN0Q29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWN0Q29udGVudENvbnRhaW5lci5pZCA9IFwiY29udGFjdENvbnRlbnRDb250YWluZXJcIjtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgY29udGVudC5jaGlsZHJlbi5pdGVtKDEpLnJlcGxhY2VXaXRoKGNvbnRhY3RDb250ZW50Q29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBjb250YWN0Q29udGFpbmVyQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdENvbnRhaW5lckJhY2tncm91bmQuaWQgPSBcImNvbnRhY3RDb250YWluZXJCYWNrZ3JvdW5kXCI7XHJcbiAgICBjb250YWN0Q29udGVudENvbnRhaW5lci5hcHBlbmQoY29udGFjdENvbnRhaW5lckJhY2tncm91bmQpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3RDb250YWluZXIuaWQgPSBcImNvbnRhY3RDb250YWluZXJcIjtcclxuICAgIGNvbnRhY3RDb250YWluZXJCYWNrZ3JvdW5kLmFwcGVuZChjb250YWN0Q29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXI9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgaGVhZGVyLmlkID0gXCJjb250YWN0SGVhZGVyXCI7XHJcbiAgICBoZWFkZXIuaW5uZXJUZXh0ID0gXCJDT05UQUNUXCJcclxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kKGhlYWRlcik7XHJcblxyXG4gICAgY29uc3QgY29udGFjdE1hcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdE1hcENvbnRhaW5lci5pZCA9IFwiY29udGFjdE1hcENvbnRhaW5lclwiO1xyXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmQoY29udGFjdE1hcENvbnRhaW5lcik7XHJcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgYS5pbm5lclRleHQgPSAoXCJLWUxFJ1NcIik7XHJcbiAgICBhLmlkID0gXCJhXCJcclxuICAgIGNvbnRhY3RNYXBDb250YWluZXIuYXBwZW5kKGEpO1xyXG4gICAgY29uc3QgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGIuaW5uZXJUZXh0ID0gKFwiS0lUQ0hFTlwiKTtcclxuICAgIGIuaWQgPSBcImJcIlxyXG4gICAgY29udGFjdE1hcENvbnRhaW5lci5hcHBlbmQoYilcclxuXHJcbiAgICBjb25zdCBjb250YWN0SW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdEluZm9Db250YWluZXIuaWQgPSBcImNvbnRhY3RJbmZvQ29udGFpbmVyXCI7XHJcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZChjb250YWN0SW5mb0NvbnRhaW5lcik7XHJcblxyXG4gICAgY3JlYXRlQ29udGFjdEVsZW1lbnQoXCJhZGRyZXNzSGVhZGVyXCIsIFwiS1lMRSdTIEtJVENIRU5cIik7XHJcbiAgICBjcmVhdGVDb250YWN0RWxlbWVudChcImFkZHJlc3NcIiwgXCI2NiBTaWx2ZXIgU3BlYXIgU3QuXFxuSW5kaWFuYXBvbGlzLCBJTiA0NjIwMVwiKTtcclxuICAgIGNyZWF0ZUNvbnRhY3RFbGVtZW50KFwicGhvbmVcIiwgXCIoMjQwKS01MjUtNjgzNFwiKTtcclxuICAgIGNyZWF0ZUNvbnRhY3RFbGVtZW50KFwiZW1haWxcIiwgXCJreWxlc2tpdGNoZW5AcmVzdGF1cmFudC5jb21cIik7XHJcblxyXG4gICAgY3JlYXRlSG91cnNDb250YWluZXIoKGNvbnRhY3RJbmZvQ29udGFpbmVyKSk7XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUNvbnRhY3RFbGVtZW50ID0gKGlkLCBjb250ZW50KSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkaXYuaWQgPSBpZDtcclxuICAgIGRpdi5pbm5lclRleHQgPSBjb250ZW50O1xyXG4gICAgY29udGFjdEluZm9Db250YWluZXIuYXBwZW5kKGRpdilcclxufVxyXG5cclxuY29uc3QgY3JlYXRlSG91cnNDb250YWluZXIgPSAoY29udGFjdEluZm9Db250YWluZXIpID0+IHtcclxuICAgIGNvbnN0IGhvdXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBob3Vyc0NvbnRhaW5lci5pZCA9IFwiaG91cnNDb250YWluZXJcIjtcclxuICAgIGNvbnRhY3RJbmZvQ29udGFpbmVyLmFwcGVuZChob3Vyc0NvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgaG91cnNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBob3Vyc0hlYWRlci5pZCA9IFwiaG91cnNIZWFkZXJcIjtcclxuICAgIGhvdXJzSGVhZGVyLmlubmVyVGV4dCA9IFwiSE9VUlNcIjtcclxuICAgIGhvdXJzQ29udGFpbmVyLmFwcGVuZChob3Vyc0hlYWRlcik7XHJcblxyXG4gICAgY3JlYXRlSG91cnNDb250ZW50KFwiTW9uZGF5IC0gV2VkbmVzZGF5OlwiLCBcIjEwQU0gLSAxMlBNXCIsIGhvdXJzQ29udGFpbmVyKTtcclxuICAgIGNyZWF0ZUhvdXJzQ29udGVudChcIlRodXJkYXkgLSBGcmlkYXk6XCIsIFwiOUFNIC0gMTJQTVwiLCBob3Vyc0NvbnRhaW5lcik7XHJcbiAgICBjcmVhdGVIb3Vyc0NvbnRlbnQoXCJTYXR1cmRheTpcIiwgXCIxUE0gLSAxMlBNXCIsIGhvdXJzQ29udGFpbmVyKTtcclxuICAgIGNyZWF0ZUhvdXJzQ29udGVudChcIlN1bmRheTpcIiwgXCIxUE0gLSAxMFBNXCIsIGhvdXJzQ29udGFpbmVyKTtcclxuXHJcblxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVIb3Vyc0NvbnRlbnQgPSAoZGF5UmFuZ2UsIGhvdXJSYW5nZSwgaG91cnNDb250YWluZXIpID0+IHtcclxuICAgIGNvbnN0IGhvdXJzQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaG91cnNDb250ZW50Q29udGFpbmVyLmlkID0gXCJob3Vyc0NvbnRlbnRDb250YWluZXJcIjtcclxuICAgIGhvdXJzQ29udGFpbmVyLmFwcGVuZChob3Vyc0NvbnRlbnRDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGRheXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkYXlzLmlkID0gXCJkYXlzXCI7XHJcbiAgICBkYXlzLmlubmVyVGV4dCA9IGRheVJhbmdlO1xyXG4gICAgaG91cnNDb250ZW50Q29udGFpbmVyLmFwcGVuZChkYXlzKTtcclxuXHJcbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGhvdXJzLmlkID0gXCJob3Vyc1wiO1xyXG4gICAgaG91cnMuaW5uZXJUZXh0ID0gaG91clJhbmdlO1xyXG4gICAgaG91cnNDb250ZW50Q29udGFpbmVyLmFwcGVuZChob3Vycyk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0Q29udGVudDtcclxuIiwiY29uc3QgY3JlYXRlSG9tZUNvbnRlbnQgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgaG9tZUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaG9tZUNvbnRlbnRDb250YWluZXIuaWQgPSBcImhvbWVDb250ZW50Q29udGFpbmVyXCI7XHJcbiAgICBcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgaWYgKGNvbnRlbnQuY2hpbGRFbGVtZW50Q291bnQgPT0gMykge1xyXG4gICAgICAgIGNvbnRlbnQuY2hpbGRyZW4uaXRlbSgxKS5yZXBsYWNlV2l0aChob21lQ29udGVudENvbnRhaW5lcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hcHBlbmQoaG9tZUNvbnRlbnRDb250YWluZXIpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG5cclxuICAgIGNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhvbWVDb250ZW50LmlkID0gXCJob21lQ29udGVudFwiO1xyXG4gICAgaG9tZUNvbnRlbnRDb250YWluZXIuYXBwZW5kKGhvbWVDb250ZW50KTtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSBcIkVYUEVSSUVOQ0UgS1lMRSdTIEtJVENIRU4uXCI7XHJcbiAgICBob21lQ29udGVudC5hcHBlbmQodGl0bGUpO1xyXG4gICAgY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHN1YlRpdGxlLmlubmVyVGV4dCA9IFwiRU5KT1kgRk9PRCBGUk9NIEFMTCBBUk9VTkQgVEhFIFdPUkxELlwiXHJcbiAgICBob21lQ29udGVudC5hcHBlbmQoc3ViVGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGhvbWVNZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGhvbWVNZW51QnV0dG9uLmlkID0gXCJob21lTWVudUJ1dHRvblwiO1xyXG4gICAgaG9tZU1lbnVCdXR0b24uaW5uZXJUZXh0ID0gXCJTRUUgTUVOVVwiO1xyXG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kKGhvbWVNZW51QnV0dG9uKTtcclxuXHJcbiAgICBjb25zdCBob21lQWJvdXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgaG9tZUFib3V0QnV0dG9uLmlkID0gXCJob21lQ29udGFjdEJ1dHRvblwiO1xyXG4gICAgaG9tZUFib3V0QnV0dG9uLmlubmVyVGV4dCA9IFwiQ09OVEFDVFwiO1xyXG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kKGhvbWVBYm91dEJ1dHRvbik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWVDb250ZW50OyIsImNvbnN0IGNyZWF0ZU1lbnVDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWVudUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWVudUNvbnRlbnRDb250YWluZXIuaWQgPSBcIm1lbnVDb250ZW50Q29udGFpbmVyXCI7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIGNvbnRlbnQuY2hpbGRyZW4uaXRlbSgxKS5yZXBsYWNlV2l0aChtZW51Q29udGVudENvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudS5pZCA9IFwibWVudVwiO1xyXG4gICAgbWVudUNvbnRlbnRDb250YWluZXIuYXBwZW5kKG1lbnUpO1xyXG5cclxuXHJcbiAgICBjb25zdCBoZWFkZXI9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgaGVhZGVyLmlkID0gXCJtZW51SGVhZGVyXCI7XHJcbiAgICBoZWFkZXIuaW5uZXJUZXh0ID0gXCJGT09EIE1FTlVcIlxyXG4gICAgbWVudS5hcHBlbmQoaGVhZGVyKTtcclxuXHJcblxyXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgaW1hZ2Uuc3JjID0gXCIuL2ltYWdlcy9sb2dvLnBuZ1wiO1xyXG4gICAgaW1hZ2UuYWx0ID0gXCJsb2dvXCI7XHJcbiAgICBpbWFnZS5pZCA9IFwibG9nbzJcIjtcclxuICAgIGhlYWRlci5hcHBlbmQoaW1hZ2UpO1xyXG5cclxuXHJcblxyXG4gICAgY3JlYXRlTWVudUNvbHVtbihcImFwcGV0aXplclwiLCBtZW51KTtcclxuICAgIGNyZWF0ZU1lbnVDb2x1bW4oXCJtYWluXCIsIG1lbnUpO1xyXG4gICAgY3JlYXRlTWVudUNvbHVtbihcImRyaW5rc1wiLCBtZW51KTtcclxuICAgIGNyZWF0ZU1lbnVDb2x1bW4oXCJkZXNzZXJ0XCIsIG1lbnUpO1xyXG5cclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiYXBwZXRpemVyXCIsIFwiQnJlYWRcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQ0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJhcHBldGl6ZXJcIiwgXCJCcmVhZFwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImFwcGV0aXplclwiLCBcIkJyZWFkXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiYXBwZXRpemVyXCIsIFwiQnJlYWRcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQ0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJhcHBldGl6ZXJcIiwgXCJCcmVhZFwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImFwcGV0aXplclwiLCBcIkJyZWFkXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiYXBwZXRpemVyXCIsIFwiQnJlYWRcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQ0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJhcHBldGl6ZXJcIiwgXCJCcmVhZFwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImFwcGV0aXplclwiLCBcIkJyZWFkXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiYXBwZXRpemVyXCIsIFwiQnJlYWRcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQ0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJhcHBldGl6ZXJcIiwgXCJCcmVhZFwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDQuNTBcIik7XHJcblxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJtYWluXCIsIFwiQ2hlZXNlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIm1haW5cIiwgXCJDaGVlc2VcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwibWFpblwiLCBcIkNoZWVzZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJtYWluXCIsIFwiQ2hlZXNlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIm1haW5cIiwgXCJDaGVlc2VcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwibWFpblwiLCBcIkNoZWVzZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJtYWluXCIsIFwiQ2hlZXNlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIm1haW5cIiwgXCJDaGVlc2VcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwibWFpblwiLCBcIkNoZWVzZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJtYWluXCIsIFwiQ2hlZXNlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIm1haW5cIiwgXCJDaGVlc2VcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuXHJcbiAgICBjcmVhdGVNZW51SXRlbShcImRyaW5rc1wiLCBcIldhdGVyXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImRyaW5rc1wiLCBcIldhdGVyXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImRyaW5rc1wiLCBcIldhdGVyXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImRyaW5rc1wiLCBcIldhdGVyXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImRyaW5rc1wiLCBcIldhdGVyXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcblxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJkZXNzZXJ0XCIsIFwiQ2FrZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJkZXNzZXJ0XCIsIFwiQ2FrZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJkZXNzZXJ0XCIsIFwiQ2FrZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJkZXNzZXJ0XCIsIFwiQ2FrZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJkZXNzZXJ0XCIsIFwiQ2FrZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDE0LjUwXCIpO1xyXG5cclxufVxyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZU1lbnVDb2x1bW4gPSAodHlwZSwgbWVudSkgPT4ge1xyXG4gICAgY29uc3QgbWVudVR5cGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVUeXBlQ29udGFpbmVyLmlkID0gdHlwZSArIFwiQ29udGFpbmVyXCI7XHJcbiAgICBtZW51VHlwZUNvbnRhaW5lci5jbGFzc0xpc3QgPSBcIm1lbnVUeXBlQ29udGFpbmVyXCJcclxuICAgIG1lbnUuYXBwZW5kKG1lbnVUeXBlQ29udGFpbmVyKVxyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdCA9IFwibWVudVR5cGVIZWFkZXJcIjtcclxuICAgIGhlYWRlci5pbm5lclRleHQgPSB0eXBlLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBtZW51VHlwZUNvbnRhaW5lci5hcHBlbmQoaGVhZGVyKTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZU1lbnVJdGVtID0gKHR5cGUsIG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSkgPT4ge1xyXG4gICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QgPSBcIml0ZW1Db250YWluZXJcIjtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgdHlwZSArIFwiQ29udGFpbmVyXCIpLmFwcGVuZChpdGVtQ29udGFpbmVyKVxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGl0ZW1OYW1lLmNsYXNzTGlzdCA9IFwiaXRlbU5hbWVcIjtcclxuICAgIGl0ZW1OYW1lLmlubmVyVGV4dCA9IG5hbWU7XHJcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZChpdGVtTmFtZSlcclxuXHJcbiAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0ID0gXCJpdGVtRGVzY3JpcHRpb25cIjtcclxuICAgIGl0ZW1EZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXNjcmlwdGlvbjtcclxuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kKGl0ZW1EZXNjcmlwdGlvbilcclxuXHJcbiAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpdGVtUHJpY2UuY2xhc3NMaXN0ID0gXCJpdGVtUHJpY2VcIjtcclxuICAgIGl0ZW1QcmljZS5pbm5lclRleHQgPSBwcmljZTtcclxuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kKGl0ZW1QcmljZSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51Q29udGVudDtcclxuIiwiaW1wb3J0IGNyZWF0ZUhvbWVDb250ZW50IGZyb20gXCIuL2hvbWVcIlxyXG5cclxuY29uc3QgY3JlYXRlTmF2ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICAgIG5hdi5pZCA9ICduYXZCYXInO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFwcGVuZChuYXYpO1xyXG4gICAgY3JlYXRlSGVhZGVyKG5hdik7XHJcbiAgICBjcmVhdGVUYWJCdXR0b25Db250YWluZXIobmF2KTtcclxuICAgIFxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAobmF2KSA9PiB7XHJcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBpbWFnZS5zcmMgPSBcIi4vaW1hZ2VzL2xvZ28ucG5nXCI7XHJcbiAgICBpbWFnZS5hbHQgPSBcImxvZ29cIjtcclxuICAgIGltYWdlLmlkID0gXCJsb2dvXCI7XHJcbiAgICBuYXYuYXBwZW5kKGltYWdlKTtcclxufVxyXG5cclxuY29uc3QgY3JlYXRlVGFiQnV0dG9uQ29udGFpbmVyID0gKG5hdikgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5pZCA9IFwidGFic0NvbnRhaW5lclwiO1xyXG4gICAgbmF2LmFwcGVuZChjb250YWluZXIpO1xyXG4gICAgY3JlYXRlVGFiQnV0dG9uKFwiSG9tZVwiLCBjb250YWluZXIpO1xyXG4gICAgY3JlYXRlVGFiQnV0dG9uKFwiTWVudVwiLCBjb250YWluZXIpO1xyXG4gICAgY3JlYXRlVGFiQnV0dG9uKFwiQ29udGFjdFwiLCBjb250YWluZXIpO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVUYWJCdXR0b24gPSAobmFtZSwgY29udGFpbmVyKSA9PiB7XHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnV0dG9uLmlkID0gbmFtZS50b0xvd2VyQ2FzZSgpICsgXCJCdXR0b25cIjtcclxuICAgIGJ1dHRvbi5pbm5lclRleHQgPSBuYW1lLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKGJ1dHRvbik7XHJcbiAgICBjb25zdCBob21lVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWVCdXR0b24nKTtcclxuICAgIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxufVxyXG5cclxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hcHBlbmQoZm9vdGVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XHJcbiAgICBjcmVhdGVOYXYoKTtcclxuICAgIGNyZWF0ZUhvbWVDb250ZW50KCk7XHJcbiAgICBjcmVhdGVGb290ZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZFBhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZFBhZ2UgZnJvbSBcIi4vbW9kdWxlcy9wYWdlLWxvYWRcIjtcclxuaW1wb3J0IGNyZWF0ZU1lbnVDb250ZW50IGZyb20gXCIuL21vZHVsZXMvbWVudVwiXHJcbmltcG9ydCBjcmVhdGVDb250YWN0Q29udGVudCBmcm9tIFwiLi9tb2R1bGVzL2NvbnRhY3RcIlxyXG5pbXBvcnQgY3JlYXRlSG9tZUNvbnRlbnQgZnJvbSBcIi4vbW9kdWxlcy9ob21lXCJcclxuXHJcbmxvYWRQYWdlKCk7XHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmlkLmluY2x1ZGVzKFwiQnV0dG9uXCIpKSB7XHJcbiAgICAgICAgdGFiU3dpdGNoKGUudGFyZ2V0LmlkKTtcclxuICAgICAgICB0YWJIaWdobGlnaHQoZSk7XHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCB0YWJTd2l0Y2ggPSAodGFiKSA9PiB7XHJcbiAgICBsZXQgYSA9IHRhYi5yZXBsYWNlKCdCdXR0b24nLCAnJyk7XHJcbiAgICBpZiAoYSA9PSBcIm1lbnVcIiB8fCBhID09IFwiaG9tZU1lbnVcIikge1xyXG4gICAgICAgIGNyZWF0ZU1lbnVDb250ZW50KCk7XHJcbiAgICB9IGVsc2UgaWYgKGEgPT0gXCJjb250YWN0XCIgfHwgYSA9PSBcImhvbWVDb250YWN0XCIpIHtcclxuICAgICAgICBjcmVhdGVDb250YWN0Q29udGVudCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjcmVhdGVIb21lQ29udGVudCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB0YWJIaWdobGlnaHQgPSAoZSkgPT4ge1xyXG4gICAgbGV0IGNoaWxkcmVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWJzQ29udGFpbmVyXCIpLmNoaWxkTm9kZXNcclxuICAgIGNoaWxkcmVuLmZvckVhY2gobGluayA9PiBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuXHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==