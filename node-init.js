1. from desktop:
    mkdir folder-name
    cd folder-name

2. create file
    app.js

3. REQUIRE
  //if part of standard library (nodejs.org/api)
    const fs = require('fs'); /
  //if file in the app
    const file-name = require('./relative/path/to/file.js')
      //must contain
        module.exports.variable = 'whatever';
      //or
        module.exports = {
          functionName,
          anotherOne,
        }
  // if it is a third-party module, you must first generate package.json
    in terminal:
      npm init
        // fill out questions
      npm install module-name --save
        // installs and updates package.json
      // back to file
      const _ = require('lodash');

4. put node_modules folder in .gitignore
    // create .gitignore in root folder
      #ignore DS_store
      .DS_Store

      #ignore node_modules
      node_modules/ 
