import { ProtocolsIOValidator } from './ProtocolsIOValidator'
import { Protocol } from '../schemas/Protocol';
var assert = require('chai').assert;

let p1_valid = {
  "id": 872,
  "title": "Lysis Buffer (20 mL)",
  "image": {
    "source": "https://www.protocols.io/img/default_protocol.png",
    "placeholder": "https://www.protocols.io/img/default_protocol.png"
  },
  "doi": "dx.doi.org/10.17504/protocols.io.c4gytv",
  "uri": "lysis-buffer-20-ml-c4gytv",
  "published_on": 1487372466,
  "created_on": 1434670606,
  "creator": {
    "name": "Celina Gomez",
    "affiliation": null,
    "username": "celina-gomez",
    "link": "",
    "image": {
      "source": null,
      "placeholder": null
    }
  },
  "public": 1,
  "versions": [
    {
      "id": 10091,
      "title": "untitled protocol",
      "image": {
        "source": "https://www.protocols.io/img/default_protocol.png",
        "placeholder": "https://www.protocols.io/img/default_protocol.png"
      },
      "version_id": 1,
      "doi": null,
      "uri": "untitled-protocol-m4jc8un",
      "published_on": 0
    }
  ],
  "version_id": 0,
  "link": "",
  "number_of_steps": 3,
  "authors": [
    {
      "name": "Matt Sullivan Lab",
      "affiliation": "Matt Sullivan Lab",
      "username": null,
      "link": null,
      "image": {
        "source": null,
        "placeholder": null
      }
    }
  ],
  "steps": [
    {
      "id": 595209,
      "guid": "E70FDFE632504ADFB0ED519ABB5449B1",
      "previous_id": 0,
      "previous_guid": null,
      "modified_on": 1517933242,
      "components": [
				{
          "id": 1023444,
          "guid": "A38362CBC954458FB069F821B6526B38",
          "order_id": 1023443,
          "type_id": 3,
          "title": "Amount",
          "source": {
            "amount": 11,
            "unit": "µl",
            "title": "of MGH"
          }
        }
      ]
    }
  ],
  "materials": [
    {
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
    }
  ]
};

describe('Protocol validator', function() {
  describe('#validate()', function() {
    it('should return no errors when a valid protocol object is passed in', function() {
      let validator_result = ProtocolsIOValidator.validate(p1_valid, Protocol);
      assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
	  });
  });
});
