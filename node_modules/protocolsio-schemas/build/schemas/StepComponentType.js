'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.StepComponentType26 = exports.StepComponentType25 = exports.StepComponentType24 = exports.StepComponentType22 = exports.StepComponentType21 = exports.StepComponentType20 = exports.StepComponentType19 = exports.StepComponentType18 = exports.StepComponentType17 = exports.StepComponentType15 = exports.StepComponentType13 = exports.StepComponentType9 = exports.StepComponentType8 = exports.StepComponentType7 = exports.StepComponentType6 = exports.StepComponentType4 = exports.StepComponentType3 = exports.StepComponentType1 = undefined;

var _Comment = require('./Comment');

var _Protocol = require('./Protocol');

var _Reagent = require('./Reagent');

// "Description" Type: Description of the step, can contain html strings
var StepComponentType1 = {
	"id": "/ProtocolsIO/StepComponentType1",
	"title": "StepComponentType1",
	"description": "A Protocols.io StepComponentType1 object. Description Type: Description of the step, can contain html tags. http://apidoc.protocols.io/v3/#step-component-types",
	"type": "object",
	"properties": {
		"description": {
			"description": "html",
			"type": "string"
		}
	},
	"required": ["description"]

	// "Amount" Type: A quantity of something, typically the total of a reagent, size, value etc.
}; // Depends on { Case }

// These imports are necessary because several of these ComponentTypes exactly mirror
// these objects. For an example search Comment.properties, Protocol.properties,
// or Reagent.properties in this file.
var StepComponentType3 = {
	"id": "/ProtocolsIO/StepComponentType3",
	"title": "StepComponentType3",
	"description": "A Protocols.io StepComponentType3 object. Amount Type: A quantity of something, typically the total of a reagent, size, value etc. http://apidoc.protocols.io/v3/#step-component-types",
	"type": "object",
	"properties": {
		"amount": {
			"description": "amount quantity.",
			"type": "integer"
		},
		"unit": {
			"description": "unit.",
			"type": "string"
		},
		"title": {
			"description": "title of amount.",
			"type": "string"
		}
	},
	"required": ["amount", "unit", "title"]

	// "Duration" Type
};var StepComponentType4 = {
	"id": "/ProtocolsIO/StepComponentType4",
	"title": "StepComponentType4",
	"description": "A Protocols.io StepComponentType4 object. Duration Type. http://apidoc.protocols.io/v3/#step-component-types",
	"type": "object",
	"properties": {
		"duration": {
			"description": "duration in milliseconds.",
			"type": "integer"
		},
		"title": {
			"description": "title of amount.",
			"type": "string"
		}
	},
	"required": ["duration", "title"]

	// "Title" Type
};var StepComponentType6 = {
	"id": "/ProtocolsIO/StepComponentType6",
	"title": "StepComponentType6",
	"description": "A Protocols.io StepComponentType6 object. Title Type. http://apidoc.protocols.io/v3/#step-component-types",
	"type": "object",
	"properties": {
		"title": {
			"description": "title of step.",
			"type": "string"
		}
	},
	"required": ["title"]

	// "Link" Type
};var StepComponentType7 = {
	"id": "/ProtocolsIO/StepComponentType7",
	"title": "StepComponentType7",
	"description": "A Protocols.io StepComponentType7 object. Link Type. http://apidoc.protocols.io/v3/#step-component-types",
	"type": "object",
	"properties": {
		"link": {
			"description": "external url.",
			"type": "string"
		}
	},
	"required": ["link"]

	// "Software Package" Type
};var StepComponentType8 = {
	"id": "/ProtocolsIO/StepComponentType8",
	"title": "StepComponentType8",
	"description": "A Protocols.io StepComponentType8 object. Software Package Type. http://apidoc.protocols.io/v3/#step-component-types",
	"type": "object",
	"properties": {
		"name": {
			"description": "name of software.",
			"type": "string"
		},
		"developer": {
			"description": "developer of software.",
			"type": "string"
		},
		"repository": {
			"description": "url or name of repository",
			"type": "string"
		},
		"link": {
			"description": "external url",
			"type": "string"
		},
		"os_name": {
			"description": "name of operating system.",
			"type": "string"
		},
		"os_version": {
			"description": "version of operating system.",
			"type": "string"
		}
	},
	"required": ["name", "developer", "repository", "link", "os_name", "os_version"]

	// "Dataset Package" Type
};var StepComponentType9 = {
	"id": "/ProtocolsIO/StepComponentType9",
	"title": "StepComponentType9",
	"description": "A Protocols.io StepComponentType9 object. Dataset Package Type. http://apidoc.protocols.io/v3/#step-component-types",
	"type": "object",
	"properties": {
		"name": {
			"description": "name of software.",
			"type": "string"
		},
		"link": {
			"description": "external url.",
			"type": "string"
		}
	},
	"required": ["name", "link"]

	// "Comment" Type
};var StepComponentType13 = {
	"id": "/ProtocolsIO/StepComponentType13",
	"title": "StepComponentType13",
	"description": "A Protocols.io StepComponentType13 object. Comment Type. http://apidoc.protocols.io/v3/#step-component-types",
	"type": "object",
	"properties": _Comment.Comment.properties

	// "Command Package" Type
};var StepComponentType15 = {
	"id": "/ProtocolsIO/StepComponentType15",
	"title": "StepComponentType15",
	"description": "A Protocols.io StepComponentType15 object. Command Package Type. http://apidoc.protocols.io/v3/#step-component-types",
	"type": "object",
	"properties": {
		"name": {
			"description": "name of software.",
			"type": "string"
		},
		"command": {
			"description": "executable command.",
			"type": "string"
		},
		"os_name": {
			"description": "name of operating system.",
			"type": "string"
		},
		"os_version": {
			"description": "version of operating system.",
			"type": "string"
		}
	},
	"required": ["name", "command", "os_name", "os_version"]

	// "Expected Result" Type
};var StepComponentType17 = {
	"id": "/ProtocolsIO/StepComponentType17",
	"title": "StepComponentType17",
	"description": "A Protocols.io StepComponentType17 object.i Expected Result Type. http://apidoc.protocols.io/v3/#step-component-types",
	"type": "object",
	"properties": {
		"body": {
			"description": "body can contain html tags.",
			"type": "string"
		}
	},
	"required": ["body"]

	// "Protocol" Type
};var StepComponentType18 = {
	"id": "/ProtocolsIO/StepComponentType18",
	"title": "StepComponentType18",
	"description": "A Protocols.io StepComponentType18 object. Protocol Type. http://apidoc.protocols.io/v3/#step-component-types",
	"type": "object",
	"properties": _Protocol.Protocol.properties

	// "Safety Information" Type
};var StepComponentType19 = {
	"id": "/ProtocolsIO/StepComponentType19",
	"title": "StepComponentType19",
	"description": "A Protocols.io StepComponentType19 object. Safety Information Type. http://apidoc.protocols.io/v3/#step-component-types",
	"type": "object",
	"properties": {
		"body": {
			"description": "body can contain html tags.",
			"type": "string"
		},
		"link": {
			"description": "external url.",
			"type": "string"
		}
	},
	"required": ["body", "link"]

	// "Reagent" Type
};var StepComponentType20 = {
	"id": "/ProtocolsIO/StepComponentType20",
	"title": "StepComponentType20",
	"description": "A Protocols.io StepComponentType20 object. Reagent Type. http://apidoc.protocols.io/v3/#step-component-types",
	"type": "object",
	"properties": _Reagent.Reagent.properties

	// "Step Cases" Type
};var StepComponentType21 = {
	"id": "/ProtocolsIO/StepComponentType21",
	"title": "StepComponentType21",
	"description": "A Protocols.io StepComponentType21 object. Step Cases Type. http://apidoc.protocols.io/v3/#step-component-types",
	"type": "object",
	"properties": {
		"cases": {
			"description": "list of case objects.",
			"type": "array",
			"items": {
				"$ref": "./Case"
			}
		}
	},
	"required": ["cases"]

	// "Go To Previous Step" Type
};var StepComponentType22 = {
	"id": "/ProtocolsIO/StepComponentType22",
	"title": "StepComponentType22",
	"description": "A Protocols.io StepComponentType22 object. Go To Previous Step Type. http://apidoc.protocols.io/v3/#step-component-types",
	"type": "object",
	"properties": {
		"title": {
			"description": "some text, usually explaining the reason to go to previous step.",
			"type": "string"
		},
		"step_guid": {
			"description": "linked step guid.",
			"type": "string"
		}
	},
	"required": ["title", "step_guid"]

	// "Temperature" Type
};var StepComponentType24 = {
	"id": "/ProtocolsIO/StepComponentType24",
	"title": "StepComponentType24",
	"description": "A Protocols.io StepComponentType24 object. Temperature Type. http://apidoc.protocols.io/v3/#step-component-types",
	"type": "object",
	"properties": {
		"temperature": {
			"description": "temperature value.",
			"type": "integer"
		},
		"unit": {
			"description": "unit.",
			"type": "string"
		},
		"title": {
			"description": "title of component.",
			"type": "string"
		}
	},
	"required": ["temperature", "unit", "title"]

	// "Concentration" Type
};var StepComponentType25 = {
	"id": "/ProtocolsIO/StepComponentType25",
	"title": "StepComponentType25",
	"description": "A Protocols.io StepComponentType25 object. Concentration Type. http://apidoc.protocols.io/v3/#step-component-types",
	"type": "object",
	"properties": {
		"concentration": {
			"description": "concentration value.",
			"type": "integer"
		},
		"unit": {
			"description": "unit.",
			"type": "string"
		},
		"title": {
			"title": "title of concentration.",
			"type": "string"
		}
	},
	"required": ["concentration", "unit", "title"]

	// "Note" Type
};var StepComponentType26 = {
	"id": "/ProtocolsIO/StepComponentType26",
	"title": "StepComponentType26",
	"description": "A Protocols.io StepComponentType26 object. Note Type. http://apidoc.protocols.io/v3/#step-component-types",
	"type": "object",
	"properties": _Comment.Comment.properties
};

exports.StepComponentType1 = StepComponentType1;
exports.StepComponentType3 = StepComponentType3;
exports.StepComponentType4 = StepComponentType4;
exports.StepComponentType6 = StepComponentType6;
exports.StepComponentType7 = StepComponentType7;
exports.StepComponentType8 = StepComponentType8;
exports.StepComponentType9 = StepComponentType9;
exports.StepComponentType13 = StepComponentType13;
exports.StepComponentType15 = StepComponentType15;
exports.StepComponentType17 = StepComponentType17;
exports.StepComponentType18 = StepComponentType18;
exports.StepComponentType19 = StepComponentType19;
exports.StepComponentType20 = StepComponentType20;
exports.StepComponentType21 = StepComponentType21;
exports.StepComponentType22 = StepComponentType22;
exports.StepComponentType24 = StepComponentType24;
exports.StepComponentType25 = StepComponentType25;
exports.StepComponentType26 = StepComponentType26;