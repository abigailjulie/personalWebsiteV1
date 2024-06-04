"use strict";

require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.test.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.loginUser = loginUser;
exports.test = test;
require("core-js/modules/es.promise.js");
var _auth = require("../helpers/auth.js");
function test(req, res) {
  res.json('test is working');
}
;
async function loginUser(req, res) {
  try {
    const {
      password
    } = req.body;

    //Check if match
    const match = await (0, _auth.comparePassword)(password, user.password);
    if (match) {
      //assign webtoken to track throughout application
      res.json('passwords match');
    }
  } catch (error) {
    console.log(error);
  }
}
;
var _default = exports.default = {
  test,
  loginUser
}; //Login API Endpoint