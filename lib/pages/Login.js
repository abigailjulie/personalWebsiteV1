"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Login;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _ri = require("react-icons/ri");
var _Button = _interopRequireDefault(require("react-bootstrap/Button"));
var _Form = _interopRequireDefault(require("react-bootstrap/Form"));
var _InputGroup = _interopRequireDefault(require("react-bootstrap/InputGroup"));
var _reactRouterDom = require("react-router-dom");
var _axios = _interopRequireDefault(require("axios"));
require("./Login.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Login() {
  const [loopNum, setLoopNum] = (0, _react.useState)(0);
  const [isDeleting, setIsDeleting] = (0, _react.useState)(false);
  const [text, setText] = (0, _react.useState)('');
  const [delta, setDelta] = (0, _react.useState)(300 - Math.random() * 100);
  const [index, setIndex] = (0, _react.useState)(1);
  const toRotate = ["Glad you're here :)"];
  const period = 1000;
  const [data, setData] = (0, _react.useState)({
    password: ''
  });

  // useEffect(() => {
  //   let ticker = setInterval(() => {
  //     tick();
  //   }, delta);

  //   return () => { clearInterval(ticker) };
  // }, [text])

  // const tick = () => {
  //   let i = loopNum % toRotate.length;
  //   let fullText = toRotate[i];
  //   let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

  //   setText(updatedText);

  //   if (isDeleting) {
  //     setDelta(prevDelta => prevDelta / 2);
  //   }

  //   if (!isDeleting && updatedText === fullText) {
  //     setIsDeleting(true);
  //     setIndex(prevIndex => prevIndex - 1);
  //     setDelta(period);
  //   } else if (isDeleting && updatedText === '') {
  //     setIsDeleting(false);
  //     setLoopNum(loopNum + 1);
  //     setIndex(1);
  //     setDelta(500);
  //   } else {
  //     setIndex(prevIndex => prevIndex + 1);
  //   }
  // }

  const loginUser = e => {
    e.preventDefault();
    _axios.default.get('/');
  };
  return /*#__PURE__*/_react.React.createElement(_react.React.Fragment, null, /*#__PURE__*/_react.React.createElement("div", null, /*#__PURE__*/_react.React.createElement("h1", null, "Welcome! ", /*#__PURE__*/_react.React.createElement("span", {
    className: "txt-rotate"
  }, /*#__PURE__*/_react.React.createElement("span", {
    className: "wrap"
  }, text)))), /*#__PURE__*/_react.React.createElement("div", {
    className: "login"
  }, /*#__PURE__*/_react.React.createElement("form", {
    onSubmit: loginUser
  }, /*#__PURE__*/_react.React.createElement("div", {
    className: "input-box"
  }, /*#__PURE__*/_react.React.createElement(_InputGroup.default, {
    className: "loginInput mb-3"
  }, /*#__PURE__*/_react.React.createElement(_Form.default.Control, {
    type: "password",
    placeholder: "Password",
    "aria-label": "Password",
    "aria-describedby": "basic-addon2",
    value: data.password,
    onChange: e => setData(_objectSpread(_objectSpread({}, data), {}, {
      password: e.target.value
    }))
  }), /*#__PURE__*/_react.React.createElement(_Button.default, {
    variant: "outline-secondary",
    id: "button-addon2",
    onClick: event => window.location.href = '/home'
  }, "Enter ", /*#__PURE__*/_react.React.createElement(_ri.RiLockPasswordLine, {
    className: "icon"
  })))))));
}
;