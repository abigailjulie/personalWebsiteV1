"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _App = _interopRequireDefault(require("./App.jsx"));
var _reactRouterDom = require("react-router-dom");
require("./index.css");
var _Projects = _interopRequireDefault(require("./components/Projects.jsx"));
var _Project = _interopRequireDefault(require("./pages/Project.jsx"));
var _Resume = _interopRequireDefault(require("./pages/Resume.jsx"));
var _Login = _interopRequireDefault(require("./pages/Login.jsx"));
var _Error = _interopRequireDefault(require("./pages/Error.jsx"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const router = (0, _reactRouterDom.createBrowserRouter)([{
  path: '/',
  element: /*#__PURE__*/_react.default.createElement(_Login.default, null),
  errorElement: /*#__PURE__*/_react.default.createElement(_Error.default, null)
}, {
  path: '/home',
  element: /*#__PURE__*/_react.default.createElement(_App.default, null),
  errorElement: /*#__PURE__*/_react.default.createElement(_Error.default, null)
}, {
  path: '/projects',
  element: /*#__PURE__*/_react.default.createElement(_Projects.default, null),
  children: [{
    path: '/projects/:projectId',
    element: /*#__PURE__*/_react.default.createElement(_Project.default, null)
  }],
  errorElement: /*#__PURE__*/_react.default.createElement(_Error.default, null)
}, {
  path: '/resume',
  element: /*#__PURE__*/_react.default.createElement(_Resume.default, null),
  errorElement: /*#__PURE__*/_react.default.createElement(_Error.default, null)
}]);
_client.default.createRoot(document.getElementById('root')).render( /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.RouterProvider, {
  router: router
})));