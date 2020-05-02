webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./lib/withData.js":
/*!*************************!*\
  !*** ./lib/withData.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-with-apollo */ "./node_modules/next-with-apollo/lib/index.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");


var endpoint = "http://localhost:4444/";

function createClient(_ref) {
  var headers = _ref.headers;
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["default"]({
    uri: endpoint,
    // uri:
    //   process.env.NODE_ENV === "production"
    //     ? process.env.GRAPHQL_ENDPOINT
    //     : endpoint,
    // Apparently this doesn't work on Netlify!
    request: function request(operation) {
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers: headers
      });
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default()(createClient));

/***/ })

})
//# sourceMappingURL=_app.js.387c1460c4bc013a54a0.hot-update.js.map