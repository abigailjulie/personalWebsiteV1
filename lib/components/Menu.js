"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Menu;
function Menu() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 0,
      top: 0
    }
  }, /*#__PURE__*/React.createElement("select", null, /*#__PURE__*/React.createElement("option", {
    value: "Portugal"
  }, "Portugal"), /*#__PURE__*/React.createElement("option", {
    value: "Barcelona"
  }, "Barcelona"), /*#__PURE__*/React.createElement("option", {
    value: "Columbia"
  }, "Columbia"), /*#__PURE__*/React.createElement("option", {
    value: "San Diego"
  }, "San Diego")));
}