webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./src/pages/post/[slug].tsx":
/*!***********************************!*\
  !*** ./src/pages/post/[slug].tsx ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismic-dom */ \"./node_modules/prismic-dom/dist/prismic-dom.min.js\");\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/locale/pt-BR */ \"./node_modules/date-fns/esm/locale/pt-BR/index.js\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post.module.scss */ \"./src/pages/post/post.module.scss\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_post_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Comments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Comments */ \"./src/components/Comments.tsx\");\n\n\n\nvar _jsxFileName = \"/home/bruno/Documentos/ignite/desafios/blogPrismic/src/pages/post/[slug].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Post(_ref) {\n  _s();\n\n  var _this = this;\n\n  var post = _ref.post,\n      preview = _ref.preview,\n      previousPost = _ref.previousPost,\n      nextPost = _ref.nextPost;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])();\n\n  if (router.isFallback) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Carregando...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this);\n  }\n\n  var publicatedAt = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__[\"format\"])(new Date(post.first_publication_date), 'dd MMM yyyy', {\n    locale: date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  });\n  var updatedAt = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__[\"format\"])(new Date(post.last_publication_date), 'dd MMM yyyy', {\n    locale: date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  });\n  var updatedAtHours = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__[\"format\"])(new Date(post.last_publication_date), \"kk:mm\", {\n    locale: date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  });\n  var wordsNumber = post.data.content.map(function (item) {\n    var text = prismic_dom__WEBPACK_IMPORTED_MODULE_3__[\"RichText\"].asText(item.body);\n    var aux = [];\n    var arr = text.split(' ');\n    var arrConcat = aux.concat(arr).length;\n    return arrConcat;\n  });\n  var readTime = wordsNumber.reduce(function (acc, item) {\n    var total = acc + item;\n    var time = Math.ceil(total / 200);\n    return time;\n  }, 0);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.banner,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: post.data.banner.url,\n        alt: \"banner\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: post.data.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiCalendar\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 11\n        }, this), publicatedAt, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiUser\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 11\n        }, this), post.data.author, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__[\"FiClock\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 11\n        }, this), readTime, \" min\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }, this), updatedAt !== publicatedAt && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.updatedAt,\n        children: [\"* editado em \", updatedAt, \", \\xE0s \", updatedAtHours]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 11\n      }, this), post.data.content.map(function (item) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n          className: _post_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.content,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            children: item.heading\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 122,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            dangerouslySetInnerHTML: {\n              __html: prismic_dom__WEBPACK_IMPORTED_MODULE_3__[\"RichText\"].asHtml(item.body)\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 123,\n            columnNumber: 15\n          }, _this)]\n        }, item.heading, true, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 13\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Comments__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 9\n      }, this), preview && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"aside\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/api/exit-preview\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            children: \"Sair do modo Preview\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 132,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"]];\n});\n\n_c = Post;\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3QvW3NsdWddLnRzeD80NjczIl0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwicHJldmlldyIsInByZXZpb3VzUG9zdCIsIm5leHRQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNGYWxsYmFjayIsInB1YmxpY2F0ZWRBdCIsImZvcm1hdCIsIkRhdGUiLCJmaXJzdF9wdWJsaWNhdGlvbl9kYXRlIiwibG9jYWxlIiwicHRCUiIsInVwZGF0ZWRBdCIsImxhc3RfcHVibGljYXRpb25fZGF0ZSIsInVwZGF0ZWRBdEhvdXJzIiwid29yZHNOdW1iZXIiLCJkYXRhIiwiY29udGVudCIsIm1hcCIsIml0ZW0iLCJ0ZXh0IiwiUmljaFRleHQiLCJhc1RleHQiLCJib2R5IiwiYXV4IiwiYXJyIiwic3BsaXQiLCJhcnJDb25jYXQiLCJjb25jYXQiLCJsZW5ndGgiLCJyZWFkVGltZSIsInJlZHVjZSIsImFjYyIsInRvdGFsIiwidGltZSIsIk1hdGgiLCJjZWlsIiwic3R5bGVzIiwiYmFubmVyIiwidXJsIiwiY29udGFpbmVyIiwidGl0bGUiLCJhdXRob3IiLCJoZWFkaW5nIiwiX19odG1sIiwiYXNIdG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBbUNlLFNBQVNBLElBQVQsT0FBb0U7QUFBQTs7QUFBQTs7QUFBQSxNQUFwREMsSUFBb0QsUUFBcERBLElBQW9EO0FBQUEsTUFBOUNDLE9BQThDLFFBQTlDQSxPQUE4QztBQUFBLE1BQXJDQyxZQUFxQyxRQUFyQ0EsWUFBcUM7QUFBQSxNQUF2QkMsUUFBdUIsUUFBdkJBLFFBQXVCO0FBQ2pGLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsTUFBSUQsTUFBTSxDQUFDRSxVQUFYLEVBQXVCO0FBQ3JCLHdCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFLLG1DQUF1QixFQUFFO0FBQUVDLG9CQUFNLEVBQUV2QixvREFBUSxDQUFDd0IsTUFBVCxDQUFnQjFCLElBQUksQ0FBQ0ksSUFBckI7QUFBVjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUEsV0FBeUNKLElBQUksQ0FBQ3dCLE9BQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFNRCxPQVBBLENBZkgsZUF3QkUscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhCRixFQXlCRzNDLE9BQU8saUJBQ047QUFBQSwrQkFDRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxtQkFBWDtBQUFBLGlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQSxrQkFERjtBQXdDRDs7R0F6RnVCRixJO1VBQ1BNLHFEOzs7S0FET04sSSIsImZpbGUiOiIuL3NyYy9wYWdlcy9wb3N0L1tzbHVnXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IEZpQ2xvY2ssIEZpQ2FsZW5kYXIsIEZpVXNlciB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgUHJpc21pYyBmcm9tICdAcHJpc21pY2lvL2NsaWVudCdcbmltcG9ydCB7IGdldFByaXNtaWNDbGllbnQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wcmlzbWljJztcbmltcG9ydCB7IFJpY2hUZXh0IH0gZnJvbSBcInByaXNtaWMtZG9tXCJcblxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgcHRCUiBmcm9tICdkYXRlLWZucy9sb2NhbGUvcHQtQlInO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcG9zdC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCBDb21tZW50cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbW1lbnRzJ1xuaW1wb3J0IFBvc3ROYXZpZ2F0b3IgZnJvbSAnLi4vLi4vY29tcG9uZW50cy8nXG5cbmludGVyZmFjZSBQb3N0IHtcbiAgZmlyc3RfcHVibGljYXRpb25fZGF0ZTogc3RyaW5nIHwgbnVsbDtcbiAgbGFzdF9wdWJsaWNhdGlvbl9kYXRlOiBzdHJpbmcgfCBudWxsO1xuICB1aWQ6IHN0cmluZyxcbiAgZGF0YToge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgYmFubmVyOiB7XG4gICAgICB1cmw6IHN0cmluZyB8IG51bGxcbiAgICB9O1xuICAgIGF1dGhvcjogc3RyaW5nO1xuICAgIGNvbnRlbnQ6IHtcbiAgICAgIGhlYWRpbmc6IHN0cmluZztcbiAgICAgIGJvZHk6IHtcbiAgICAgICAgdGV4dDogc3RyaW5nO1xuICAgICAgfVtdO1xuICAgIH1bXTtcbiAgfTtcbn1cblxuaW50ZXJmYWNlIFBvc3RQcm9wcyB7XG4gIHBvc3Q6IFBvc3Q7XG4gIHByZXZpb3VzUG9zdD86IHtcbiAgICB1aWQ6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICB9O1xuICBuZXh0UG9zdD86IHtcbiAgICB1aWQ6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICB9O1xuICBwcmV2aWV3OiBib29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0LCBwcmV2aWV3LCBwcmV2aW91c1Bvc3QsIG5leHRQb3N0IH06IFBvc3RQcm9wcykge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGlmIChyb3V0ZXIuaXNGYWxsYmFjaykge1xuICAgIHJldHVybiAoXG4gICAgICA8aDE+XG4gICAgICAgIENhcnJlZ2FuZG8uLi5cbiAgICAgIDwvaDE+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgcHVibGljYXRlZEF0ID0gZm9ybWF0KFxuICAgIG5ldyBEYXRlKHBvc3QuZmlyc3RfcHVibGljYXRpb25fZGF0ZSksXG4gICAgJ2RkIE1NTSB5eXl5JyxcbiAgICB7XG4gICAgICBsb2NhbGU6IHB0QlJcbiAgICB9XG4gIClcblxuICBjb25zdCB1cGRhdGVkQXQgPSBmb3JtYXQoXG4gICAgbmV3IERhdGUocG9zdC5sYXN0X3B1YmxpY2F0aW9uX2RhdGUpLFxuICAgICdkZCBNTU0geXl5eScsXG4gICAge1xuICAgICAgbG9jYWxlOiBwdEJSXG4gICAgfVxuICApXG5cbiAgY29uc3QgdXBkYXRlZEF0SG91cnMgPSBmb3JtYXQoXG4gICAgbmV3IERhdGUocG9zdC5sYXN0X3B1YmxpY2F0aW9uX2RhdGUpLFxuICAgIFwia2s6bW1cIixcbiAgICB7XG4gICAgICBsb2NhbGU6IHB0QlJcbiAgICB9XG4gIClcblxuICBjb25zdCB3b3Jkc051bWJlciA9IHBvc3QuZGF0YS5jb250ZW50Lm1hcChpdGVtID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gUmljaFRleHQuYXNUZXh0KGl0ZW0uYm9keSlcbiAgICBjb25zdCBhdXggPSBbXVxuICAgIGNvbnN0IGFyciA9IHRleHQuc3BsaXQoJyAnKVxuICAgIGNvbnN0IGFyckNvbmNhdCA9IGF1eC5jb25jYXQoYXJyKS5sZW5ndGhcbiAgICByZXR1cm4gYXJyQ29uY2F0XG4gIH0pXG5cbiAgY29uc3QgcmVhZFRpbWUgPSB3b3Jkc051bWJlci5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xuICAgIGNvbnN0IHRvdGFsID0gYWNjICsgaXRlbVxuICAgIGNvbnN0IHRpbWUgPSBNYXRoLmNlaWwodG90YWwgLyAyMDApXG4gICAgcmV0dXJuIHRpbWVcbiAgfSwgMClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbm5lcn0+XG4gICAgICAgIDxpbWcgc3JjPXtwb3N0LmRhdGEuYmFubmVyLnVybH0gYWx0PVwiYmFubmVyXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGgxPntwb3N0LmRhdGEudGl0bGV9PC9oMT5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPEZpQ2FsZW5kYXIgLz5cbiAgICAgICAgICB7cHVibGljYXRlZEF0fVxuICAgICAgICAgIDxGaVVzZXIgLz5cbiAgICAgICAgICB7cG9zdC5kYXRhLmF1dGhvcn1cbiAgICAgICAgICA8RmlDbG9jayAvPlxuICAgICAgICAgIHtyZWFkVGltZX0gbWluXG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAge3VwZGF0ZWRBdCAhPT0gcHVibGljYXRlZEF0ICYmIChcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy51cGRhdGVkQXR9PlxuICAgICAgICAgICAgKiBlZGl0YWRvIGVtIHt1cGRhdGVkQXR9LCDDoHMge3VwZGF0ZWRBdEhvdXJzfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKX1cbiAgICAgICAge3Bvc3QuZGF0YS5jb250ZW50Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0ga2V5PXtpdGVtLmhlYWRpbmd9PlxuICAgICAgICAgICAgICA8aDI+e2l0ZW0uaGVhZGluZ308L2gyPlxuICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogUmljaFRleHQuYXNIdG1sKGl0ZW0uYm9keSkgfX0gLz5cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgIFxuICAgICAgICA8Q29tbWVudHMgLz5cbiAgICAgICAge3ByZXZpZXcgJiYgKFxuICAgICAgICAgIDxhc2lkZT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXBpL2V4aXQtcHJldmlld1wiPlxuICAgICAgICAgICAgICA8YT5TYWlyIGRvIG1vZG8gUHJldmlldzwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICApfVxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHByaXNtaWMgPSBnZXRQcmlzbWljQ2xpZW50KCk7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcHJpc21pYy5xdWVyeShbXG4gICAgUHJpc21pYy5wcmVkaWNhdGVzLmF0KCdkb2N1bWVudC50eXBlJywgJ3Bvc3QnKVxuICBdKTtcblxuICBjb25zdCBwYXRocyA9IHBvc3RzLnJlc3VsdHMubWFwKHBvc3QgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgc2x1ZzogcG9zdC51aWRcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogdHJ1ZVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHtcbiAgcGFyYW1zLFxuICBwcmV2aWV3ID0gZmFsc2UsXG4gIHByZXZpZXdEYXRhLFxufSkgPT4ge1xuICBjb25zdCBwcmlzbWljID0gZ2V0UHJpc21pY0NsaWVudCgpO1xuICBjb25zdCB7IHNsdWcgfSA9IHBhcmFtc1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHByaXNtaWMuZ2V0QnlVSUQoJ3Bvc3QnLCBTdHJpbmcoc2x1ZyksIHtcbiAgICByZWY6IHByZXZpZXdEYXRhPy5yZWYgPz8gbnVsbCxcbiAgfSk7XG4gIGNvbnN0IHBvc3Q6IFBvc3QgPSB7XG4gICAgdWlkOiByZXNwb25zZS51aWQsXG4gICAgZmlyc3RfcHVibGljYXRpb25fZGF0ZTogcmVzcG9uc2UuZmlyc3RfcHVibGljYXRpb25fZGF0ZSxcbiAgICBsYXN0X3B1YmxpY2F0aW9uX2RhdGU6IHJlc3BvbnNlLmxhc3RfcHVibGljYXRpb25fZGF0ZSxcbiAgICBkYXRhOiB7XG4gICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS50aXRsZSxcbiAgICAgIGF1dGhvcjogcmVzcG9uc2UuZGF0YS5hdXRob3IsXG4gICAgICBiYW5uZXI6IHtcbiAgICAgICAgdXJsOiByZXNwb25zZS5kYXRhLmJhbm5lci51cmwsXG4gICAgICB9LFxuICAgICAgY29udGVudDogcmVzcG9uc2UuZGF0YS5jb250ZW50Lm1hcChjb250ZW50ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoZWFkaW5nOiBjb250ZW50LmhlYWRpbmcsXG4gICAgICAgICAgYm9keTogWy4uLmNvbnRlbnQuYm9keV1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICB9XG5cbiAgbGV0IHByZXZpb3VzUG9zdCA9IG51bGw7XG4gIGxldCBuZXh0UG9zdCA9IG51bGw7XG4gIGNvbnN0IHJlc3BvbnNlUHJldmlvdXNQb3N0ID0gYXdhaXQgcHJpc21pYy5xdWVyeShcbiAgICBbXG4gICAgICBQcmlzbWljLnByZWRpY2F0ZXMuYXQoJ2RvY3VtZW50LnR5cGUnLCAncG9zdCcpLFxuICAgICAgUHJpc21pYy5wcmVkaWNhdGVzLmRhdGVBZnRlcihcbiAgICAgICAgJ2RvY3VtZW50LmZpcnN0X3B1YmxpY2F0aW9uX2RhdGUnLFxuICAgICAgICBwb3N0LmZpcnN0X3B1YmxpY2F0aW9uX2RhdGVcbiAgICAgICksXG4gICAgXSxcbiAgICB7XG4gICAgICBmZXRjaDogWydwb3N0cy50aXRsZSddLFxuICAgICAgcGFnZVNpemU6IDEsXG4gICAgICBwYWdlOiAxLFxuICAgIH1cbiAgKTtcblxuICBpZiAocmVzcG9uc2VQcmV2aW91c1Bvc3QucmVzdWx0cy5sZW5ndGgpIHtcbiAgICBwcmV2aW91c1Bvc3QgPSB7XG4gICAgICB1aWQ6IHJlc3BvbnNlUHJldmlvdXNQb3N0LnJlc3VsdHNbMF0udWlkLFxuICAgICAgdGl0bGU6IHJlc3BvbnNlUHJldmlvdXNQb3N0LnJlc3VsdHNbMF0uZGF0YT8udGl0bGUsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHJlc3BvbnNlTmV4dFBvc3QgPSBhd2FpdCBwcmlzbWljLnF1ZXJ5KFxuICAgIFtcbiAgICAgIFByaXNtaWMucHJlZGljYXRlcy5hdCgnZG9jdW1lbnQudHlwZScsICdwb3N0JyksXG4gICAgICBQcmlzbWljLnByZWRpY2F0ZXMuZGF0ZUJlZm9yZShcbiAgICAgICAgJ2RvY3VtZW50LmZpcnN0X3B1YmxpY2F0aW9uX2RhdGUnLFxuICAgICAgICBwb3N0LmZpcnN0X3B1YmxpY2F0aW9uX2RhdGVcbiAgICAgICksXG4gICAgXSxcbiAgICB7XG4gICAgICBmZXRjaDogWydwb3N0cy50aXRsZSddLFxuICAgICAgcGFnZVNpemU6IDEsXG4gICAgICBwYWdlOiAxLFxuICAgIH1cbiAgKTtcblxuICBpZiAocmVzcG9uc2VOZXh0UG9zdC5yZXN1bHRzLmxlbmd0aCkge1xuICAgIG5leHRQb3N0ID0ge1xuICAgICAgdWlkOiByZXNwb25zZU5leHRQb3N0LnJlc3VsdHNbMF0udWlkLFxuICAgICAgdGl0bGU6IHJlc3BvbnNlTmV4dFBvc3QucmVzdWx0c1swXS5kYXRhPy50aXRsZSxcbiAgICB9O1xuICB9XG5cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0LFxuICAgICAgcHJldlBvc3Q6IHByZXZpb3VzUG9zdD8ucmVzdWx0cyxcbiAgICAgIG5leHRQb3N0OiBuZXh0UG9zdD8ucmVzdWx0cyxcbiAgICAgIHByZXZpZXdcbiAgICB9XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/post/[slug].tsx\n");

/***/ })

})