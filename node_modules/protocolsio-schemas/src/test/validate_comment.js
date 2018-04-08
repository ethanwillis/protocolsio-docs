import { ProtocolsIOValidator } from './ProtocolsIOValidator'
import { Comment } from '../schemas/Comment';
var assert = require('chai').assert;

let c1_valid = {
  "id": 16620,
  "parent_id": 0,
  "uri": "comment-on-step-1-of-untitled-protocol1",
  "title": "Comment on step 1 of untitled protocol",
  "body": "<p>Make if cool!</p>",
  "created_on": 1517933093,
  "changed_on": 0,
  "creator": {
    "name": "Lenny Teytelman",
    "affiliation": "protocols.io",
    "username": "lenny-teytelman",
    "link": null,
    "image": {
      "source": "/img/avatars/005.png",
      "placeholder": "/img/avatars/005.png"
    }
  },
  "comments": []
};

let c2_valid = {
  "id": 16620,
  "parent_id": 0,
  "uri": "comment-on-step-1-of-untitled-protocol1",
  "title": "Comment on step 1 of untitled protocol",
  "body": "<p>Make if cool!</p>",
  "created_on": 1517933093,
  "changed_on": 0,
  "creator": {
    "name": "Lenny Teytelman",
    "affiliation": "protocols.io",
    "username": "lenny-teytelman",
    "link": null,
    "image": {
      "source": "/img/avatars/005.png",
      "placeholder": "/img/avatars/005.png"
    }
  },
  "comments": [
    {
      "id": 16621,
      "parent_id": 16620,
      "uri": "comment-on-step-1-of-untitled-protocol1",
      "title": "Comment on step 1 of untitled protocol",
      "body": "<p>Make if cool!</p>",
      "created_on": 1517933094,
      "changed_on": 0,
      "creator": {
        "name": "Lenny Teytelman",
        "affiliation": "protocols.io",
        "username": "lenny-teytelman",
        "link": null,
        "image": {
          "source": "/img/avatars/005.png",
          "placeholder": "/img/avatars/005.png"
        }
      },
      "comments": []
    }
  ]
};

describe('Comment validator', function() {
  describe('#validate()', function() {
  	it('should return no errors when a valid object without threaded comments is passed in', function() {
        let validator_result = ProtocolsIOValidator.validate(c1_valid, Comment);
  	    assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
  	});
    
  	it('should return no errors when a valid object with threaded comments is passed in', function() {
        let validator_result = ProtocolsIOValidator.validate(c2_valid, Comment)
  	    assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
  	});
  });
});
