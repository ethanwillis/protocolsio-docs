// Depends on { Image }

let User = {
	"id": "/ProtocolsIO/User",
	"title": "User",
	"description": "A Protocols.io User object. http://apidoc.protocols.io/v3/#user-object",
	"type": "object",
	"properties": {
		"name": {
			"description": "user full name",
			"type": ["string", "null"]
		},
		"affiliation": {
			"description": "user affiliation",
			"type": ["string", "null"]
		},
		"username": {
			"description": "username",
			"type": ["string", "null"]
		},
		"link": {
			"description": "external url.",
			"type": ["string", "null"]
		},
		"image": {
			"description": "user profile image",
			"$ref": "./Image"
		}
	},
	"required": [
		"name", "affiliation", "username",
		"link", "image"
	]
}

export { User }
