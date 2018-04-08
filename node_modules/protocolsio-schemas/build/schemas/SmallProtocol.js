"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
// Depends on { Image }

var SmallProtocol = {
	"id": "/ProtocolsIO/SmallProtocol",
	"title": "SmallProtocol",
	"description": "A Protocols.io SmallProtocol object. http://apidoc.protocols.io/v3/#small-protocol-object",
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
		"version_id": {
			"description": "0...n. Version number of this protocol.",
			"type": "integer"
		},
		"doi": {
			"description": "DOI of this protocol.",
			"type": ["string", "null"]
		},
		"uri": {
			"description": "unique protocol text identifier.",
			"type": "string"
		},
		"published_on": {
			"description": "unix timestamp. date/time when this protocol was published.",
			"type": ["integer", "null"]
		}
	},
	"required": ["id", "title", "image", "version_id", "doi", "uri", "published_on"]
};

exports.SmallProtocol = SmallProtocol;