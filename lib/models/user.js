"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const {
  Schema
} = _mongoose.default;
const userSchema = new _mongoose.default.Schema({
  name: String,
  password: String
});
module.exports = _mongoose.default.model('User', userSchema);