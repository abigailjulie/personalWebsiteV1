"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Project1Badge;
var _Badge = _interopRequireDefault(require("react-bootstrap/Badge"));
var _Stack = _interopRequireDefault(require("react-bootstrap/Stack"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Project1Badge() {
  return /*#__PURE__*/React.createElement(_Stack.default, {
    direction: "horizontal",
    gap: 2
  }, /*#__PURE__*/React.createElement(_Badge.default, {
    pill: true,
    bg: "dark"
  }, "React"), /*#__PURE__*/React.createElement(_Badge.default, {
    pill: true,
    bg: "dark"
  }, "Node.js"), /*#__PURE__*/React.createElement(_Badge.default, {
    pill: true,
    bg: "dark"
  }, "MongoDB"), /*#__PURE__*/React.createElement(_Badge.default, {
    pill: true,
    bg: "dark"
  }, "Mongoose"), /*#__PURE__*/React.createElement(_Badge.default, {
    pill: true,
    bg: "dark"
  }, "Render"));
}