"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProjectCard;
require("core-js/modules/es.symbol.description.js");
var _reactBootstrap = require("react-bootstrap");
function ProjectCard(_ref) {
  let {
    title,
    description,
    imgUrl
  } = _ref;
  return /*#__PURE__*/React.createElement(_reactBootstrap.Col, {
    size: 12,
    sm: 6,
    md: 4
  }, /*#__PURE__*/React.createElement("div", {
    className: "proj-imgbx"
  }, /*#__PURE__*/React.createElement("img", {
    src: imgUrl
  }), /*#__PURE__*/React.createElement("div", {
    className: "proj-txtx"
  }, /*#__PURE__*/React.createElement("h4", null, title), /*#__PURE__*/React.createElement("span", null, description))));
}

/* <a 
                            className='inline-flex' 
                            href='https://abigaildesignsyelpcamp.onrender.com/' 
                            target='_blank' 
                            rel='noreferrer noopener' 
                            aria-label='YelpCamp'
                        >
                        {title}
                        </a> */