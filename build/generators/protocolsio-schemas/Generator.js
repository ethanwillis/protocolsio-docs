"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Generator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _protocolsioSchemas = require("protocolsio-schemas");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Generator = function () {
  function Generator(schema) {
    _classCallCheck(this, Generator);

    this.schema = schema;
  }

  _createClass(Generator, [{
    key: "getMarkdownTable",
    value: function getMarkdownTable() {
      var markdown_table = "";

      var tuples = [];
      var properties = this.schema.properties;
      var property_keys = Object.keys(properties);
      property_keys.map(function (property_key) {
        var tuple = "|" + tuples.push({
          "property": property_key,
          "type": properties[property_key].type ? properties[property_key].type : "none",
          "description": properties[property_key].description
        });
      });
      markdown_table = this.getMarkdownHeader() + this.getTuplesMarkdown(tuples);
      return markdown_table;
    }
  }, {
    key: "getMarkdownHeader",
    value: function getMarkdownHeader() {
      return '| property | type | description |\n' + '|----------|------|-------------|\n';
    }
  }, {
    key: "getTuplesMarkdown",
    value: function getTuplesMarkdown(tuples) {
      var tuple_markdown = "";
      tuples.map(function (tuple) {
        tuple_markdown += '|' + tuple.property + '|' + tuple.type + '|' + tuple.description + '|\n';
      });
      return tuple_markdown;
    }
  }]);

  return Generator;
}();

var mygen = new Generator(_protocolsioSchemas.Case);
console.log(mygen.getMarkdownTable());
exports.Generator = Generator;