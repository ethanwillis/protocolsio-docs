"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var Case = {
	"id": "/ProtocolsIO/Case",
	"title": "Case",
	"description": "A Protocols.io Case object. See Case type 21: http://apidoc.protocols.io/v3/#step-component-types",
	"type": "object",
	"properties": {
		"title": {
			"description": "title of a case.",
			"type": "string"
		},
		"label": {
			"description": "label of a case.",
			"type": ["string", "null"]
		},
		"step_id": {
			"description": "linked step id.",
			"type": ["integer", "null"]
		},
		"step_guid": {
			"description": "linked step guid.",
			"type": ["string", "null"]
		}
	},
	"required": ["title", "label", "step_id", "step_guid"]
};

exports.Case = Case;