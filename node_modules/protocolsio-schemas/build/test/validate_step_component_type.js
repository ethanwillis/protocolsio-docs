'use strict';

var _ProtocolsIOValidator = require('./ProtocolsIOValidator');

var _StepComponentType = require('../schemas/StepComponentType');

var assert = require('chai').assert;
/*
	Create all test input objects for both valid and invalid cases.
*/

// Valid Cases
var sct1_valid = {
  "description": "<p>step to make smth</p>"
};

var sct3_valid = {
  "amount": 11,
  "unit": "µl",
  "title": "of MGH"
};

var sct4_valid = {
  "duration": 11,
  "title": "boil"
};

var sct6_valid = {
  "title": "boil"
};

var sct7_valid = {
  "link": "boil"
};

var sct8_valid = {
  "name": "what",
  "developer": "me",
  "repository": "https://google.com",
  "link": "https://google.com",
  "os_name": "win",
  "os_version": "10"
};

var sct9_valid = {
  "name": "DataTable",
  "link": "https://protocols.io"
};

var sct13_valid = {
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

var sct15_valid = {
  "name": "Code",
  "command": "echo 'hello world!'",
  "os_name": "windows",
  "os_version": "10"
};

var sct17_valid = {
  "body": "<p>should be something</p>"
};

var sct18_valid = {
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
  "versions": [{
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
  }],
  "version_id": 0,
  "link": "",
  "number_of_steps": 3,
  "authors": [{
    "name": "Matt Sullivan Lab",
    "affiliation": "Matt Sullivan Lab",
    "username": null,
    "link": null,
    "image": {
      "source": null,
      "placeholder": null
    }
  }],
  "steps": [{
    "id": 595209,
    "guid": "E70FDFE632504ADFB0ED519ABB5449B1",
    "previous_id": 0,
    "previous_guid": null,
    "modified_on": 1517933242,
    "components": [{
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
    }]
  }],
  "materials": [{
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
  }]
};

var sct19_valid = {
  "body": "<p>dont' do something</p>",
  "link": "https://protocols.io"
};

var sct20_valid = {
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

var sct21_valid = {
  "cases": [{
    "title": "Measurment A",
    "label": "Case 1",
    "step_id": 595210,
    "step_guid": "1167CDCBFDB64CD4BA50A5016F4474B6"
  }, {
    "title": "MEasurment B",
    "label": "Case 2",
    "step_id": 595211,
    "step_guid": "DE9EA0FAF6E149528A4DAEFCA2DCC927"
  }]
};

var sct22_valid = {
  "title": "Reason for repeating the step",
  "step_guid": "E70FDFE632504ADFB0ED519ABB5449B1"
};

var sct24_valid = {
  "temperature": 12,
  "unit": "°C",
  "title": "boil"
};

var sct25_valid = {
  "concentration": 12,
  "unit": "°C",
  "title": "boil"
};

var sct26_valid = {
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

  // Invalid Cases TODO

  // Test Valid Cases.

};describe('Step Component Type validator', function () {
  describe('#validate()', function () {
    it('should return no errors for step component type 1', function () {
      var validator_result = _ProtocolsIOValidator.ProtocolsIOValidator.validate(sct1_valid, _StepComponentType.StepComponentType1);
      assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
    });

    it('should return no errors for step component type 3', function () {
      var validator_result = _ProtocolsIOValidator.ProtocolsIOValidator.validate(sct3_valid, _StepComponentType.StepComponentType3);
      assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
    });

    it('should return no errors for step component type 4', function () {
      var validator_result = _ProtocolsIOValidator.ProtocolsIOValidator.validate(sct4_valid, _StepComponentType.StepComponentType4);
      assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
    });

    it('should return no errors for step component type 6', function () {
      var validator_result = _ProtocolsIOValidator.ProtocolsIOValidator.validate(sct6_valid, _StepComponentType.StepComponentType6);
      assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
    });

    it('should return no errors for step component type 7', function () {
      var validator_result = _ProtocolsIOValidator.ProtocolsIOValidator.validate(sct7_valid, _StepComponentType.StepComponentType7);
      assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
    });

    it('should return no errors for step component type 8', function () {
      var validator_result = _ProtocolsIOValidator.ProtocolsIOValidator.validate(sct8_valid, _StepComponentType.StepComponentType8);
      assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
    });

    it('should return no errors for step component type 9', function () {
      var validator_result = _ProtocolsIOValidator.ProtocolsIOValidator.validate(sct9_valid, _StepComponentType.StepComponentType9);
      assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
    });

    it('should return no errors for step component type 13', function () {
      var validator_result = _ProtocolsIOValidator.ProtocolsIOValidator.validate(sct13_valid, _StepComponentType.StepComponentType13);
      assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
    });

    it('should return no errors for step component type 15', function () {
      var validator_result = _ProtocolsIOValidator.ProtocolsIOValidator.validate(sct15_valid, _StepComponentType.StepComponentType15);
      assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
    });

    it('should return no errors for step component type 17', function () {
      var validator_result = _ProtocolsIOValidator.ProtocolsIOValidator.validate(sct17_valid, _StepComponentType.StepComponentType17);
      assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
    });

    it('should return no errors for step component type 18', function () {
      var validator_result = _ProtocolsIOValidator.ProtocolsIOValidator.validate(sct18_valid, _StepComponentType.StepComponentType18);
      assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
    });

    it('should return no errors for step component type 1', function () {
      var validator_result = _ProtocolsIOValidator.ProtocolsIOValidator.validate(sct19_valid, _StepComponentType.StepComponentType19);
      assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
    });

    it('should return no errors for step component type 20', function () {
      var validator_result = _ProtocolsIOValidator.ProtocolsIOValidator.validate(sct20_valid, _StepComponentType.StepComponentType20);
      assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
    });

    it('should return no errors for step component type 21', function () {
      var validator_result = _ProtocolsIOValidator.ProtocolsIOValidator.validate(sct21_valid, _StepComponentType.StepComponentType21);
      assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
    });

    it('should return no errors for step component type 22', function () {
      var validator_result = _ProtocolsIOValidator.ProtocolsIOValidator.validate(sct22_valid, _StepComponentType.StepComponentType22);
      assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
    });

    it('should return no errors for step component type 24', function () {
      var validator_result = _ProtocolsIOValidator.ProtocolsIOValidator.validate(sct24_valid, _StepComponentType.StepComponentType24);
      assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
    });

    it('should return no errors for step component type 25', function () {
      var validator_result = _ProtocolsIOValidator.ProtocolsIOValidator.validate(sct25_valid, _StepComponentType.StepComponentType25);
      assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
    });

    it('should return no errors for step component type 26', function () {
      var validator_result = _ProtocolsIOValidator.ProtocolsIOValidator.validate(sct26_valid, _StepComponentType.StepComponentType26);
      assert.lengthOf(validator_result['errors'], 0, validator_result['errors']);
    });
  });
});

// Test Invalid Cases. TODO