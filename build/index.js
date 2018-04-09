"use strict";

var _protocolsioSchemas = require("protocolsio-schemas");

var u = {
  "name": "Vladimir Frolov",
  "affiliation": null,
  "username": "vladimir-frolov10",
  "link": null,
  "image": {
    "source": "https://s3.amazonaws.com/pr-journal/djqbjf6.jpg",
    "placeholder": "https://s3.amazonaws.com/pr-journal/djqbjf6.jpg"
  }
};

console.log(_protocolsioSchemas.ProtocolsIOValidator.validate(u, _protocolsioSchemas.User));