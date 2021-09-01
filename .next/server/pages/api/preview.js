module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/preview.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/api/preview.ts":
/*!**********************************!*\
  !*** ./src/pages/api/preview.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_prismic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/prismic */ \"./src/services/prismic.ts\");\n\n\nfunction linkResolver(doc) {\n  if (doc.type === 'posts') {\n    return `/post/${doc.uid}`;\n  }\n\n  return '/';\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    token: ref,\n    documentId\n  } = req.query;\n  const redirectUrl = await Object(_services_prismic__WEBPACK_IMPORTED_MODULE_0__[\"getPrismicClient\"])(req).getPreviewResolver(String(ref), String(documentId)).resolve(linkResolver, '/');\n\n  if (!redirectUrl) {\n    return res.status(401).json({\n      message: 'Invalid token'\n    });\n  }\n\n  res.setPreviewData({\n    ref\n  });\n  res.write(`<!DOCTYPE html><html><head><meta http-equiv=\"Refresh\" content=\"0; url=${redirectUrl}\" />\n    <script>window.location.href = '${redirectUrl}'</script>\n    </head>`);\n  res.end();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL3ByZXZpZXcudHM/NTkyNSJdLCJuYW1lcyI6WyJsaW5rUmVzb2x2ZXIiLCJkb2MiLCJ0eXBlIiwidWlkIiwicmVxIiwicmVzIiwidG9rZW4iLCJyZWYiLCJkb2N1bWVudElkIiwicXVlcnkiLCJyZWRpcmVjdFVybCIsImdldFByaXNtaWNDbGllbnQiLCJnZXRQcmV2aWV3UmVzb2x2ZXIiLCJTdHJpbmciLCJyZXNvbHZlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJzZXRQcmV2aWV3RGF0YSIsIndyaXRlIiwiZW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7O0FBSUEsU0FBU0EsWUFBVCxDQUFzQkMsR0FBdEIsRUFBNkM7QUFDM0MsTUFBSUEsR0FBRyxDQUFDQyxJQUFKLEtBQWEsT0FBakIsRUFBMEI7QUFDeEIsV0FBUSxTQUFRRCxHQUFHLENBQUNFLEdBQUksRUFBeEI7QUFDRDs7QUFDRCxTQUFPLEdBQVA7QUFDRDs7QUFDYyxzRUFBT0MsR0FBUCxFQUE0QkMsR0FBNUIsS0FBcUQ7QUFDbEUsUUFBTTtBQUFFQyxTQUFLLEVBQUVDLEdBQVQ7QUFBY0M7QUFBZCxNQUE2QkosR0FBRyxDQUFDSyxLQUF2QztBQUNBLFFBQU1DLFdBQVcsR0FBRyxNQUFNQywwRUFBZ0IsQ0FBQ1AsR0FBRCxDQUFoQixDQUN2QlEsa0JBRHVCLENBQ0pDLE1BQU0sQ0FBQ04sR0FBRCxDQURGLEVBQ1NNLE1BQU0sQ0FBQ0wsVUFBRCxDQURmLEVBRXZCTSxPQUZ1QixDQUVmZCxZQUZlLEVBRUQsR0FGQyxDQUExQjs7QUFJQSxNQUFJLENBQUNVLFdBQUwsRUFBa0I7QUFDaEIsV0FBT0wsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBckIsQ0FBUDtBQUNEOztBQUVEWixLQUFHLENBQUNhLGNBQUosQ0FBbUI7QUFBRVg7QUFBRixHQUFuQjtBQUVBRixLQUFHLENBQUNjLEtBQUosQ0FDRyx5RUFBd0VULFdBQVk7QUFDekYsc0NBQXNDQSxXQUFZO0FBQ2xELFlBSEU7QUFLQUwsS0FBRyxDQUFDZSxHQUFKO0FBQ0QsQ0FsQkQiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL3ByZXZpZXcudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQcmlzbWljQ2xpZW50IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJpc21pYydcbmltcG9ydCB7IERvY3VtZW50IH0gZnJvbSAnQHByaXNtaWNpby9jbGllbnQvdHlwZXMvZG9jdW1lbnRzJztcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcblxuZnVuY3Rpb24gbGlua1Jlc29sdmVyKGRvYzogRG9jdW1lbnQpOiBzdHJpbmcge1xuICBpZiAoZG9jLnR5cGUgPT09ICdwb3N0cycpIHtcbiAgICByZXR1cm4gYC9wb3N0LyR7ZG9jLnVpZH1gO1xuICB9XG4gIHJldHVybiAnLyc7XG59XG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgeyB0b2tlbjogcmVmLCBkb2N1bWVudElkIH0gPSByZXEucXVlcnk7XG4gIGNvbnN0IHJlZGlyZWN0VXJsID0gYXdhaXQgZ2V0UHJpc21pY0NsaWVudChyZXEpXG4gICAgLmdldFByZXZpZXdSZXNvbHZlcihTdHJpbmcocmVmKSwgU3RyaW5nKGRvY3VtZW50SWQpKVxuICAgIC5yZXNvbHZlKGxpbmtSZXNvbHZlciwgJy8nKTtcblxuICBpZiAoIXJlZGlyZWN0VXJsKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogJ0ludmFsaWQgdG9rZW4nIH0pO1xuICB9XG5cbiAgcmVzLnNldFByZXZpZXdEYXRhKHsgcmVmIH0pO1xuXG4gIHJlcy53cml0ZShcbiAgICBgPCFET0NUWVBFIGh0bWw+PGh0bWw+PGhlYWQ+PG1ldGEgaHR0cC1lcXVpdj1cIlJlZnJlc2hcIiBjb250ZW50PVwiMDsgdXJsPSR7cmVkaXJlY3RVcmx9XCIgLz5cbiAgICA8c2NyaXB0PndpbmRvdy5sb2NhdGlvbi5ocmVmID0gJyR7cmVkaXJlY3RVcmx9Jzwvc2NyaXB0PlxuICAgIDwvaGVhZD5gXG4gICk7XG4gIHJlcy5lbmQoKTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/preview.ts\n");

/***/ }),

/***/ "./src/services/prismic.ts":
/*!*********************************!*\
  !*** ./src/services/prismic.ts ***!
  \*********************************/
/*! exports provided: getPrismicClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPrismicClient\", function() { return getPrismicClient; });\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getPrismicClient(req) {\n  const prismic = _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default.a.client(process.env.PRISMIC_API_ENDPOINT, {\n    accessToken: process.env.ACCESS_TOKEN,\n    req\n  });\n  return prismic;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcHJpc21pYy50cz84YzUwIl0sIm5hbWVzIjpbImdldFByaXNtaWNDbGllbnQiLCJyZXEiLCJwcmlzbWljIiwiUHJpc21pYyIsImNsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJQUklTTUlDX0FQSV9FTkRQT0lOVCIsImFjY2Vzc1Rva2VuIiwiQUNDRVNTX1RPS0VOIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR08sU0FBU0EsZ0JBQVQsQ0FBMEJDLEdBQTFCLEVBQXdEO0FBQzdELFFBQU1DLE9BQU8sR0FBR0Msd0RBQU8sQ0FBQ0MsTUFBUixDQUFlQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsb0JBQTNCLEVBQWlEO0FBQy9EQyxlQUFXLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxZQURzQztBQUUvRFI7QUFGK0QsR0FBakQsQ0FBaEI7QUFLQSxTQUFPQyxPQUFQO0FBQ0QiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvcHJpc21pYy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmlzbWljIGZyb20gJ0BwcmlzbWljaW8vY2xpZW50JztcbmltcG9ydCB7IERlZmF1bHRDbGllbnQgfSBmcm9tICdAcHJpc21pY2lvL2NsaWVudC90eXBlcy9jbGllbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJpc21pY0NsaWVudChyZXE/OiB1bmtub3duKTogRGVmYXVsdENsaWVudCB7XG4gIGNvbnN0IHByaXNtaWMgPSBQcmlzbWljLmNsaWVudChwcm9jZXNzLmVudi5QUklTTUlDX0FQSV9FTkRQT0lOVCwge1xuICAgIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU4sXG4gICAgcmVxLFxuICB9KTtcblxuICByZXR1cm4gcHJpc21pYztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/prismic.ts\n");

/***/ }),

/***/ "@prismicio/client":
/*!************************************!*\
  !*** external "@prismicio/client" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@prismicio/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcHJpc21pY2lvL2NsaWVudFwiPzdiNTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHByaXNtaWNpby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21pY2lvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@prismicio/client\n");

/***/ })

/******/ });