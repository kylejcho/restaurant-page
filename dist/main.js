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

    const contactContainer = document.createElement('div');
    contactContainer.id = "contactContainer";
    contactContentContainer.append(contactContainer);

    const header= document.createElement('header');
    header.id = "contactHeader";
    header.innerText = "CONTACT"
    contactContainer.append(header);

    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLG9CQUFvQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNsQnBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsaUJBQWlCOzs7Ozs7Ozs7Ozs7OztBQ3BDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGlCQUFpQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUdLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7O1VDN0N2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjJDO0FBQ0c7QUFDTTtBQUNOO0FBQzlDO0FBQ0EsOERBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQWlCO0FBQ3pCLE1BQU07QUFDTixRQUFRLDREQUFvQjtBQUM1QixNQUFNO0FBQ04sUUFBUSx5REFBaUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZUNvbnRhY3RDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFjdENvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFjdENvbnRlbnRDb250YWluZXIuaWQgPSBcImNvbnRhY3RDb250ZW50Q29udGFpbmVyXCI7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIGNvbnRlbnQuY2hpbGRyZW4uaXRlbSgxKS5yZXBsYWNlV2l0aChjb250YWN0Q29udGVudENvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdENvbnRhaW5lci5pZCA9IFwiY29udGFjdENvbnRhaW5lclwiO1xyXG4gICAgY29udGFjdENvbnRlbnRDb250YWluZXIuYXBwZW5kKGNvbnRhY3RDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIuaWQgPSBcImNvbnRhY3RIZWFkZXJcIjtcclxuICAgIGhlYWRlci5pbm5lclRleHQgPSBcIkNPTlRBQ1RcIlxyXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmQoaGVhZGVyKTtcclxuXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdENvbnRlbnQ7XHJcbiIsImNvbnN0IGNyZWF0ZUhvbWVDb250ZW50ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGhvbWVDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhvbWVDb250ZW50Q29udGFpbmVyLmlkID0gXCJob21lQ29udGVudENvbnRhaW5lclwiO1xyXG4gICAgXHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIGlmIChjb250ZW50LmNoaWxkRWxlbWVudENvdW50ID09IDMpIHtcclxuICAgICAgICBjb250ZW50LmNoaWxkcmVuLml0ZW0oMSkucmVwbGFjZVdpdGgoaG9tZUNvbnRlbnRDb250YWluZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kKGhvbWVDb250ZW50Q29udGFpbmVyKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcbiAgICBjb25zdCBob21lQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBob21lQ29udGVudC5pZCA9IFwiaG9tZUNvbnRlbnRcIjtcclxuICAgIGhvbWVDb250ZW50Q29udGFpbmVyLmFwcGVuZChob21lQ29udGVudCk7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJFWFBFUklFTkNFIEtZTEUnUyBLSVRDSEVOLlwiO1xyXG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kKHRpdGxlKTtcclxuICAgIGNvbnN0IHN1YlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBzdWJUaXRsZS5pbm5lclRleHQgPSBcIkVOSk9ZIEZPT0QgRlJPTSBBTEwgQVJPVU5EIFRIRSBXT1JMRC5cIlxyXG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kKHN1YlRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBob21lTWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBob21lTWVudUJ1dHRvbi5pZCA9IFwiaG9tZU1lbnVCdXR0b25cIjtcclxuICAgIGhvbWVNZW51QnV0dG9uLmlubmVyVGV4dCA9IFwiU0VFIE1FTlVcIjtcclxuICAgIGhvbWVDb250ZW50LmFwcGVuZChob21lTWVudUJ1dHRvbik7XHJcblxyXG4gICAgY29uc3QgaG9tZUFib3V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGhvbWVBYm91dEJ1dHRvbi5pZCA9IFwiaG9tZUFib3V0QnV0dG9uXCI7XHJcbiAgICBob21lQWJvdXRCdXR0b24uaW5uZXJUZXh0ID0gXCJDT05UQUNUXCI7XHJcbiAgICBob21lQ29udGVudC5hcHBlbmQoaG9tZUFib3V0QnV0dG9uKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZUNvbnRlbnQ7IiwiY29uc3QgY3JlYXRlTWVudUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtZW51Q29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZW51Q29udGVudENvbnRhaW5lci5pZCA9IFwibWVudUNvbnRlbnRDb250YWluZXJcIjtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgY29udGVudC5jaGlsZHJlbi5pdGVtKDEpLnJlcGxhY2VXaXRoKG1lbnVDb250ZW50Q29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51LmlkID0gXCJtZW51XCI7XHJcbiAgICBtZW51Q29udGVudENvbnRhaW5lci5hcHBlbmQobWVudSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGhlYWRlcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIuaWQgPSBcIm1lbnVIZWFkZXJcIjtcclxuICAgIGhlYWRlci5pbm5lclRleHQgPSBcIkZPT0QgTUVOVVwiXHJcbiAgICBtZW51LmFwcGVuZChoZWFkZXIpO1xyXG5cclxuXHJcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBpbWFnZS5zcmMgPSBcIi4vaW1hZ2VzL2xvZ28ucG5nXCI7XHJcbiAgICBpbWFnZS5hbHQgPSBcImxvZ29cIjtcclxuICAgIGltYWdlLmlkID0gXCJsb2dvMlwiO1xyXG4gICAgaGVhZGVyLmFwcGVuZChpbWFnZSk7XHJcblxyXG5cclxuXHJcbiAgICBjcmVhdGVNZW51Q29sdW1uKFwiYXBwZXRpemVyXCIsIG1lbnUpO1xyXG4gICAgY3JlYXRlTWVudUNvbHVtbihcIm1haW5cIiwgbWVudSk7XHJcbiAgICBjcmVhdGVNZW51Q29sdW1uKFwiZHJpbmtzXCIsIG1lbnUpO1xyXG4gICAgY3JlYXRlTWVudUNvbHVtbihcImRlc3NlcnRcIiwgbWVudSk7XHJcblxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJhcHBldGl6ZXJcIiwgXCJCcmVhZFwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImFwcGV0aXplclwiLCBcIkJyZWFkXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiYXBwZXRpemVyXCIsIFwiQnJlYWRcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQ0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJhcHBldGl6ZXJcIiwgXCJCcmVhZFwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImFwcGV0aXplclwiLCBcIkJyZWFkXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiYXBwZXRpemVyXCIsIFwiQnJlYWRcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQ0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJhcHBldGl6ZXJcIiwgXCJCcmVhZFwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImFwcGV0aXplclwiLCBcIkJyZWFkXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiYXBwZXRpemVyXCIsIFwiQnJlYWRcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQ0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJhcHBldGl6ZXJcIiwgXCJCcmVhZFwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImFwcGV0aXplclwiLCBcIkJyZWFkXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkNC41MFwiKTtcclxuXHJcbiAgICBjcmVhdGVNZW51SXRlbShcIm1haW5cIiwgXCJDaGVlc2VcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwibWFpblwiLCBcIkNoZWVzZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJtYWluXCIsIFwiQ2hlZXNlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIm1haW5cIiwgXCJDaGVlc2VcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwibWFpblwiLCBcIkNoZWVzZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJtYWluXCIsIFwiQ2hlZXNlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIm1haW5cIiwgXCJDaGVlc2VcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwibWFpblwiLCBcIkNoZWVzZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJtYWluXCIsIFwiQ2hlZXNlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIm1haW5cIiwgXCJDaGVlc2VcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwibWFpblwiLCBcIkNoZWVzZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDE0LjUwXCIpO1xyXG5cclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiZHJpbmtzXCIsIFwiV2F0ZXJcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiZHJpbmtzXCIsIFwiV2F0ZXJcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiZHJpbmtzXCIsIFwiV2F0ZXJcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiZHJpbmtzXCIsIFwiV2F0ZXJcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiZHJpbmtzXCIsIFwiV2F0ZXJcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuXHJcbiAgICBjcmVhdGVNZW51SXRlbShcImRlc3NlcnRcIiwgXCJDYWtlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImRlc3NlcnRcIiwgXCJDYWtlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImRlc3NlcnRcIiwgXCJDYWtlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImRlc3NlcnRcIiwgXCJDYWtlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImRlc3NlcnRcIiwgXCJDYWtlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcblxyXG59XHJcblxyXG5cclxuY29uc3QgY3JlYXRlTWVudUNvbHVtbiA9ICh0eXBlLCBtZW51KSA9PiB7XHJcbiAgICBjb25zdCBtZW51VHlwZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudVR5cGVDb250YWluZXIuaWQgPSB0eXBlICsgXCJDb250YWluZXJcIjtcclxuICAgIG1lbnVUeXBlQ29udGFpbmVyLmNsYXNzTGlzdCA9IFwibWVudVR5cGVDb250YWluZXJcIlxyXG4gICAgbWVudS5hcHBlbmQobWVudVR5cGVDb250YWluZXIpXHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0ID0gXCJtZW51VHlwZUhlYWRlclwiO1xyXG4gICAgaGVhZGVyLmlubmVyVGV4dCA9IHR5cGUudG9VcHBlckNhc2UoKTtcclxuICAgIG1lbnVUeXBlQ29udGFpbmVyLmFwcGVuZChoZWFkZXIpO1xyXG59XHJcblxyXG5cclxuY29uc3QgY3JlYXRlTWVudUl0ZW0gPSAodHlwZSwgbmFtZSwgZGVzY3JpcHRpb24sIHByaWNlKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdCA9IFwiaXRlbUNvbnRhaW5lclwiO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyB0eXBlICsgXCJDb250YWluZXJcIikuYXBwZW5kKGl0ZW1Db250YWluZXIpXHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaXRlbU5hbWUuY2xhc3NMaXN0ID0gXCJpdGVtTmFtZVwiO1xyXG4gICAgaXRlbU5hbWUuaW5uZXJUZXh0ID0gbmFtZTtcclxuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kKGl0ZW1OYW1lKVxyXG5cclxuICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QgPSBcIml0ZW1EZXNjcmlwdGlvblwiO1xyXG4gICAgaXRlbURlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgaXRlbUNvbnRhaW5lci5hcHBlbmQoaXRlbURlc2NyaXB0aW9uKVxyXG5cclxuICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QgPSBcIml0ZW1QcmljZVwiO1xyXG4gICAgaXRlbVByaWNlLmlubmVyVGV4dCA9IHByaWNlO1xyXG4gICAgaXRlbUNvbnRhaW5lci5hcHBlbmQoaXRlbVByaWNlKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnVDb250ZW50O1xyXG4iLCJpbXBvcnQgY3JlYXRlSG9tZUNvbnRlbnQgZnJvbSBcIi4vaG9tZVwiXHJcblxyXG5jb25zdCBjcmVhdGVOYXYgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gICAgbmF2LmlkID0gJ25hdkJhcic7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kKG5hdik7XHJcbiAgICBjcmVhdGVIZWFkZXIobmF2KTtcclxuICAgIGNyZWF0ZVRhYkJ1dHRvbkNvbnRhaW5lcihuYXYpO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAobmF2KSA9PiB7XHJcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBpbWFnZS5zcmMgPSBcIi4vaW1hZ2VzL2xvZ28ucG5nXCI7XHJcbiAgICBpbWFnZS5hbHQgPSBcImxvZ29cIjtcclxuICAgIGltYWdlLmlkID0gXCJsb2dvXCI7XHJcbiAgICBuYXYuYXBwZW5kKGltYWdlKTtcclxufVxyXG5cclxuY29uc3QgY3JlYXRlVGFiQnV0dG9uQ29udGFpbmVyID0gKG5hdikgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5pZCA9IFwidGFic0NvbnRhaW5lclwiO1xyXG4gICAgbmF2LmFwcGVuZChjb250YWluZXIpO1xyXG4gICAgY3JlYXRlVGFiQnV0dG9uKFwiSG9tZVwiLCBjb250YWluZXIpO1xyXG4gICAgY3JlYXRlVGFiQnV0dG9uKFwiTWVudVwiLCBjb250YWluZXIpO1xyXG4gICAgY3JlYXRlVGFiQnV0dG9uKFwiQ29udGFjdFwiLCBjb250YWluZXIpO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVUYWJCdXR0b24gPSAobmFtZSwgY29udGFpbmVyKSA9PiB7XHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnV0dG9uLmlkID0gbmFtZS50b0xvd2VyQ2FzZSgpICsgXCJCdXR0b25cIjtcclxuICAgIGJ1dHRvbi5pbm5lclRleHQgPSBuYW1lLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKGJ1dHRvbik7XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kKGZvb3Rlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQYWdlKCkge1xyXG4gICAgY3JlYXRlTmF2KCk7XHJcbiAgICBjcmVhdGVIb21lQ29udGVudCgpO1xyXG4gICAgY3JlYXRlRm9vdGVyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRQYWdlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRQYWdlIGZyb20gXCIuL21vZHVsZXMvcGFnZS1sb2FkXCI7XHJcbmltcG9ydCBjcmVhdGVNZW51Q29udGVudCBmcm9tIFwiLi9tb2R1bGVzL21lbnVcIlxyXG5pbXBvcnQgY3JlYXRlQ29udGFjdENvbnRlbnQgZnJvbSBcIi4vbW9kdWxlcy9jb250YWN0XCJcclxuaW1wb3J0IGNyZWF0ZUhvbWVDb250ZW50IGZyb20gXCIuL21vZHVsZXMvaG9tZVwiXHJcblxyXG5sb2FkUGFnZSgpO1xyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5pZC5pbmNsdWRlcyhcIkJ1dHRvblwiKSkge1xyXG4gICAgICAgIHRhYlN3aXRjaChlLnRhcmdldC5pZCk7XHJcbiAgICAgICAgdGFiSGlnaGxpZ2h0KGUpO1xyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgdGFiU3dpdGNoID0gKHRhYikgPT4ge1xyXG4gICAgbGV0IGEgPSB0YWIucmVwbGFjZSgnQnV0dG9uJywgJycpO1xyXG4gICAgaWYgKGEgPT0gXCJtZW51XCIgfHwgYSA9PSBcImhvbWVNZW51XCIpIHtcclxuICAgICAgICBjcmVhdGVNZW51Q29udGVudCgpO1xyXG4gICAgfSBlbHNlIGlmIChhID09IFwiY29udGFjdFwiIHx8IGEgPT0gXCJob21lQ29udGFjdFwiKSB7XHJcbiAgICAgICAgY3JlYXRlQ29udGFjdENvbnRlbnQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY3JlYXRlSG9tZUNvbnRlbnQoKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgdGFiSGlnaGxpZ2h0ID0gKGUpID0+IHtcclxuICAgIGxldCBjaGlsZHJlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFic0NvbnRhaW5lclwiKS5jaGlsZE5vZGVzXHJcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGxpbmsgPT4gbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcblxyXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=