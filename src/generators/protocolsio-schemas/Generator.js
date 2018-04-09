import { Case } from 'protocolsio-schemas';

class Generator {
  constructor(schema) {
    this.schema = schema;
  }

  getMarkdownTable() {
    let markdown_table = "";

    let tuples = [];
    let properties = this.schema.properties;
    let property_keys = Object.keys(properties);
    property_keys.map(function(property_key) {
      let tuple = "|" +
      tuples.push({
        "property": property_key,
        "type": properties[property_key].type ? properties[property_key].type : "none",
        "description": properties[property_key].description
      });
    });
    markdown_table = this.getMarkdownHeader() + this.getTuplesMarkdown(tuples);
    return markdown_table;
  }

  getMarkdownHeader() {
    return '| property | type | description |\n' +
           '|----------|------|-------------|\n';
  }

  getTuplesMarkdown(tuples) {
    let tuple_markdown = "";
    tuples.map(function(tuple) {
      tuple_markdown += '|' + tuple.property + '|' + tuple.type + '|' + tuple.description + '|\n'
    });
    return tuple_markdown;
  }
}

let mygen = new Generator(Case);
console.log(mygen.getMarkdownTable())
export { Generator }
