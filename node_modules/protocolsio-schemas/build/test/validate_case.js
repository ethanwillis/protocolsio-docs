'use strict';

var _ProtocolsIOValidator = require('./ProtocolsIOValidator');

var _Case = require('../schemas/Case');

var assert = require('chai').assert;

var c1_valid = {
  "title": "A title for a case",
  "label": "this is a case i wrote.",
  "step_id": 0,
  "step_guid": "E70FDFE632504ADFB0ED519ABB5449B1"
};

var c2_valid = {
  "title": "A title for a case",
  "label": null,
  "step_id": null,
  "step_guid": null
};

describe('User validator', function () {
  describe('#validate()', function () {
    it('should return no errors when a valid case object is passed in', function () {
      var validator_result = _ProtocolsIOValidator.ProtocolsIOValidator.validate(c1_valid, _Case.Case);
      assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
    });

    it('should return no errors when a valid case object is passed in with a null values', function () {
      var validator_result = _ProtocolsIOValidator.ProtocolsIOValidator.validate(c2_valid, _Case.Case);
      assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
    });
  });
});