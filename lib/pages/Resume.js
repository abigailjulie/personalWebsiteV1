"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Resume;
var _react = _interopRequireDefault(require("react"));
var _reactPdf = require("react-pdf");
var _AbigailFigaroResume = _interopRequireDefault(require("../assets/pdf/AbigailFigaroResume.pdf"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Resume() {
  return /*#__PURE__*/_react.default.createElement(_reactPdf.Document, {
    file: _AbigailFigaroResume.default
  }, /*#__PURE__*/_react.default.createElement(_reactPdf.Page, {
    pageNumber: 1
  }));
}