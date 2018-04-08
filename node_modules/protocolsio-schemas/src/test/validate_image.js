import { ProtocolsIOValidator } from './ProtocolsIOValidator'
import { Image } from '../schemas/Image';
var assert = require('chai').assert;


let i1_valid = {
  "source": "https://www.protocols.io/img/default_protocol.png",
  "placeholder": "https://www.protocols.io/img/default_protocol.png"
};

describe('Image validator', function() {
  describe('#validate()', function() {
    it('should return no errors when a valid object is passed in', function() {
      let validator_result = ProtocolsIOValidator.validate(i1_valid, Image);
      assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
	  });
  });
});
