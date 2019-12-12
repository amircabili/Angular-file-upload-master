const IncomingForm = require('formidable').IncomingForm;
const fs = require('fs');

module.exports = function upload(req, res) {
  const form = new IncomingForm();

  // form.on('file', (field, file) => {
  //   file.path = '../client/src/assets/uploads/' + file.name
  //   console.log('Uploaded file', field, file)
  // });

  form.on('file', (field, file) => {
    // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path
    console.log('file', file.name);
    console.log('file', file.path);
    //console.log(readStream);
    
    const readStream = fs.createReadStream(file.path);

  });
  form.on('end', () => {
    res.json();
  });
  form.parse(req);
};
