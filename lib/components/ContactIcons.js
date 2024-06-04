"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactIcons;
var _github = _interopRequireDefault(require("../assets/images/github.svg"));
var _linkedin = _interopRequireDefault(require("../assets/images/linkedin.svg"));
require("./ContactIcons.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ContactIcons() {
  return /*#__PURE__*/React.createElement("span", {
    className: "contactIcons"
  }, /*#__PURE__*/React.createElement("div", {
    className: "socialIcons"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    src: _github.default,
    alt: "github"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    src: _linkedin.default,
    alt: "linkedin"
  }))));
}