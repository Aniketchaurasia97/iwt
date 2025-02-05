const validationxml = require('xsd-schema-validator');

const String = require('fs').readFileSync('data.xml', 'utf8');
const Path = 'schemastructure.xsd';

validationxml.validateXML(String, Path)
  .then(result => {
    if (result.valid) {
      console.log("Your xml document has all valid addresses!");
    } else {
      console.error("your xml document has some non valid data here is the errors thta you can debug:", result.errors);
    }
  })
  .catch(error => {
    console.error("Validation error Catched:", error);
  });