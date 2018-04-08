'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ProtocolsIOValidator = undefined;

var _StepComponentType = require('../schemas/StepComponentType');

var _Comment = require('../schemas/Comment');

var _User = require('../schemas/User');

var _Image = require('../schemas/Image');

var _Reagent = require('../schemas/Reagent');

var _Protocol = require('../schemas/Protocol');

var _SmallProtocol = require('../schemas/SmallProtocol');

var _Step = require('../schemas/Step');

var _StepComponent = require('../schemas/StepComponent');

var _Case = require('../schemas/Case');

/*
 Create json schema validator and add all schema dependencies to the validator.
*/
/**
  Validator that imports all Protocols.io objects and adds them
  to the jsonschema Validator schema list.
*/

/*
 Import all schema dependencies.
*/
var Validator = require('jsonschema').Validator;
var ProtocolsIOValidator = new Validator();
ProtocolsIOValidator.addSchema(_StepComponentType.StepComponentType1);
ProtocolsIOValidator.addSchema(_StepComponentType.StepComponentType3);
ProtocolsIOValidator.addSchema(_StepComponentType.StepComponentType4);
ProtocolsIOValidator.addSchema(_StepComponentType.StepComponentType6);
ProtocolsIOValidator.addSchema(_StepComponentType.StepComponentType7);
ProtocolsIOValidator.addSchema(_StepComponentType.StepComponentType8);
ProtocolsIOValidator.addSchema(_StepComponentType.StepComponentType9);
ProtocolsIOValidator.addSchema(_StepComponentType.StepComponentType13);
ProtocolsIOValidator.addSchema(_StepComponentType.StepComponentType15);
ProtocolsIOValidator.addSchema(_StepComponentType.StepComponentType17);
ProtocolsIOValidator.addSchema(_StepComponentType.StepComponentType18);
ProtocolsIOValidator.addSchema(_StepComponentType.StepComponentType19);
ProtocolsIOValidator.addSchema(_StepComponentType.StepComponentType20);
ProtocolsIOValidator.addSchema(_StepComponentType.StepComponentType21);
ProtocolsIOValidator.addSchema(_StepComponentType.StepComponentType22);
ProtocolsIOValidator.addSchema(_StepComponentType.StepComponentType24);
ProtocolsIOValidator.addSchema(_StepComponentType.StepComponentType25);
ProtocolsIOValidator.addSchema(_StepComponentType.StepComponentType26);
ProtocolsIOValidator.addSchema(_Comment.Comment);
ProtocolsIOValidator.addSchema(_User.User);
ProtocolsIOValidator.addSchema(_Image.Image);
ProtocolsIOValidator.addSchema(_Reagent.Reagent);
ProtocolsIOValidator.addSchema(_Protocol.Protocol);
ProtocolsIOValidator.addSchema(_SmallProtocol.SmallProtocol);
ProtocolsIOValidator.addSchema(_Step.Step);
ProtocolsIOValidator.addSchema(_StepComponent.StepComponent);
ProtocolsIOValidator.addSchema(_Case.Case);

exports.ProtocolsIOValidator = ProtocolsIOValidator;