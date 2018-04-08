import { ProtocolsIOValidator } from './ProtocolsIOValidator'
import {
	 StepComponentType1, StepComponentType3, StepComponentType4,
	 StepComponentType6, StepComponentType7, StepComponentType8,
	 StepComponentType9, StepComponentType13, StepComponentType15,
	 StepComponentType17, StepComponentType18, StepComponentType19,
	 StepComponentType20, StepComponentType21, StepComponentType22,
	 StepComponentType24, StepComponentType25, StepComponentType26
 } from '../schemas/StepComponentType';

var assert = require('chai').assert;
/*
	Create all test input objects for both valid and invalid cases.
*/

// Valid Cases
let sct1_valid = {
  "description": "<p>step to make smth</p>"
};

let sct3_valid = {
  "amount": 11,
  "unit": "µl",
  "title": "of MGH"
};

let sct4_valid = {
  "duration": 11,
  "title": "boil"
};

let sct6_valid = {
  "title": "boil"
}

let sct7_valid = {
  "link": "boil"
};

let sct8_valid = {
  "name": "what",
  "developer": "me",
  "repository": "https://google.com",
  "link": "https://google.com",
  "os_name": "win",
  "os_version": "10"
};

let sct9_valid = {
  "name": "DataTable",
  "link": "https://protocols.io"
};

let sct13_valid = {
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

let sct15_valid = {
  "name": "Code",
  "command": "echo 'hello world!'",
  "os_name": "windows",
  "os_version": "10"
};

let sct17_valid = {
  "body": "<p>should be something</p>"
}

let sct18_valid = {
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

let sct19_valid = {
  "body": "<p>dont' do something</p>",
  "link": "https://protocols.io"
};

let sct20_valid = {
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

let sct21_valid = {
  "cases": [
    {
      "title": "Measurment A",
      "label": "Case 1",
      "step_id": 595210,
      "step_guid": "1167CDCBFDB64CD4BA50A5016F4474B6"
    },
    {
      "title": "MEasurment B",
      "label": "Case 2",
      "step_id": 595211,
      "step_guid": "DE9EA0FAF6E149528A4DAEFCA2DCC927"
    }
  ]
};

let sct22_valid = {
  "title": "Reason for repeating the step",
  "step_guid": "E70FDFE632504ADFB0ED519ABB5449B1"
};

let sct24_valid = {
  "temperature": 12,
  "unit": "°C",
  "title": "boil"
};

let sct25_valid = {
  "concentration": 12,
  "unit": "°C",
  "title": "boil"
}

let sct26_valid = {
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
}

// Invalid Cases TODO

// Test Valid Cases.

describe('Step Component Type validator', function() {
	describe('#validate()', function() {
		it('should return no errors for step component type 1', function() {
			let validator_result = ProtocolsIOValidator.validate(sct1_valid, StepComponentType1);
	    assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
		});

		it('should return no errors for step component type 3', function() {
			let validator_result = ProtocolsIOValidator.validate(sct3_valid, StepComponentType3);
	    assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
		});

		it('should return no errors for step component type 4', function() {
			let validator_result = ProtocolsIOValidator.validate(sct4_valid, StepComponentType4);
	    assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
		});

		it('should return no errors for step component type 6', function() {
			let validator_result = ProtocolsIOValidator.validate(sct6_valid, StepComponentType6);
	    assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
		});

		it('should return no errors for step component type 7', function() {
			let validator_result = ProtocolsIOValidator.validate(sct7_valid, StepComponentType7);
			assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
		});

		it('should return no errors for step component type 8', function() {
			let validator_result = ProtocolsIOValidator.validate(sct8_valid, StepComponentType8);
			assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
		});

		it('should return no errors for step component type 9', function() {
			let validator_result = ProtocolsIOValidator.validate(sct9_valid, StepComponentType9);
			assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
		});

		it('should return no errors for step component type 13', function() {
			let validator_result = ProtocolsIOValidator.validate(sct13_valid, StepComponentType13);
			assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
		});

		it('should return no errors for step component type 15', function() {
			let validator_result = ProtocolsIOValidator.validate(sct15_valid, StepComponentType15);
			assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
		});

		it('should return no errors for step component type 17', function() {
			let validator_result = ProtocolsIOValidator.validate(sct17_valid, StepComponentType17);
			assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
		});

		it('should return no errors for step component type 18', function() {
			let validator_result = ProtocolsIOValidator.validate(sct18_valid, StepComponentType18);
			assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
		});

		it('should return no errors for step component type 1', function() {
			let validator_result = ProtocolsIOValidator.validate(sct19_valid, StepComponentType19);
			assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
		});

		it('should return no errors for step component type 20', function() {
			let validator_result = ProtocolsIOValidator.validate(sct20_valid, StepComponentType20);
			assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
		});

		it('should return no errors for step component type 21', function() {
			let validator_result = ProtocolsIOValidator.validate(sct21_valid, StepComponentType21);
			assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
		});

		it('should return no errors for step component type 22', function() {
			let validator_result = ProtocolsIOValidator.validate(sct22_valid, StepComponentType22);
			assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
		});

		it('should return no errors for step component type 24', function() {
			let validator_result = ProtocolsIOValidator.validate(sct24_valid, StepComponentType24);
			assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
		});

		it('should return no errors for step component type 25', function() {
			let validator_result = ProtocolsIOValidator.validate(sct25_valid, StepComponentType25);
			assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
		});

		it('should return no errors for step component type 26', function() {
			let validator_result = ProtocolsIOValidator.validate(sct26_valid, StepComponentType26);
			assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
		});
  });
});

// Test Invalid Cases. TODO
