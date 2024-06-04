"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _authController = require("../controllers/authController.js");
var _App = _interopRequireDefault(require("../App.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const router = _express.default.Router();

//middleware
router.use((0, _cors.default)({
  credentials: true,
  origin: 'http://localhost:8000'
}));
router.get('/', _App.default);
router.post('/home');
router.post('/', _authController.loginUser);
var _default = exports.default = router;