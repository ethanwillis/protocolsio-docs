// Depends on { StepComponent }

let Step = {
	"id": "/ProtocolsIO/Step",
	"title": "Step",
	"description": "A Protocols.io Step Object. http://apidoc.protocols.io/v3/#step-object",
	"type": "object",
	"properties": {
		"id": {
			"description": "unique step integer identifier.",
			"type": "integer"
		},
		"guid": {
			"description": "unique step guid.",
			"type": "string"
		},
		"previous_id": {
			"description": "id of previous step.",
			"type": "integer"
		},
		"previous_guid": {
			"description": "guid of previous step.",
			"type": ["string", "null"]
		},
		"modified_on": {
			"description": "unix timestamp. date/time when step was modified.",
			"type": "integer"
		},
		"components": {
			"description": "list of step components.",
			"type": "array",
			"items": {
				"$ref": "./StepComponent"
			}
		}
	},
	"required": [
		"id", "guid", "previous_id",
		"previous_guid", "modified_on", "components"
	]
}

export { Step }
