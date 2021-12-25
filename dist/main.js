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
    createMenuItem("main", "Cheese", "Sed ut perspiciatis unde omnis iste", "$14.50");
   

    createMenuItem("drinks", "Water", "Sed ut perspiciatis unde omnis iste", "$14.50");
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
    githubIcon.href = "https://github.com/kylejcho"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsb0JBQW9CLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3JGcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7O0FDcENoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzVHSztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7O1VDMUR2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjJDO0FBQ0c7QUFDTTtBQUNOO0FBQzlDO0FBQ0EsOERBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQWlCO0FBQ3pCLE1BQU07QUFDTixRQUFRLDREQUFvQjtBQUM1QixNQUFNO0FBQ04sUUFBUSx5REFBaUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZUNvbnRhY3RDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFjdENvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFjdENvbnRlbnRDb250YWluZXIuaWQgPSBcImNvbnRhY3RDb250ZW50Q29udGFpbmVyXCI7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIGNvbnRlbnQuY2hpbGRyZW4uaXRlbSgxKS5yZXBsYWNlV2l0aChjb250YWN0Q29udGVudENvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgY29udGFjdENvbnRhaW5lckJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3RDb250YWluZXJCYWNrZ3JvdW5kLmlkID0gXCJjb250YWN0Q29udGFpbmVyQmFja2dyb3VuZFwiO1xyXG4gICAgY29udGFjdENvbnRlbnRDb250YWluZXIuYXBwZW5kKGNvbnRhY3RDb250YWluZXJCYWNrZ3JvdW5kKTtcclxuXHJcbiAgICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0Q29udGFpbmVyLmlkID0gXCJjb250YWN0Q29udGFpbmVyXCI7XHJcbiAgICBjb250YWN0Q29udGFpbmVyQmFja2dyb3VuZC5hcHBlbmQoY29udGFjdENvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGhlYWRlci5pZCA9IFwiY29udGFjdEhlYWRlclwiO1xyXG4gICAgaGVhZGVyLmlubmVyVGV4dCA9IFwiQ09OVEFDVFwiXHJcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZChoZWFkZXIpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RNYXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3RNYXBDb250YWluZXIuaWQgPSBcImNvbnRhY3RNYXBDb250YWluZXJcIjtcclxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kKGNvbnRhY3RNYXBDb250YWluZXIpO1xyXG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGEuaW5uZXJUZXh0ID0gKFwiS1lMRSdTXCIpO1xyXG4gICAgYS5pZCA9IFwiYVwiXHJcbiAgICBjb250YWN0TWFwQ29udGFpbmVyLmFwcGVuZChhKTtcclxuICAgIGNvbnN0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBiLmlubmVyVGV4dCA9IChcIktJVENIRU5cIik7XHJcbiAgICBiLmlkID0gXCJiXCJcclxuICAgIGNvbnRhY3RNYXBDb250YWluZXIuYXBwZW5kKGIpXHJcblxyXG4gICAgY29uc3QgY29udGFjdEluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3RJbmZvQ29udGFpbmVyLmlkID0gXCJjb250YWN0SW5mb0NvbnRhaW5lclwiO1xyXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmQoY29udGFjdEluZm9Db250YWluZXIpO1xyXG5cclxuICAgIGNyZWF0ZUNvbnRhY3RFbGVtZW50KFwiYWRkcmVzc0hlYWRlclwiLCBcIktZTEUnUyBLSVRDSEVOXCIpO1xyXG4gICAgY3JlYXRlQ29udGFjdEVsZW1lbnQoXCJhZGRyZXNzXCIsIFwiNjYgU2lsdmVyIFNwZWFyIFN0LlxcbkluZGlhbmFwb2xpcywgSU4gNDYyMDFcIik7XHJcbiAgICBjcmVhdGVDb250YWN0RWxlbWVudChcInBob25lXCIsIFwiKDI0MCktNTI1LTY4MzRcIik7XHJcbiAgICBjcmVhdGVDb250YWN0RWxlbWVudChcImVtYWlsXCIsIFwia3lsZXNraXRjaGVuQHJlc3RhdXJhbnQuY29tXCIpO1xyXG5cclxuICAgIGNyZWF0ZUhvdXJzQ29udGFpbmVyKChjb250YWN0SW5mb0NvbnRhaW5lcikpO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVDb250YWN0RWxlbWVudCA9IChpZCwgY29udGVudCkgPT4ge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZGl2LmlkID0gaWQ7XHJcbiAgICBkaXYuaW5uZXJUZXh0ID0gY29udGVudDtcclxuICAgIGNvbnRhY3RJbmZvQ29udGFpbmVyLmFwcGVuZChkaXYpXHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUhvdXJzQ29udGFpbmVyID0gKGNvbnRhY3RJbmZvQ29udGFpbmVyKSA9PiB7XHJcbiAgICBjb25zdCBob3Vyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaG91cnNDb250YWluZXIuaWQgPSBcImhvdXJzQ29udGFpbmVyXCI7XHJcbiAgICBjb250YWN0SW5mb0NvbnRhaW5lci5hcHBlbmQoaG91cnNDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGhvdXJzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaG91cnNIZWFkZXIuaWQgPSBcImhvdXJzSGVhZGVyXCI7XHJcbiAgICBob3Vyc0hlYWRlci5pbm5lclRleHQgPSBcIkhPVVJTXCI7XHJcbiAgICBob3Vyc0NvbnRhaW5lci5hcHBlbmQoaG91cnNIZWFkZXIpO1xyXG5cclxuICAgIGNyZWF0ZUhvdXJzQ29udGVudChcIk1vbmRheSAtIFdlZG5lc2RheTpcIiwgXCIxMEFNIC0gMTJQTVwiLCBob3Vyc0NvbnRhaW5lcik7XHJcbiAgICBjcmVhdGVIb3Vyc0NvbnRlbnQoXCJUaHVyZGF5IC0gRnJpZGF5OlwiLCBcIjlBTSAtIDEyUE1cIiwgaG91cnNDb250YWluZXIpO1xyXG4gICAgY3JlYXRlSG91cnNDb250ZW50KFwiU2F0dXJkYXk6XCIsIFwiMVBNIC0gMTJQTVwiLCBob3Vyc0NvbnRhaW5lcik7XHJcbiAgICBjcmVhdGVIb3Vyc0NvbnRlbnQoXCJTdW5kYXk6XCIsIFwiMVBNIC0gMTBQTVwiLCBob3Vyc0NvbnRhaW5lcik7XHJcblxyXG5cclxufVxyXG5cclxuY29uc3QgY3JlYXRlSG91cnNDb250ZW50ID0gKGRheVJhbmdlLCBob3VyUmFuZ2UsIGhvdXJzQ29udGFpbmVyKSA9PiB7XHJcbiAgICBjb25zdCBob3Vyc0NvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhvdXJzQ29udGVudENvbnRhaW5lci5pZCA9IFwiaG91cnNDb250ZW50Q29udGFpbmVyXCI7XHJcbiAgICBob3Vyc0NvbnRhaW5lci5hcHBlbmQoaG91cnNDb250ZW50Q29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBkYXlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZGF5cy5pZCA9IFwiZGF5c1wiO1xyXG4gICAgZGF5cy5pbm5lclRleHQgPSBkYXlSYW5nZTtcclxuICAgIGhvdXJzQ29udGVudENvbnRhaW5lci5hcHBlbmQoZGF5cyk7XHJcblxyXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBob3Vycy5pZCA9IFwiaG91cnNcIjtcclxuICAgIGhvdXJzLmlubmVyVGV4dCA9IGhvdXJSYW5nZTtcclxuICAgIGhvdXJzQ29udGVudENvbnRhaW5lci5hcHBlbmQoaG91cnMpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdENvbnRlbnQ7XHJcbiIsImNvbnN0IGNyZWF0ZUhvbWVDb250ZW50ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGhvbWVDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhvbWVDb250ZW50Q29udGFpbmVyLmlkID0gXCJob21lQ29udGVudENvbnRhaW5lclwiO1xyXG4gICAgXHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIGlmIChjb250ZW50LmNoaWxkRWxlbWVudENvdW50ID09IDMpIHtcclxuICAgICAgICBjb250ZW50LmNoaWxkcmVuLml0ZW0oMSkucmVwbGFjZVdpdGgoaG9tZUNvbnRlbnRDb250YWluZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kKGhvbWVDb250ZW50Q29udGFpbmVyKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcbiAgICBjb25zdCBob21lQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBob21lQ29udGVudC5pZCA9IFwiaG9tZUNvbnRlbnRcIjtcclxuICAgIGhvbWVDb250ZW50Q29udGFpbmVyLmFwcGVuZChob21lQ29udGVudCk7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJFWFBFUklFTkNFIEtZTEUnUyBLSVRDSEVOLlwiO1xyXG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kKHRpdGxlKTtcclxuICAgIGNvbnN0IHN1YlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBzdWJUaXRsZS5pbm5lclRleHQgPSBcIkVOSk9ZIEZPT0QgRlJPTSBBTEwgQVJPVU5EIFRIRSBXT1JMRC5cIlxyXG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kKHN1YlRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBob21lTWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBob21lTWVudUJ1dHRvbi5pZCA9IFwiaG9tZU1lbnVCdXR0b25cIjtcclxuICAgIGhvbWVNZW51QnV0dG9uLmlubmVyVGV4dCA9IFwiU0VFIE1FTlVcIjtcclxuICAgIGhvbWVDb250ZW50LmFwcGVuZChob21lTWVudUJ1dHRvbik7XHJcblxyXG4gICAgY29uc3QgaG9tZUFib3V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGhvbWVBYm91dEJ1dHRvbi5pZCA9IFwiaG9tZUNvbnRhY3RCdXR0b25cIjtcclxuICAgIGhvbWVBYm91dEJ1dHRvbi5pbm5lclRleHQgPSBcIkNPTlRBQ1RcIjtcclxuICAgIGhvbWVDb250ZW50LmFwcGVuZChob21lQWJvdXRCdXR0b24pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lQ29udGVudDsiLCJjb25zdCBjcmVhdGVNZW51Q29udGVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1lbnVDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1lbnVDb250ZW50Q29udGFpbmVyLmlkID0gXCJtZW51Q29udGVudENvbnRhaW5lclwiO1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmNoaWxkcmVuLml0ZW0oMSkucmVwbGFjZVdpdGgobWVudUNvbnRlbnRDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnUuaWQgPSBcIm1lbnVcIjtcclxuICAgIG1lbnVDb250ZW50Q29udGFpbmVyLmFwcGVuZChtZW51KTtcclxuXHJcblxyXG4gICAgY29uc3QgaGVhZGVyPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGhlYWRlci5pZCA9IFwibWVudUhlYWRlclwiO1xyXG4gICAgaGVhZGVyLmlubmVyVGV4dCA9IFwiRk9PRCBNRU5VXCJcclxuICAgIG1lbnUuYXBwZW5kKGhlYWRlcik7XHJcblxyXG5cclxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGltYWdlLnNyYyA9IFwiLi9pbWFnZXMvbG9nby5wbmdcIjtcclxuICAgIGltYWdlLmFsdCA9IFwibG9nb1wiO1xyXG4gICAgaW1hZ2UuaWQgPSBcImxvZ28yXCI7XHJcbiAgICBoZWFkZXIuYXBwZW5kKGltYWdlKTtcclxuXHJcblxyXG5cclxuICAgIGNyZWF0ZU1lbnVDb2x1bW4oXCJhcHBldGl6ZXJcIiwgbWVudSk7XHJcbiAgICBjcmVhdGVNZW51Q29sdW1uKFwibWFpblwiLCBtZW51KTtcclxuICAgIGNyZWF0ZU1lbnVDb2x1bW4oXCJkcmlua3NcIiwgbWVudSk7XHJcbiAgICBjcmVhdGVNZW51Q29sdW1uKFwiZGVzc2VydFwiLCBtZW51KTtcclxuXHJcbiAgICBjcmVhdGVNZW51SXRlbShcImFwcGV0aXplclwiLCBcIkJyZWFkXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGVcIiwgXCIkNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiYXBwZXRpemVyXCIsIFwiQnJlYWRcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZVwiLCBcIiQ0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJhcHBldGl6ZXJcIiwgXCJCcmVhZFwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlXCIsIFwiJDQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImFwcGV0aXplclwiLCBcIkJyZWFkXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGVcIiwgXCIkNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiYXBwZXRpemVyXCIsIFwiQnJlYWRcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZVwiLCBcIiQ0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJhcHBldGl6ZXJcIiwgXCJCcmVhZFwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlXCIsIFwiJDQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImFwcGV0aXplclwiLCBcIkJyZWFkXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGVcIiwgXCIkNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiYXBwZXRpemVyXCIsIFwiQnJlYWRcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZVwiLCBcIiQ0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJhcHBldGl6ZXJcIiwgXCJCcmVhZFwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlXCIsIFwiJDQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImFwcGV0aXplclwiLCBcIkJyZWFkXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGVcIiwgXCIkNC41MFwiKTtcclxuICAgIFxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJtYWluXCIsIFwiQ2hlZXNlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGVcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIm1haW5cIiwgXCJDaGVlc2VcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZVwiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwibWFpblwiLCBcIkNoZWVzZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJtYWluXCIsIFwiQ2hlZXNlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGVcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIm1haW5cIiwgXCJDaGVlc2VcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZVwiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwibWFpblwiLCBcIkNoZWVzZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJtYWluXCIsIFwiQ2hlZXNlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGVcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIm1haW5cIiwgXCJDaGVlc2VcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZVwiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwibWFpblwiLCBcIkNoZWVzZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJtYWluXCIsIFwiQ2hlZXNlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGVcIiwgXCIkMTQuNTBcIik7XHJcbiAgIFxyXG5cclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiZHJpbmtzXCIsIFwiV2F0ZXJcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZVwiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiZHJpbmtzXCIsIFwiV2F0ZXJcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZVwiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiZHJpbmtzXCIsIFwiV2F0ZXJcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZVwiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiZHJpbmtzXCIsIFwiV2F0ZXJcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZVwiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiZHJpbmtzXCIsIFwiV2F0ZXJcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZVwiLCBcIiQxNC41MFwiKTtcclxuXHJcbiAgICBjcmVhdGVNZW51SXRlbShcImRlc3NlcnRcIiwgXCJDYWtlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGVcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImRlc3NlcnRcIiwgXCJDYWtlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGVcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImRlc3NlcnRcIiwgXCJDYWtlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGVcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImRlc3NlcnRcIiwgXCJDYWtlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGVcIiwgXCIkMTQuNTBcIik7XHJcblxyXG59XHJcblxyXG5cclxuY29uc3QgY3JlYXRlTWVudUNvbHVtbiA9ICh0eXBlLCBtZW51KSA9PiB7XHJcbiAgICBjb25zdCBtZW51VHlwZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudVR5cGVDb250YWluZXIuaWQgPSB0eXBlICsgXCJDb250YWluZXJcIjtcclxuICAgIG1lbnVUeXBlQ29udGFpbmVyLmNsYXNzTGlzdCA9IFwibWVudVR5cGVDb250YWluZXJcIlxyXG4gICAgbWVudS5hcHBlbmQobWVudVR5cGVDb250YWluZXIpXHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0ID0gXCJtZW51VHlwZUhlYWRlclwiO1xyXG4gICAgaGVhZGVyLmlubmVyVGV4dCA9IHR5cGUudG9VcHBlckNhc2UoKTtcclxuICAgIG1lbnVUeXBlQ29udGFpbmVyLmFwcGVuZChoZWFkZXIpO1xyXG59XHJcblxyXG5cclxuY29uc3QgY3JlYXRlTWVudUl0ZW0gPSAodHlwZSwgbmFtZSwgZGVzY3JpcHRpb24sIHByaWNlKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdCA9IFwiaXRlbUNvbnRhaW5lclwiO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyB0eXBlICsgXCJDb250YWluZXJcIikuYXBwZW5kKGl0ZW1Db250YWluZXIpXHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaXRlbU5hbWUuY2xhc3NMaXN0ID0gXCJpdGVtTmFtZVwiO1xyXG4gICAgaXRlbU5hbWUuaW5uZXJUZXh0ID0gbmFtZTtcclxuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kKGl0ZW1OYW1lKVxyXG5cclxuICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QgPSBcIml0ZW1EZXNjcmlwdGlvblwiO1xyXG4gICAgaXRlbURlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgaXRlbUNvbnRhaW5lci5hcHBlbmQoaXRlbURlc2NyaXB0aW9uKVxyXG5cclxuICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QgPSBcIml0ZW1QcmljZVwiO1xyXG4gICAgaXRlbVByaWNlLmlubmVyVGV4dCA9IHByaWNlO1xyXG4gICAgaXRlbUNvbnRhaW5lci5hcHBlbmQoaXRlbVByaWNlKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnVDb250ZW50O1xyXG4iLCJpbXBvcnQgY3JlYXRlSG9tZUNvbnRlbnQgZnJvbSBcIi4vaG9tZVwiXHJcblxyXG5jb25zdCBjcmVhdGVOYXYgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gICAgbmF2LmlkID0gJ25hdkJhcic7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kKG5hdik7XHJcbiAgICBjcmVhdGVIZWFkZXIobmF2KTtcclxuICAgIGNyZWF0ZVRhYkJ1dHRvbkNvbnRhaW5lcihuYXYpO1xyXG4gICAgXHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUhlYWRlciA9IChuYXYpID0+IHtcclxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGltYWdlLnNyYyA9IFwiLi9pbWFnZXMvbG9nby5wbmdcIjtcclxuICAgIGltYWdlLmFsdCA9IFwibG9nb1wiO1xyXG4gICAgaW1hZ2UuaWQgPSBcImxvZ29cIjtcclxuICAgIG5hdi5hcHBlbmQoaW1hZ2UpO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVUYWJCdXR0b25Db250YWluZXIgPSAobmF2KSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmlkID0gXCJ0YWJzQ29udGFpbmVyXCI7XHJcbiAgICBuYXYuYXBwZW5kKGNvbnRhaW5lcik7XHJcbiAgICBjcmVhdGVUYWJCdXR0b24oXCJIb21lXCIsIGNvbnRhaW5lcik7XHJcbiAgICBjcmVhdGVUYWJCdXR0b24oXCJNZW51XCIsIGNvbnRhaW5lcik7XHJcbiAgICBjcmVhdGVUYWJCdXR0b24oXCJDb250YWN0XCIsIGNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVRhYkJ1dHRvbiA9IChuYW1lLCBjb250YWluZXIpID0+IHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidXR0b24uaWQgPSBuYW1lLnRvTG93ZXJDYXNlKCkgKyBcIkJ1dHRvblwiO1xyXG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IG5hbWUudG9VcHBlckNhc2UoKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQoYnV0dG9uKTtcclxuICAgIGNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZUJ1dHRvbicpO1xyXG4gICAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFwcGVuZChmb290ZXIpO1xyXG5cclxuICAgIGNvbnN0IGZvb3Rlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBmb290ZXJOYW1lLmlkID0gXCJmb290ZXJOYW1lXCI7XHJcbiAgICBmb290ZXJOYW1lLmlubmVyVGV4dCA9ICdDb3B5cmlnaHQgwqkgMjAyMSBreWxlamNobyc7XHJcbiAgICBmb290ZXIuYXBwZW5kKGZvb3Rlck5hbWUpO1xyXG5cclxuICAgIGNvbnN0IGdpdGh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBnaXRodWJJY29uLmNsYXNzTmFtZSA9IFwiZmFiIGZhLWdpdGh1YlwiO1xyXG4gICAgZ2l0aHViSWNvbi5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20va3lsZWpjaG9cIlxyXG4gICAgZm9vdGVyLmFwcGVuZChnaXRodWJJY29uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XHJcbiAgICBjcmVhdGVOYXYoKTtcclxuICAgIGNyZWF0ZUhvbWVDb250ZW50KCk7XHJcbiAgICBjcmVhdGVGb290ZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZFBhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZFBhZ2UgZnJvbSBcIi4vbW9kdWxlcy9wYWdlLWxvYWRcIjtcclxuaW1wb3J0IGNyZWF0ZU1lbnVDb250ZW50IGZyb20gXCIuL21vZHVsZXMvbWVudVwiXHJcbmltcG9ydCBjcmVhdGVDb250YWN0Q29udGVudCBmcm9tIFwiLi9tb2R1bGVzL2NvbnRhY3RcIlxyXG5pbXBvcnQgY3JlYXRlSG9tZUNvbnRlbnQgZnJvbSBcIi4vbW9kdWxlcy9ob21lXCJcclxuXHJcbmxvYWRQYWdlKCk7XHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmlkLmluY2x1ZGVzKFwiQnV0dG9uXCIpKSB7XHJcbiAgICAgICAgdGFiU3dpdGNoKGUudGFyZ2V0LmlkKTtcclxuICAgICAgICB0YWJIaWdobGlnaHQoZSk7XHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCB0YWJTd2l0Y2ggPSAodGFiKSA9PiB7XHJcbiAgICBsZXQgYSA9IHRhYi5yZXBsYWNlKCdCdXR0b24nLCAnJyk7XHJcbiAgICBpZiAoYSA9PSBcIm1lbnVcIiB8fCBhID09IFwiaG9tZU1lbnVcIikge1xyXG4gICAgICAgIGNyZWF0ZU1lbnVDb250ZW50KCk7XHJcbiAgICB9IGVsc2UgaWYgKGEgPT0gXCJjb250YWN0XCIgfHwgYSA9PSBcImhvbWVDb250YWN0XCIpIHtcclxuICAgICAgICBjcmVhdGVDb250YWN0Q29udGVudCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjcmVhdGVIb21lQ29udGVudCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB0YWJIaWdobGlnaHQgPSAoZSkgPT4ge1xyXG4gICAgbGV0IGNoaWxkcmVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWJzQ29udGFpbmVyXCIpLmNoaWxkTm9kZXNcclxuICAgIGNoaWxkcmVuLmZvckVhY2gobGluayA9PiBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuXHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==