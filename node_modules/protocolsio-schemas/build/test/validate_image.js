'use strict';

var _ProtocolsIOValidator = require('./ProtocolsIOValidator');

var _Image = require('../schemas/Image');

var assert = require('chai').assert;

var i1_valid = {
  "source": "https://www.protocols.io/img/default_protocol.png",
  "placeholder": "https://www.protocols.io/img/default_protocol.png"
};

describe('Image validator', function () {
  describe('#validate()', function () {
    it('should return no errors when a valid object is passed in', function () {
      var validator_result = _ProtocolsIOValidator.ProtocolsIOValidator.validate(i1_valid, _Image.Image);
      assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
    });
  });
});