'use strict';

var _ProtocolsIOValidator = require('./ProtocolsIOValidator');

var _SmallProtocol = require('../schemas/SmallProtocol');

var assert = require('chai').assert;

var sp1_valid = {
  "id": 8503,
  "title": "Gene calling with Prodigal",
  "image": {
    "source": "https://www.protocols.io/img/default_protocol.png",
    "placeholder": "https://www.protocols.io/img/default_protocol.png"
  },
  "version_id": 0,
  "doi": "dx.doi.org/10.17504/protocols.io.kixcufn",
  "uri": "gene-calling-with-prodigal-kixcufn",
  "published_on": 1509493090
};

describe('Small Protocol validator', function () {
  describe('#validate()', function () {
    it('should return no errors when a valid small protocol object is passed in', function () {
      var validator_result = _ProtocolsIOValidator.ProtocolsIOValidator.validate(sp1_valid, _SmallProtocol.SmallProtocol);
      assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
    });
  });
});