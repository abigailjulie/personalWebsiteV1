"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Name;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
require("./Scrollable.css");
var _ContactIcons = _interopRequireDefault(require("./ContactIcons"));
var _reactBootstrap = require("react-bootstrap");
var _Projects = _interopRequireDefault(require("../pages/Projects"));
var _Experience = _interopRequireDefault(require("./Experience"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Name() {
  const [activeLink, setActiveLink] = (0, _react.useState)('home');
  const [scrolled, setScrolled] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const onUpdateActiveLink = value => {
    setActiveLink(value);
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "banner",
    id: "home"
  }, /*#__PURE__*/React.createElement(_reactBootstrap.Container, {
    className: "d-flex"
  }, /*#__PURE__*/React.createElement(_reactBootstrap.Row, {
    className: "align-items-center"
  }, /*#__PURE__*/React.createElement(_reactBootstrap.Col, {
    xs: 12,
    md: 6,
    xl: 5,
    className: "name"
  }, /*#__PURE__*/React.createElement("h1", null, "Abigail Figaro"), /*#__PURE__*/React.createElement("h3", null, "Full Stack Developer"), /*#__PURE__*/React.createElement("p", null, "I design a digital environments that bridge the gap of accessibility with creativity."), /*#__PURE__*/React.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/React.createElement("nav", {
    className: scrolled && 'scrolled'
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/home",
    className: activeLink === 'home' ? 'active navbar-link' : 'navbar-link',
    onClick: () => onUpdateActiveLink('home')
  }, "About")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/resume",
    className: activeLink === 'resume' ? 'active navbar-link' : 'navbar-link',
    onClick: () => onUpdateActiveLink('resume')
  }, "Resume")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/projects",
    className: activeLink === 'projects' ? 'active navbar-link' : 'navbar-link',
    onClick: () => onUpdateActiveLink('projects')
  }, "Projects"))))), /*#__PURE__*/React.createElement("div", {
    className: "contactIcons"
  }, /*#__PURE__*/React.createElement(_ContactIcons.default, null))), /*#__PURE__*/React.createElement(_reactBootstrap.Col, {
    xs: 12,
    md: 6,
    xl: 6,
    className: "aboutMe ms-auto"
  }, /*#__PURE__*/React.createElement("p", null, "I have over 7 years experience working in boutique architecture firms as an Architectural Designer and I have been building software for a year."), /*#__PURE__*/React.createElement("p", null, "I believe that the key to improving the quality of life of marginalized people is access. Greater accessibility to education and knowledge leads to transformative opportunity. As an architect I\u2019ve realized that the demographic of the benefactor or end-user group was too narrow. The people who have access to a highly curated, built environment are often the top 2% of the world. By turning my focus to a digital realm, I can lower the threshold of entry to someone with access to wifi. "), /*#__PURE__*/React.createElement("p", null, "As a Designer, my experience has been focused on creating spatial solutions using innovative technology to provide a functional and cohesive space that improves the workflow of the end user. I led projects from end to end working closely with the client, external consultants and managing a five person team of designers. As a Developer, my experience is in building RESTful applications with a focus on scalability and legibility. I\u2019ve successfully built and deployed custom web applications using reusable and responsive UI components. "), /*#__PURE__*/React.createElement(_Experience.default, null), /*#__PURE__*/React.createElement(_Projects.default, null)))));
}