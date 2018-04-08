'use strict';

var _ProtocolsIOValidator = require('./ProtocolsIOValidator');

var _User = require('../schemas/User');

var assert = require('chai').assert;

var u1_valid = {
  "name": "Vladimir Frolov",
  "affiliation": null,
  "username": "vladimir-frolov10",
  "link": null,
  "image": {
    "source": "https://s3.amazonaws.com/pr-journal/djqbjf6.jpg",
    "placeholder": "https://s3.amazonaws.com/pr-journal/djqbjf6.jpg"
  }
};

describe('User validator', function () {
  describe('#validate()', function () {
    it('should return no errors when a valid user object is passed in', function () {
      var validator_result = _ProtocolsIOValidator.ProtocolsIOValidator.validate(u1_valid, _User.User);
      assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
    });
  });
});