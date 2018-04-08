// Depends on { User }
// Depends on { Image }

let Comment = {
	"id": "/ProtocolsIO/Comment",
	"title": "Comment",
	"description": "A Protocols.io Comment object. http://apidoc.protocols.io/v3/#comment-object",
	"type": "object",
	"properties": {
		"id": {
			"description": "unique comment integer identifier.",
			"type": "integer"
		},
		"parent_id": {
			"description": "id of parent comment.",
			"type": "integer"
		},
		"title": {
			"description": "title of comment.",
			"type": "string"
		},
		"body": {
			"description": "body of comment.",
			"type": "string"
		},
		"created_on": {
			"description": "unix timestamp. date/time of comment creation.",
			"type": "integer"
		},
		"changed_on": {
			"description": "unix timestamp. date/time when comment was modified last time.",
			"type": "integer"
		},
		"creator": {
			"description": "comment creator.",
			"$ref": "./User"
		},
		"comments": {
			"description": "comment replies.",
			"type": "array",
			"items": {
				"$ref": "./Comment"
			}
		}
	},
	"required": [
		"id", "parent_id", "title",
		"body", "created_on", "changed_on",
		"creator", "comments"
	]
}

export { Comment }
