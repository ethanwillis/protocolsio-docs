'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.case_generator = undefined;

var _protocolsioSchemas = require('protocolsio-schemas');

var _Generator2 = require('./Generator');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Case_Generator = function (_Generator) {
  _inherits(Case_Generator, _Generator);

  function Case_Generator() {
    _classCallCheck(this, Case_Generator);

    return _possibleConstructorReturn(this, (Case_Generator.__proto__ || Object.getPrototypeOf(Case_Generator)).call(this, _protocolsioSchemas.Case));
  }

  return Case_Generator;
}(_Generator2.Generator);

var case_generator = new Case_Generator(_protocolsioSchemas.Case);
exports.case_generator = case_generator;