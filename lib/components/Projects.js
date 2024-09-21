"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Projects;
require("core-js/modules/es.object.assign.js");
var _Container = _interopRequireDefault(require("react-bootstrap/Container"));
var _Nav = _interopRequireDefault(require("react-bootstrap/Nav"));
var _Row = _interopRequireDefault(require("react-bootstrap/Row"));
var _Col = _interopRequireDefault(require("react-bootstrap/Col"));
var _TabContainer = _interopRequireDefault(require("react-bootstrap/TabContainer"));
var _TabContent = _interopRequireDefault(require("react-bootstrap/TabContent"));
var _TabPane = _interopRequireDefault(require("react-bootstrap/TabPane"));
var _ProjectCard = _interopRequireDefault(require("./ProjectCard"));
require("./Projects.css");
var _YelpCamp = _interopRequireDefault(require("../assets/images/YelpCamp.jpg"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Projects() {
  const projects = [{
    title: 'YelpCamp',
    description: 'Web Application for visiualizing a blog of campgrounds around the world. Users can add campground information to a global map, upload photos and leave reviews. Create a Username and Password to ensure secruity and authenticity.',
    imgUrl: _YelpCamp.default
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "project",
    id: "project"
  }, /*#__PURE__*/React.createElement(_Container.default, null, /*#__PURE__*/React.createElement(_Row.default, null, /*#__PURE__*/React.createElement(_Col.default, {
    xs: 12,
    md: 6,
    xl: 5
  }, /*#__PURE__*/React.createElement("h3", null, "YelpCamp"), /*#__PURE__*/React.createElement("p", null, "YelpCamp description"), /*#__PURE__*/React.createElement(_TabContainer.default, {
    id: "projects-tab",
    defaultActiveKey: "first"
  }, /*#__PURE__*/React.createElement(_Nav.default, {
    variant: "pills",
    className: "nav-pills mb-5 justify-content-center align-items-center",
    id: "pills-tab"
  }, /*#__PURE__*/React.createElement(_Nav.default.Item, null, /*#__PURE__*/React.createElement(_Nav.default.Link, {
    eventKey: "link-1"
  }, "YelpCamp")), /*#__PURE__*/React.createElement(_Nav.default.Item, null, /*#__PURE__*/React.createElement(_Nav.default.Link, {
    eventKey: "link-2"
  }, "Project 2")))), /*#__PURE__*/React.createElement(_TabContent.default, null, /*#__PURE__*/React.createElement(_TabPane.default, {
    eventKey: "link-1"
  }, /*#__PURE__*/React.createElement(_Row.default, null, projects.map((project, index) => {
    return /*#__PURE__*/React.createElement(_ProjectCard.default, _extends({
      key: index
    }, project));
  }))), /*#__PURE__*/React.createElement(_TabPane.default, {
    eventKey: "link-2"
  }, "Coming Soon"))))));
}