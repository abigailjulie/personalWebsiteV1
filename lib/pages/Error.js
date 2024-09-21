"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Error;
var _reactRouterDom = require("react-router-dom");
require("bootstrap/dist/css/bootstrap.min.css");
function Error() {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-2"
  }, /*#__PURE__*/React.createElement("h1", null, " 401 NOT Found"), /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/home"
  }, "Home from Link"));
}