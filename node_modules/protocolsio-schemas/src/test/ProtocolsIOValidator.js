/**
  Validator that imports all Protocols.io objects and adds them
  to the jsonschema Validator schema list.
*/


/*
 Import all schema dependencies.
*/
import {
	 StepComponentType1, StepComponentType3, StepComponentType4,
	 StepComponentType6, StepComponentType7, StepComponentType8,
	 StepComponentType9, StepComponentType13, StepComponentType15,
	 StepComponentType17, StepComponentType18, StepComponentType19,
	 StepComponentType20, StepComponentType21, StepComponentType22,
	 StepComponentType24, StepComponentType25, StepComponentType26
 } from '../schemas/StepComponentType';
import { Comment } from '../schemas/Comment';
import { User } from '../schemas/User';
import { Image } from '../schemas/Image';
import { Reagent } from '../schemas/Reagent';
import { Protocol } from '../schemas/Protocol';
import { SmallProtocol } from '../schemas/SmallProtocol';
import { Step } from '../schemas/Step';
import { StepComponent } from '../schemas/StepComponent';
import { Case } from '../schemas/Case';

/*
 Create json schema validator and add all schema dependencies to the validator.
*/
let Validator = require('jsonschema').Validator;
let ProtocolsIOValidator = new Validator();
ProtocolsIOValidator.addSchema(StepComponentType1);
ProtocolsIOValidator.addSchema(StepComponentType3);
ProtocolsIOValidator.addSchema(StepComponentType4);
ProtocolsIOValidator.addSchema(StepComponentType6);
ProtocolsIOValidator.addSchema(StepComponentType7);
ProtocolsIOValidator.addSchema(StepComponentType8);
ProtocolsIOValidator.addSchema(StepComponentType9);
ProtocolsIOValidator.addSchema(StepComponentType13);
ProtocolsIOValidator.addSchema(StepComponentType15);
ProtocolsIOValidator.addSchema(StepComponentType17);
ProtocolsIOValidator.addSchema(StepComponentType18);
ProtocolsIOValidator.addSchema(StepComponentType19);
ProtocolsIOValidator.addSchema(StepComponentType20);
ProtocolsIOValidator.addSchema(StepComponentType21);
ProtocolsIOValidator.addSchema(StepComponentType22);
ProtocolsIOValidator.addSchema(StepComponentType24);
ProtocolsIOValidator.addSchema(StepComponentType25);
ProtocolsIOValidator.addSchema(StepComponentType26);
ProtocolsIOValidator.addSchema(Comment);
ProtocolsIOValidator.addSchema(User);
ProtocolsIOValidator.addSchema(Image);
ProtocolsIOValidator.addSchema(Reagent);
ProtocolsIOValidator.addSchema(Protocol);
ProtocolsIOValidator.addSchema(SmallProtocol);
ProtocolsIOValidator.addSchema(Step);
ProtocolsIOValidator.addSchema(StepComponent);
ProtocolsIOValidator.addSchema(Case);

export { ProtocolsIOValidator }
