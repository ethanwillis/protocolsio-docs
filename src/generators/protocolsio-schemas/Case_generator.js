import { Case } from 'protocolsio-schemas';
import { Generator } from './Generator'

class Case_Generator extends Generator {
  constructor() {
    super(Case)
  }
}

let case_generator = new Case_Generator(Case);
export { case_generator }
