// Depends on {
//   StepComponentType1, StepComponentType3, StepComponentType4,
//   StepComponentType6, StepComponentType7, StepComponentType8,
//   StepComponentType9, StepComponentType13, StepComponentType15
//   StepComponentType17, StepComponentType18, StepComponentType19.
//   StepComponentType20, StepComponentType21, StepComponentType22,
//   StepComponentType24, StepComponentType25, StepComponentType26
// }

let StepComponent = {
	"id": "/ProtocolsIO/StepComponent",
	"title": "StepComponent",
	"description": "A Protocols.io StepComponent object. http://apidoc.protocols.io/v3/#step-component-object",
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
		"order_id": {
			"description": "sequence number of component in the list starting from 0.",
			"type": "integer"
		},
		"type_id": {
			"description": "type of of component, one of step component types.",
			"type": "integer"
		},
		"title": {
			"description": "name of component.",
			"type": "string"
		},
		"source": {
			"description": "variative object of component, can be determine by type_id",
			"anyOf": [
				{
					"$ref": "./StepComponentType1"
				},
				{
					"$ref": "./StepComponentType3"
				},
				{
					"$ref": "./StepComponentType4"
				},
				{
					"$ref": "./StepComponentType6"
				},
				{
					"$ref": "./StepComponentType7"
				},
				{
					"$ref": "./StepComponentType8"
				},
				{
					"$ref": "./StepComponentType9"
				},
				{
					"$ref": "./StepComponentType13"
				},
				{
					"$ref": "./StepComponentType15"
				},
				{
					"$ref": "./StepComponentType17"
				},
				{
					"$ref": "./StepComponentType18"
				},
				{
					"$ref": "./StepComponentType19"
				},
				{
					"$ref": "./StepComponentType20"
				},
				{
					"$ref": "./StepComponentType21"
				},
				{
					"$ref": "./StepComponentType22"
				},
				{
					"$ref": "./StepComponentType24"
				},
				{
					"$ref": "./StepComponentType25"
				},
				{
					"$ref": "./StepComponentType26"
				}
			]
		}
	},
	"required": [
		"id", "guid", "order_id",
		"order_id", "type_id", "title",
		"source"
	]
}

export { StepComponent }
