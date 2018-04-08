# protocolsio-schemas
This package is meant to provide a collection of schemas that model all objects available in the [Protocols.io v3 api](http://apidoc.protocols.io/v3/). As well a [jsonschema](https://www.npmjs.com/package/jsonschema) validator object is provided that allows you to validate any instance of a Protocols.io object to check if it is valid according to the schema. All schemas are implemented using JSON-SCHEMA.

View the NPM page [here](https://www.npmjs.com/package/protocolsio-schemas)

## Index
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Objects](#objects)
  - [User](#user)
  - [Image](#image)
  - [Reagent](#reagent)
  - [Comment](#comment)
  - [Small Protocol](#small-protocol)
  - [Protocol](#protocol)
  - [Step](#step)
  - [Step Component](#step-component)
  - [Step Component Type](#step-component-type)
  - [Case](#case)
- [Object Validation](#object-validation)
- [Development](#development)
  - [Project Structure](#project-structure)
  - [Running Tests](#running-tests)

# Installation
```sh
npm install --save protocolsio-schemas
```

# Quick Start
```javascript
import { ProtocolsIOValidator, User } from 'protocolsio-schemas'
let u = {
    "user": {
      "name": "Vladimir Frolov",
      "affiliation": null,
      "username": "vladimir-frolov10",
      "link": null,
      "image": {
        "source": "https://s3.amazonaws.com/pr-journal/djqbjf6.jpg",
        "placeholder": "https://s3.amazonaws.com/pr-journal/djqbjf6.jpg"
      }
    }
}

console.log(ProtocolsIOValidator.validate(u, User))
```

# Objects
**Note**: Under guidance from the Protocols.IO API developer the following fields are currently the only ones that can be confidently said to never be null: id, title, uri, and created_on. Code your checks around this appropriately.

## User
| property | type | description |
|----|---|---|
| name | string | user full name |
| affiliation | string OR null | user affiliation |
| username | string OR null | username |
| link | string OR null | external url. |
| image | [Image](#image) | user profile image |

## Image
| property | type | description |
|----|---|---|
| source | string OR null | link to the image. |
| placeholder | string OR null | link to the image placeholder or original image link of placeholder is not exist |

## Reagent
| property | type | description |
|----|---|---|
| id | integer | unique reagent integer identifier. |
| mol_weight | number | molarity weight |
| name | string | name of reagent. |
| linfor | string | linear formula |
| url | string OR null | external url |
| sku | string | reagent sku. |
| vendor | [User](#user) | reagent vendor. |

## Comment
| property | type | description |
|----|---|---|
| id | integer | unique comment integer identifier. |
| parent_id | integer | id of parent comment. |
| title | string | title of comment. |
| body | string | body of comment. |
| created_on | integer | unix timestamp. date/time of comment creation. |
| changed_on | integer | unix timestamp. date/time when comment was modified last time. |
| creator | [User](#user) | comment creator. |
| comments | Array<[Comment](#comment)> | comment replies. |


## Small Protocol
| property | type | description |
|----|---|---|
| id | integer | unique protocol integer identifier. |
| title | string | protocol title. |
| image | [Image](#image) | protocol image. |
| version_id | integer | 0...n. Version number of this protocol. |
| doi | string OR null | DOI of this protocol. |
| uri | string | unique protocol text identifier. |
| published_on | integer OR null | unix timestamp. date/time when this protocol was published. |

## Protocol
| property | type | description |
|----|---|---|
| id | integer | unique protocol integer identifier. |
| title | string | protocol title. |
| image | [Image](#image) | protocol image. |
| doi | string | DOI of this protocol. |
| uri | string | unique protocol text identifier. |
| published_on | integer OR null | unix timestamp. date/time when this protocol was published. |
| created_on | integer | unix timestamp. date/time of protocol creation. |
| creator | [User](#user) | protocol creator |
| public | integer | 1 or 0. 1 means that this protocol is public and 0 otherwise. |
| versions | Array<[SmallProtocol](#small-protocol)> | list of versions |
| version_id | integer | 0...n. Version number of this protocol. |
| link | string | Link to this protocol. |
| number_of_steps | integer OR null | number of steps of this protocol. |
| authors | Array<[User](#user)> | list of user or empty array |
| steps | Array<[Step](#step)> | All of the steps in this protocol. |
| materials | Array<[Reagent](#reagent)> | Reagents required for this protocol. |

## Step
| property | type | description |
|----|---|---|
| id | integer | unique step integer identifier. |
| guid | string | unique step guid. |
| previous_id | integer | id of previous step. |
| previous_guid | string OR null | guid of previous step. |
| modified_on | integer | unix timestamp. date/time when step was modified. |
| components | [StepComponent](#step-component) | list of step components. |

## Step Component
| property | type | description |
|----|---|---|
| id | integer | unique step integer identifier. |
| guid | string | unique step guid. |
| order_id | integer | sequence number of component in the list starting from 0. |
| type_id | integer | type of of component, one of step component types. |
| title  | string | name of component. |
| source | Array<[StepComponentType](#step-component-type)> | variative object of component, can be determine by type_id |

## Step Component Type
There are LOTS of Step Component Types: [Read More Here](docs/StepComponentTypes.md)

## Case
| property | type | description |
|----|---|---|
| title | string | title of a case. |
| label | string OR null | label of a case. |
| step_id | integer OR null | linked step id. |
| step_guid | string OR null | linked step guid. |


# Object Validation
To validate an object after constructing it you simply need to import the ```ProtocolsIOValidator``` object and the associated object schema. Once you have done that you can get a validation object by running the ```validate()``` function of the validator.

Following is an example of constructing and validating a Protocols.io User object.
```javascript
import { ProtocolsIOValidator, User } from 'protocolsio-schemas'
let u = {
    "user": {
      "name": "Vladimir Frolov",
      "affiliation": null,
      "username": "vladimir-frolov10",
      "link": null,
      "image": {
        "source": "https://s3.amazonaws.com/pr-journal/djqbjf6.jpg",
        "placeholder": "https://s3.amazonaws.com/pr-journal/djqbjf6.jpg"
      }
    }
}

console.log(ProtocolsIOValidator.validate(u, User))
```

The ProtocolsIOValidator is an instance of the Validator class from the json schema package. To learn more about what validate returns please visit the [jsonschema documentation](https://www.npmjs.com/package/jsonschema)

# Development

## Project Structure
All of the source code is written in ES6 javascript. You will find all ES6 source code under ```/src```. Within that folder you will find a ```/test``` and ```/schemas``` folder. Schemas contains a JSON-SCHEMA spec for each object. Tests contains a validation script for each object that runs the validate function on several several test objects.

## Building Project
After making changes to any of the code in the ```/src/``` folder simply run the following command in the root folder of the project.
```sh
npm run build
```

## Running Tests
In the root folder of the project run the following command to run tests.
```sh
npm run test
```
