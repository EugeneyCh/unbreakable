!function(){function e(e){return e&&e.__esModule?e.default:e}console.log("hello from menu header"),console.log("hello from support"),console.log("hello from modal-card");var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")};var t={};function n(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,o,t){o&&n(e.prototype,o);t&&n(e,t);return e};var r=new(function(){"use strict";function n(){e(o)(this,n)}return e(t)(n,[{key:"getCategoriesList",value:function(){return fetch("https://books-backend.p.goit.global/books/category-list").then((function(e){return e.json()}))}},{key:"getCategoriesTop",value:function(){return fetch("https://books-backend.p.goit.global/books_top_books").then((function(e){return e.json()}))}},{key:"getCategoriesSelected",value:function(e){return fetch("".concat("https://books-backend.p.goit.global/books/category","?category=").concat(e)).then((function(e){return e.json()}))}}]),n}());r.getCategoriesList().then((function(e){return console.log(e)})),r.getCategoriesSelected("Business Books").then((function(e){return console.log(e)}))}();
//# sourceMappingURL=index.f8d862f5.js.map