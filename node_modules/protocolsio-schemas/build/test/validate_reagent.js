'use strict';

var _ProtocolsIOValidator = require('./ProtocolsIOValidator');

var _Reagent = require('../schemas/Reagent');

var assert = require('chai').assert;

var r1_valid = {
  "id": 19751,
  "mol_weight": 0,
  "name": "2 mg Gastrin I, human",
  "linfor": "C130H204N38O31S",
  "url": "https://www.biorbyt.com/gastrin-i-human-orb321073",
  "sku": "orb321073",
  "vendor": {
    "name": "biorbyt",
    "affiliation": null,
    "username": null,
    "link": "https://www.biorbyt.com/",
    "image": {
      "source": "http://je-protocols/img/vendors/208.png",
      "placeholder": "http://je-protocols/img/vendors/208.png"
    }
  }
};

describe('Reagent validator', function () {
  describe('#validate()', function () {
    it('should return no errors when a valid reagent object is passed in', function () {
      var validator_result = _ProtocolsIOValidator.ProtocolsIOValidator.validate(r1_valid, _Reagent.Reagent);
      assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
    });
  });
});