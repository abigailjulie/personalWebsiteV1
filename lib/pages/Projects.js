"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Projects;
var _reactBootstrap = require("react-bootstrap");
var _ProjectCard = _interopRequireDefault(require("../components/ProjectCard"));
var _YelpCamp = _interopRequireDefault(require("../assets/images/YelpCamp.jpg"));
require("../pages/Projects.css");
var _Project1Badge = _interopRequireDefault(require("../components/Project1Badge"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Projects() {
  const projects = [{
    title: 'YelpCamp',
    description: 'blog application for campgrounds around the world',
    imgUrl: _YelpCamp.default
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "project",
    id: "projects"
  }, /*#__PURE__*/React.createElement(_reactBootstrap.Container, {
    className: "d-flex",
    id: "container"
  }, /*#__PURE__*/React.createElement(_reactBootstrap.Row, {
    className: "ms-auto align-items-center"
  }, /*#__PURE__*/React.createElement(_reactBootstrap.Col, {
    xs: 12,
    md: 5,
    className: "proj-img p-0 me-0"
  }, /*#__PURE__*/React.createElement("img", {
    src: _YelpCamp.default,
    width: "200",
    height: "125",
    alt: "image"
  })), /*#__PURE__*/React.createElement(_reactBootstrap.Col, {
    xs: 12,
    md: 7,
    className: "proj-text align-items-end"
  }, /*#__PURE__*/React.createElement("p", null, "blog application for campgrounds around the world!"), /*#__PURE__*/React.createElement(_Project1Badge.default, null)))));
}
;