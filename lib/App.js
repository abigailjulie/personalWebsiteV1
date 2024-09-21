"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("bootstrap/dist/css/bootstrap.min.css");
require("./App.css");
var _Scrollable = _interopRequireDefault(require("./components/Scrollable.jsx"));
var _Footer = _interopRequireDefault(require("./components/Footer"));
var _Menu = _interopRequireDefault(require("./components/Menu"));
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_axios.default.defaults.baseURL = 'http://localhost:5173';
_axios.default.defaults.withCredentials = true;
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(_Menu.default, null), /*#__PURE__*/React.createElement(_Scrollable.default, null), /*#__PURE__*/React.createElement(_Footer.default, null));
}
var _default = exports.default = App;