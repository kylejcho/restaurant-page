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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLG9CQUFvQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNsQnBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsaUJBQWlCOzs7Ozs7Ozs7Ozs7OztBQ3BDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGlCQUFpQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUdLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7O1VDaER2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjJDO0FBQ0c7QUFDTTtBQUNOO0FBQzlDO0FBQ0EsOERBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQWlCO0FBQ3pCLE1BQU07QUFDTixRQUFRLDREQUFvQjtBQUM1QixNQUFNO0FBQ04sUUFBUSx5REFBaUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZUNvbnRhY3RDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFjdENvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFjdENvbnRlbnRDb250YWluZXIuaWQgPSBcImNvbnRhY3RDb250ZW50Q29udGFpbmVyXCI7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIGNvbnRlbnQuY2hpbGRyZW4uaXRlbSgxKS5yZXBsYWNlV2l0aChjb250YWN0Q29udGVudENvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdENvbnRhaW5lci5pZCA9IFwiY29udGFjdENvbnRhaW5lclwiO1xyXG4gICAgY29udGFjdENvbnRlbnRDb250YWluZXIuYXBwZW5kKGNvbnRhY3RDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIuaWQgPSBcImNvbnRhY3RIZWFkZXJcIjtcclxuICAgIGhlYWRlci5pbm5lclRleHQgPSBcIkNPTlRBQ1RcIlxyXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmQoaGVhZGVyKTtcclxuXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdENvbnRlbnQ7XHJcbiIsImNvbnN0IGNyZWF0ZUhvbWVDb250ZW50ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGhvbWVDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhvbWVDb250ZW50Q29udGFpbmVyLmlkID0gXCJob21lQ29udGVudENvbnRhaW5lclwiO1xyXG4gICAgXHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIGlmIChjb250ZW50LmNoaWxkRWxlbWVudENvdW50ID09IDMpIHtcclxuICAgICAgICBjb250ZW50LmNoaWxkcmVuLml0ZW0oMSkucmVwbGFjZVdpdGgoaG9tZUNvbnRlbnRDb250YWluZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kKGhvbWVDb250ZW50Q29udGFpbmVyKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcbiAgICBjb25zdCBob21lQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBob21lQ29udGVudC5pZCA9IFwiaG9tZUNvbnRlbnRcIjtcclxuICAgIGhvbWVDb250ZW50Q29udGFpbmVyLmFwcGVuZChob21lQ29udGVudCk7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJFWFBFUklFTkNFIEtZTEUnUyBLSVRDSEVOLlwiO1xyXG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kKHRpdGxlKTtcclxuICAgIGNvbnN0IHN1YlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBzdWJUaXRsZS5pbm5lclRleHQgPSBcIkVOSk9ZIEZPT0QgRlJPTSBBTEwgQVJPVU5EIFRIRSBXT1JMRC5cIlxyXG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kKHN1YlRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBob21lTWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBob21lTWVudUJ1dHRvbi5pZCA9IFwiaG9tZU1lbnVCdXR0b25cIjtcclxuICAgIGhvbWVNZW51QnV0dG9uLmlubmVyVGV4dCA9IFwiU0VFIE1FTlVcIjtcclxuICAgIGhvbWVDb250ZW50LmFwcGVuZChob21lTWVudUJ1dHRvbik7XHJcblxyXG4gICAgY29uc3QgaG9tZUFib3V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGhvbWVBYm91dEJ1dHRvbi5pZCA9IFwiaG9tZUFib3V0QnV0dG9uXCI7XHJcbiAgICBob21lQWJvdXRCdXR0b24uaW5uZXJUZXh0ID0gXCJDT05UQUNUXCI7XHJcbiAgICBob21lQ29udGVudC5hcHBlbmQoaG9tZUFib3V0QnV0dG9uKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZUNvbnRlbnQ7IiwiY29uc3QgY3JlYXRlTWVudUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtZW51Q29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZW51Q29udGVudENvbnRhaW5lci5pZCA9IFwibWVudUNvbnRlbnRDb250YWluZXJcIjtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgY29udGVudC5jaGlsZHJlbi5pdGVtKDEpLnJlcGxhY2VXaXRoKG1lbnVDb250ZW50Q29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51LmlkID0gXCJtZW51XCI7XHJcbiAgICBtZW51Q29udGVudENvbnRhaW5lci5hcHBlbmQobWVudSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGhlYWRlcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIuaWQgPSBcIm1lbnVIZWFkZXJcIjtcclxuICAgIGhlYWRlci5pbm5lclRleHQgPSBcIkZPT0QgTUVOVVwiXHJcbiAgICBtZW51LmFwcGVuZChoZWFkZXIpO1xyXG5cclxuXHJcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBpbWFnZS5zcmMgPSBcIi4vaW1hZ2VzL2xvZ28ucG5nXCI7XHJcbiAgICBpbWFnZS5hbHQgPSBcImxvZ29cIjtcclxuICAgIGltYWdlLmlkID0gXCJsb2dvMlwiO1xyXG4gICAgaGVhZGVyLmFwcGVuZChpbWFnZSk7XHJcblxyXG5cclxuXHJcbiAgICBjcmVhdGVNZW51Q29sdW1uKFwiYXBwZXRpemVyXCIsIG1lbnUpO1xyXG4gICAgY3JlYXRlTWVudUNvbHVtbihcIm1haW5cIiwgbWVudSk7XHJcbiAgICBjcmVhdGVNZW51Q29sdW1uKFwiZHJpbmtzXCIsIG1lbnUpO1xyXG4gICAgY3JlYXRlTWVudUNvbHVtbihcImRlc3NlcnRcIiwgbWVudSk7XHJcblxyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJhcHBldGl6ZXJcIiwgXCJCcmVhZFwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImFwcGV0aXplclwiLCBcIkJyZWFkXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiYXBwZXRpemVyXCIsIFwiQnJlYWRcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQ0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJhcHBldGl6ZXJcIiwgXCJCcmVhZFwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImFwcGV0aXplclwiLCBcIkJyZWFkXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiYXBwZXRpemVyXCIsIFwiQnJlYWRcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQ0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJhcHBldGl6ZXJcIiwgXCJCcmVhZFwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImFwcGV0aXplclwiLCBcIkJyZWFkXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiYXBwZXRpemVyXCIsIFwiQnJlYWRcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQ0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJhcHBldGl6ZXJcIiwgXCJCcmVhZFwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImFwcGV0aXplclwiLCBcIkJyZWFkXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkNC41MFwiKTtcclxuXHJcbiAgICBjcmVhdGVNZW51SXRlbShcIm1haW5cIiwgXCJDaGVlc2VcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwibWFpblwiLCBcIkNoZWVzZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJtYWluXCIsIFwiQ2hlZXNlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIm1haW5cIiwgXCJDaGVlc2VcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwibWFpblwiLCBcIkNoZWVzZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJtYWluXCIsIFwiQ2hlZXNlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIm1haW5cIiwgXCJDaGVlc2VcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwibWFpblwiLCBcIkNoZWVzZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDE0LjUwXCIpO1xyXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJtYWluXCIsIFwiQ2hlZXNlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcIm1haW5cIiwgXCJDaGVlc2VcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwibWFpblwiLCBcIkNoZWVzZVwiLCBcIlNlZCB1dCBwZXJzcGljaWF0aXMgdW5kZSBvbW5pcyBpc3RlIG5hdHVzXCIsIFwiJDE0LjUwXCIpO1xyXG5cclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiZHJpbmtzXCIsIFwiV2F0ZXJcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiZHJpbmtzXCIsIFwiV2F0ZXJcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiZHJpbmtzXCIsIFwiV2F0ZXJcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiZHJpbmtzXCIsIFwiV2F0ZXJcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiZHJpbmtzXCIsIFwiV2F0ZXJcIiwgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1c1wiLCBcIiQxNC41MFwiKTtcclxuXHJcbiAgICBjcmVhdGVNZW51SXRlbShcImRlc3NlcnRcIiwgXCJDYWtlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImRlc3NlcnRcIiwgXCJDYWtlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImRlc3NlcnRcIiwgXCJDYWtlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImRlc3NlcnRcIiwgXCJDYWtlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcbiAgICBjcmVhdGVNZW51SXRlbShcImRlc3NlcnRcIiwgXCJDYWtlXCIsIFwiU2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXNcIiwgXCIkMTQuNTBcIik7XHJcblxyXG59XHJcblxyXG5cclxuY29uc3QgY3JlYXRlTWVudUNvbHVtbiA9ICh0eXBlLCBtZW51KSA9PiB7XHJcbiAgICBjb25zdCBtZW51VHlwZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudVR5cGVDb250YWluZXIuaWQgPSB0eXBlICsgXCJDb250YWluZXJcIjtcclxuICAgIG1lbnVUeXBlQ29udGFpbmVyLmNsYXNzTGlzdCA9IFwibWVudVR5cGVDb250YWluZXJcIlxyXG4gICAgbWVudS5hcHBlbmQobWVudVR5cGVDb250YWluZXIpXHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0ID0gXCJtZW51VHlwZUhlYWRlclwiO1xyXG4gICAgaGVhZGVyLmlubmVyVGV4dCA9IHR5cGUudG9VcHBlckNhc2UoKTtcclxuICAgIG1lbnVUeXBlQ29udGFpbmVyLmFwcGVuZChoZWFkZXIpO1xyXG59XHJcblxyXG5cclxuY29uc3QgY3JlYXRlTWVudUl0ZW0gPSAodHlwZSwgbmFtZSwgZGVzY3JpcHRpb24sIHByaWNlKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdCA9IFwiaXRlbUNvbnRhaW5lclwiO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyB0eXBlICsgXCJDb250YWluZXJcIikuYXBwZW5kKGl0ZW1Db250YWluZXIpXHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaXRlbU5hbWUuY2xhc3NMaXN0ID0gXCJpdGVtTmFtZVwiO1xyXG4gICAgaXRlbU5hbWUuaW5uZXJUZXh0ID0gbmFtZTtcclxuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kKGl0ZW1OYW1lKVxyXG5cclxuICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QgPSBcIml0ZW1EZXNjcmlwdGlvblwiO1xyXG4gICAgaXRlbURlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgaXRlbUNvbnRhaW5lci5hcHBlbmQoaXRlbURlc2NyaXB0aW9uKVxyXG5cclxuICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QgPSBcIml0ZW1QcmljZVwiO1xyXG4gICAgaXRlbVByaWNlLmlubmVyVGV4dCA9IHByaWNlO1xyXG4gICAgaXRlbUNvbnRhaW5lci5hcHBlbmQoaXRlbVByaWNlKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnVDb250ZW50O1xyXG4iLCJpbXBvcnQgY3JlYXRlSG9tZUNvbnRlbnQgZnJvbSBcIi4vaG9tZVwiXHJcblxyXG5jb25zdCBjcmVhdGVOYXYgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gICAgbmF2LmlkID0gJ25hdkJhcic7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kKG5hdik7XHJcbiAgICBjcmVhdGVIZWFkZXIobmF2KTtcclxuICAgIGNyZWF0ZVRhYkJ1dHRvbkNvbnRhaW5lcihuYXYpO1xyXG4gICAgXHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUhlYWRlciA9IChuYXYpID0+IHtcclxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGltYWdlLnNyYyA9IFwiLi9pbWFnZXMvbG9nby5wbmdcIjtcclxuICAgIGltYWdlLmFsdCA9IFwibG9nb1wiO1xyXG4gICAgaW1hZ2UuaWQgPSBcImxvZ29cIjtcclxuICAgIG5hdi5hcHBlbmQoaW1hZ2UpO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVUYWJCdXR0b25Db250YWluZXIgPSAobmF2KSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmlkID0gXCJ0YWJzQ29udGFpbmVyXCI7XHJcbiAgICBuYXYuYXBwZW5kKGNvbnRhaW5lcik7XHJcbiAgICBjcmVhdGVUYWJCdXR0b24oXCJIb21lXCIsIGNvbnRhaW5lcik7XHJcbiAgICBjcmVhdGVUYWJCdXR0b24oXCJNZW51XCIsIGNvbnRhaW5lcik7XHJcbiAgICBjcmVhdGVUYWJCdXR0b24oXCJDb250YWN0XCIsIGNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVRhYkJ1dHRvbiA9IChuYW1lLCBjb250YWluZXIpID0+IHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidXR0b24uaWQgPSBuYW1lLnRvTG93ZXJDYXNlKCkgKyBcIkJ1dHRvblwiO1xyXG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IG5hbWUudG9VcHBlckNhc2UoKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQoYnV0dG9uKTtcclxuICAgIGNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZUJ1dHRvbicpO1xyXG4gICAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFwcGVuZChmb290ZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUGFnZSgpIHtcclxuICAgIGNyZWF0ZU5hdigpO1xyXG4gICAgY3JlYXRlSG9tZUNvbnRlbnQoKTtcclxuICAgIGNyZWF0ZUZvb3RlcigpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkUGFnZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkUGFnZSBmcm9tIFwiLi9tb2R1bGVzL3BhZ2UtbG9hZFwiO1xyXG5pbXBvcnQgY3JlYXRlTWVudUNvbnRlbnQgZnJvbSBcIi4vbW9kdWxlcy9tZW51XCJcclxuaW1wb3J0IGNyZWF0ZUNvbnRhY3RDb250ZW50IGZyb20gXCIuL21vZHVsZXMvY29udGFjdFwiXHJcbmltcG9ydCBjcmVhdGVIb21lQ29udGVudCBmcm9tIFwiLi9tb2R1bGVzL2hvbWVcIlxyXG5cclxubG9hZFBhZ2UoKTtcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuaWQuaW5jbHVkZXMoXCJCdXR0b25cIikpIHtcclxuICAgICAgICB0YWJTd2l0Y2goZS50YXJnZXQuaWQpO1xyXG4gICAgICAgIHRhYkhpZ2hsaWdodChlKTtcclxuICAgIH1cclxufSlcclxuXHJcbmNvbnN0IHRhYlN3aXRjaCA9ICh0YWIpID0+IHtcclxuICAgIGxldCBhID0gdGFiLnJlcGxhY2UoJ0J1dHRvbicsICcnKTtcclxuICAgIGlmIChhID09IFwibWVudVwiIHx8IGEgPT0gXCJob21lTWVudVwiKSB7XHJcbiAgICAgICAgY3JlYXRlTWVudUNvbnRlbnQoKTtcclxuICAgIH0gZWxzZSBpZiAoYSA9PSBcImNvbnRhY3RcIiB8fCBhID09IFwiaG9tZUNvbnRhY3RcIikge1xyXG4gICAgICAgIGNyZWF0ZUNvbnRhY3RDb250ZW50KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNyZWF0ZUhvbWVDb250ZW50KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHRhYkhpZ2hsaWdodCA9IChlKSA9PiB7XHJcbiAgICBsZXQgY2hpbGRyZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhYnNDb250YWluZXJcIikuY2hpbGROb2Rlc1xyXG4gICAgY2hpbGRyZW4uZm9yRWFjaChsaW5rID0+IGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG5cclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9