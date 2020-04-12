module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Auth.js":
/*!****************************!*\
  !*** ./components/Auth.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_styles_FormStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/styles/FormStyles */ "./components/styles/FormStyles.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Error */ "./components/Error.js");
/* harmony import */ var _components_Success__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Success */ "./components/Success.js");
var _jsxFileName = "/Users/tlr/Desktop/new/frontend/components/Auth.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const SIGNIN_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
    }
  }
`;
const SIGNUP_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`
  mutation SIGNUP_MUTATION(
    $email: String!
    $password: String!
    $repeatPassword: String!
  ) {
    signup(
      email: $email
      password: $password
      repeatPassword: $repeatPassword
    ) {
      id
      email
    }
  }
`;
const RESET_PASSWORD_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`
  mutation RESET_PASSWORD_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

const Form = ({
  option,
  email,
  password,
  repeatPassword,
  successMessage,
  setEmail,
  setPassword,
  setRepeatPassword,
  setSuccessMessage
}) => {
  return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
    mutation: option === 1 ? SIGNIN_MUTATION : option === 2 ? SIGNUP_MUTATION : RESET_PASSWORD_MUTATION,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, (sign, {
    error,
    loading,
    called
  }) => __jsx("form", {
    className: "account-form",
    method: "POST",
    onSubmit: async e => {
      e.preventDefault();
      const res = await sign({
        variables: {
          email,
          password,
          repeatPassword
        }
      });

      if (option === 1) {
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
          pathname: "/app"
        });
      } else if (option === 2) {
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
          pathname: "/app"
        });
      } else {
        setSuccessMessage(res.data.requestReset.message);
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("div", {
    className: "account-form-fields " + (option === 1 ? "sign-in" : option === 2 ? "sign-up" : "forgot"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx("input", {
    id: "email",
    name: "email",
    type: "email",
    onChange: e => setEmail(e.target.value),
    placeholder: "Email Address",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }), __jsx("input", {
    id: "password",
    name: "password",
    type: "password",
    placeholder: "Password",
    onChange: e => setPassword(e.target.value),
    required: option === 1 || option === 2 ? true : false,
    disabled: option === 3 ? true : false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }), __jsx("input", {
    id: "repeat-password",
    name: "repeat-password",
    type: "password",
    placeholder: "Repeat password",
    onChange: e => setRepeatPassword(e.target.value),
    required: option === 2 ? true : false,
    disabled: option === 1 || option === 3 ? true : false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  })), __jsx("button", {
    disabled: loading,
    "aria-busy": loading,
    className: "btn-submit-form",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, option === 1 ? "Sign in" : option === 2 ? "Sign up" : "Reset password"), __jsx(_components_Error__WEBPACK_IMPORTED_MODULE_5__["default"], {
    error: error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }), option === 3 && !error && !loading && called && __jsx(_components_Success__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: successMessage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  })));
};

const Auth = () => {
  const [option, setOption] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(1);
  const [email, setEmail] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [password, setPassword] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [repeatPassword, setRepeatPassword] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [successMessage, setSuccessMessage] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  return __jsx(_components_styles_FormStyles__WEBPACK_IMPORTED_MODULE_2__["AnimatedFormStyles"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, __jsx("ul", {
    className: "options",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }, __jsx("li", {
    className: option === 1 ? "active" : "",
    onClick: () => setOption(1),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, "Sign in"), __jsx("li", {
    className: option === 2 ? "active" : "",
    onClick: () => setOption(2),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, "Sign up"), __jsx("li", {
    className: option === 3 ? "active" : "",
    onClick: () => setOption(3),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  }, "Forgot"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }, __jsx("img", {
    src: "/logo.svg",
    alt: "",
    width: "70",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }))), __jsx(Form, {
    option: option,
    email: email,
    setEmail: setEmail,
    password: password,
    setPassword: setPassword,
    repeatPassword: repeatPassword,
    setRepeatPassword: setRepeatPassword,
    successMessage: successMessage,
    setSuccessMessage: setSuccessMessage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ }),

/***/ "./components/Error.js":
/*!*****************************!*\
  !*** ./components/Error.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/tlr/Desktop/new/frontend/components/Error.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  padding: 2rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid ${props => props.theme.redder};
  border-radius: 5px;

  p {
    color: #000;

    margin: 0;
    font-weight: 500;
  }
  strong {
    margin-right: 1rem;
  }
`;

const DisplayError = ({
  error
}) => {
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => __jsx(ErrorStyles, {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: undefined
    }, __jsx("p", {
      "data-test": "graphql-error",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: undefined
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    }, "Error!"), error.message.replace("GraphQL error: ", ""))));
  }

  return __jsx(ErrorStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("p", {
    "data-test": "graphql-error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Error!"), error.message.replace("GraphQL error: ", "")));
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

/***/ "./components/Success.js":
/*!*******************************!*\
  !*** ./components/Success.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/tlr/Desktop/new/frontend/components/Success.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const SuccessStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  padding: 2rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid green;
  border-radius: 5px;

  p {
    color: #000;
    margin: 0;
    font-weight: 500;
  }

  strong {
    margin-right: 1rem;
  }
`;

const DisplaySuccess = ({
  message
}) => {
  if (!message) return null;
  return __jsx(SuccessStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("p", {
    "data-test": "success-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Success!"), message));
};

DisplaySuccess.defaultProps = {
  message: {}
};
DisplaySuccess.propTypes = {
  message: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DisplaySuccess);

/***/ }),

/***/ "./components/styles/FormStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/FormStyles.js ***!
  \*****************************************/
/*! exports provided: AnimatedFormStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedFormStyles", function() { return AnimatedFormStyles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const loading = styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"]`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;
const AnimatedFormStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  text-align: center;
  color: #fff;
  margin-top: 100px;
  height: 100%;
  margin: 0 auto;
  max-width: 300px;
  padding-top: 20px;
  width: 100%;
  height: 100vh;
  position: relative;
  top: 25vh;

  > header {
    font-size: 1.3rem;
    font-weight: 700;
    margin: 0 auto 60px auto;
    position: relative;
    height: 40px;
    width: 250px;
    overflow: hidden;
  }

  .options {
    display: flex;
    align-items: center;
    width: 250px;

    @media screen and (max-width: 380px) {
      width: 100%;
    }

    > li {
      cursor: pointer;
      opacity: 0.5;
      transition: all 0.2s ease;

      &:hover {
        opacity: 1;
      }

      &.active {
        opacity: 1;
      }

      &:nth-of-type(2) {
        margin-left: 15px;
      }

      &:nth-of-type(3) {
        margin-left: 15px;
      }

      &:last-of-type {
        margin-left: 15px;
        margin-right: -15px;
        cursor: default;
        opacity: 1;
      }
    }
  }

  .account-form {
    display: flex;
    flex-direction: column;
  }

  .account-form-fields {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);

    &.sign-in {
      max-height: 116px;
    }

    &.sign-up {
      max-height: 250px;
    }

    &.forgot {
      max-height: 57px;
    }

    > input {
      border: 0;
      margin-bottom: 10px;
      padding: 15px;
      font-size: 1rem;
      color: #000;
      border-radius: 5px;

      &::placeholder {
        color: #aaa;
      }

      &::-webkit-input-placeholder {
        color: #aaa;
      }

      &:-ms-input-placeholder {
        color: #aaa;
      }

      &:focus {
        outline: none;
      }
    }
  }

  .link-submit-form {
    color: ${props => props.theme.white};
    text-decoration: none;
    margin-top: 32px;
  }

  .reset {
    margin-bottom: 16px;
    font-size: 18px !important;
  }

  .btn-submit-form {
    border: 0;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
    padding: 15px 0;
    border-radius: 5px;
    color: ${props => props.theme.dark};
    font-size: 1rem;
    background: lighten(${props => props.theme.white}, 5%);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.13);
    transition: all 0.2s ease;

    &:hover {
      background: darken(${props => props.theme.white}, 2%);
    }

    &:active,
    &:focus {
      outline: none;
      background: darken(${props => props.theme.white}, 7%);
    }

    &[disabled] {
      opacity: 0.5;
    }

    &[aria-busy="true"]::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Auth */ "./components/Auth.js");
var _jsxFileName = "/Users/tlr/Desktop/new/frontend/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const IndexPage = () => __jsx(_components_Auth__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
});

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tlr/Desktop/new/frontend/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map