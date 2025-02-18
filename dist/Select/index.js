"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Data = require("../Data");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Index = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var label = _ref.label,
    renderItem = _ref.renderItem;
  var _React$useState = _react["default"].useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    selected = _React$useState2[0],
    setSelected = _React$useState2[1];
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      getCountry: function getCountry() {
        var _selectedCountry;
        return (_selectedCountry = selectedCountry) === null || _selectedCountry === void 0 ? void 0 : _selectedCountry.label;
      },
      getAlpha2: function getAlpha2() {
        var _selectedCountry2;
        return (_selectedCountry2 = selectedCountry) === null || _selectedCountry2 === void 0 ? void 0 : _selectedCountry2.alpha2;
      },
      getAlpha3: function getAlpha3() {
        var _selectedCountry3;
        return (_selectedCountry3 = selectedCountry) === null || _selectedCountry3 === void 0 ? void 0 : _selectedCountry3.alpha3;
      },
      getNumeric: function getNumeric() {
        var _selectedCountry4;
        return (_selectedCountry4 = selectedCountry) === null || _selectedCountry4 === void 0 ? void 0 : _selectedCountry4.numeric;
      },
      getCurrency: function getCurrency() {
        var _selectedCountry5;
        return (_selectedCountry5 = selectedCountry) === null || _selectedCountry5 === void 0 ? void 0 : _selectedCountry5.currency;
      },
      getPhoneCode: function getPhoneCode() {
        var _selectedCountry6;
        return (_selectedCountry6 = selectedCountry) === null || _selectedCountry6 === void 0 ? void 0 : _selectedCountry6.phoneCode;
      }
    };
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: "10px"
    }
  }, label && /*#__PURE__*/_react["default"].createElement("label", null, label)), /*#__PURE__*/_react["default"].createElement("select", {
    value: selected,
    onChange: function onChange(val) {
      setSelected(val);
    }
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }, 'Select a country'), _Data.COUNTRIES.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: item.alpha2,
      value: item
    }, renderItem ? renderItem(item) : item.country);
  })));
});
var _default = exports["default"] = Index;