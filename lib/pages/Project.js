"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Project;
var _reactRouterDom = require("react-router-dom");
//this give the page context of the projectid

function Project() {
  const params = (0, _reactRouterDom.useParams)();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Project Page ", params.projectId));
}
;