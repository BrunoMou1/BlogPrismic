webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./src/components/PostNavigator/PostNavigator.tsx":
/*!********************************************************!*\
  !*** ./src/components/PostNavigator/PostNavigator.tsx ***!
  \********************************************************/
/*! exports provided: PostNavigator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostNavigator\", function() { return PostNavigator; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/PostNavigator/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/bruno/Documentos/ignite/desafios/blogPrismic/src/components/PostNavigator/PostNavigator.tsx\";\n\n\nfunction PostNavigator(_ref) {\n  var next = _ref.next,\n      previous = _ref.previous;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.buttons,\n      children: [previous ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: \"/post/\".concat(previous.uid),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.left,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            children: previous.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.info,\n            children: \"Post anterior\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 11\n      }, this), next ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: \"/post/\".concat(next.uid),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.right,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            children: next.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.info,\n            children: \"Pr\\xF3ximo post\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 11\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}\n_c = PostNavigator;\n\nvar _c;\n\n$RefreshReg$(_c, \"PostNavigator\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9zdE5hdmlnYXRvci9Qb3N0TmF2aWdhdG9yLnRzeD8zOWEzIl0sIm5hbWVzIjpbIlBvc3ROYXZpZ2F0b3IiLCJuZXh0IiwicHJldmlvdXMiLCJzdHlsZXMiLCJjb250YWluZXIiLCJidXR0b25zIiwidWlkIiwibGVmdCIsInRpdGxlIiwiaW5mbyIsInJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQTtBQVlPLFNBQVNBLGFBQVQsT0FHNkI7QUFBQSxNQUZsQ0MsSUFFa0MsUUFGbENBLElBRWtDO0FBQUEsTUFEbENDLFFBQ2tDLFFBRGxDQSxRQUNrQztBQUNsQyxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsMERBQU0sQ0FBQ0MsU0FBdkI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUQsMERBQU0sQ0FBQ0UsT0FBdkI7QUFBQSxpQkFDR0gsUUFBUSxnQkFDUCxxRUFBQyxnREFBRDtBQUFNLFlBQUksa0JBQVdBLFFBQVEsQ0FBQ0ksR0FBcEIsQ0FBVjtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBRUgsMERBQU0sQ0FBQ0ksSUFBckI7QUFBQSxrQ0FDRTtBQUFBLHNCQUFPTCxRQUFRLENBQUNNO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFNLHFCQUFTLEVBQUVMLDBEQUFNLENBQUNNLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FETyxnQkFRUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEosRUFXR1IsSUFBSSxnQkFDSCxxRUFBQyxnREFBRDtBQUFNLFlBQUksa0JBQVdBLElBQUksQ0FBQ0ssR0FBaEIsQ0FBVjtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBRUgsMERBQU0sQ0FBQ08sS0FBckI7QUFBQSxrQ0FDRTtBQUFBLHNCQUFPVCxJQUFJLENBQUNPO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQU0scUJBQVMsRUFBRUwsMERBQU0sQ0FBQ00sSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURHLGdCQVFIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMEJEO0tBOUJlVCxhIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUG9zdE5hdmlnYXRvci9Qb3N0TmF2aWdhdG9yLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuXG5pbnRlcmZhY2UgUG9zdCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHVpZDogc3RyaW5nO1xufVxuXG50eXBlIFBvc3ROYXZpZ2F0b3JQcm9wcyA9IHtcbiAgcHJldmlvdXM/OiBQb3N0O1xuICBuZXh0PzogUG9zdDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBQb3N0TmF2aWdhdG9yKHtcbiAgbmV4dCxcbiAgcHJldmlvdXMsXG59OiBQb3N0TmF2aWdhdG9yUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cbiAgICAgICAge3ByZXZpb3VzID8gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdC8ke3ByZXZpb3VzLnVpZH1gfT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxlZnR9PlxuICAgICAgICAgICAgICA8c3Bhbj57cHJldmlvdXMudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT5Qb3N0IGFudGVyaW9yPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IC8+XG4gICAgICAgICl9XG4gICAgICAgIHtuZXh0ID8gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdC8ke25leHQudWlkfWB9PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9PlxuICAgICAgICAgICAgICA8c3Bhbj57bmV4dC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmluZm99PlByw7N4aW1vIHBvc3Q8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/PostNavigator/PostNavigator.tsx\n");

/***/ })

})