"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Data = require("../Data");
var allowedKeys = ['country', 'currency', 'alpha2', 'alpha3', 'phoneCode', 'numeric'];
var getCorrespondingField = function getCorrespondingField(fieldToGet, fieldToRefer, fieldValue) {
  if (typeof fieldToGet !== "string" || typeof fieldToRefer !== "string" || typeof fieldValue !== "string") {
    throw new TypeError("All parameters must be strings.");
  }
  if (!(allowedKeys.includes(fieldToGet) || allowedKeys.includes(fieldToRefer))) {
    throw new Error("Allowed keys are 'country','currency','alpha2','alpha3','phoneCode' and 'numeric'");
  }
  fieldToRefer = fieldToRefer.toLowerCase();
  fieldToGet = fieldToGet.toLowerCase();
  fieldValue = fieldValue.trim();
  var valueToReturn = _Data.COUNTRIES.filter(function (item) {
    return item[fieldToRefer] === fieldValue;
  }).map(function (item) {
    return item[fieldToGet];
  });
  return valueToReturn.length === 1 ? valueToReturn[0] : valueToReturn;
};
var _default = exports["default"] = getCorrespondingField;