let Image = {
	"id": "/ProtocolsIO/Image",
	"title": "Image",
	"description": "A Protocols.io Image object. http://apidoc.protocols.io/v3/#image-object",
	"type": "object",
	"properties": {
		"source": {
			"description": "link to the image",
			"type": ["string", "null"]
		},
		"placeholder": {
			"description": "link to the image placeholder or original image link of placeholder is not exist",
			"type": ["string", "null"]
		}
	},
	"required": [
		"source",
		"placeholder"
	]
}

export { Image }
