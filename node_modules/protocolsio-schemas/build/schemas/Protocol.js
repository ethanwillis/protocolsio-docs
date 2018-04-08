"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
// Depends on { User }
// Depends on { Image }
// Depends on { SmallProtocol }

var Protocol = {
	"id": "/ProtocolsIO/Protocol",
	"title": "Protocol",
	"description": "A Protocols.io Protocol object. http://apidoc.protocols.io/v3/#protocol-object",
	"type": "object",
	"properties": {
		"id": {
			"description": "unique protocol integer identifier.",
			"type": "integer"
		},
		"title": {
			"description": "protocol title.",
			"type": "string"
		},
		"image": {
			"description": "protocol image.",
			"$ref": "./Image"
		},
		"doi": {
			"description": "DOI of this protocol.",
			"type": "string"
		},
		"uri": {
			"description": "unique protocol text identifier.",
			"type": "string"
		},
		"published_on": {
			"description": "unix timestamp. date/time when this protocol was published.",
			"type": ["integer", "null"]
		},
		"created_on": {
			"description": "unix timestamp. date/time of protocol creation.",
			"type": "integer"
		},
		"creator": {
			"description": "protocol creator",
			"$ref": "./User"
		},
		"public": {
			"description": "1 or 0. 1 means that this protocol is public and 0 otherwise.",
			"type": "integer"
		},
		"versions": {
			"description": "list of versions",
			"type": "array",
			"items": {
				"$ref": "./SmallProtocol"
			}
		},
		"version_id": {
			"description": "0...n. Version number of this protocol.",
			"type": "integer"
		},
		"link": {
			"description": "Link to this protocol.",
			"type": "string"
		},
		"number_of_steps": {
			"description": "number of steps of this protocol.",
			"type": ["integer", "null"]
		},
		"authors": {
			"description": "list of user or empty array",
			"type": "array",
			"items": {
				"$ref": "./User"
			}
		},
		"steps": {
			"description": "All of the steps in this protocol.",
			"type": "array",
			"items": {
				"$ref": "./Step"
			}
		},
		"materials": {
			"description": "Reagents required for this protocol.",
			"type": "array",
			"items": {
				"$ref": "./Reagent"
			}
		}
	},
	"required": ["id", "title", "image", "doi", "uri", "published_on", "created_on", "creator", "public", "versions", "version_id", "link", "number_of_steps", "authors"]
};

exports.Protocol = Protocol;