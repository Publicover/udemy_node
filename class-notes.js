NODE

node allows access to variable called module
  console.log(module);

an anonymous function can be changed to arrow notation
  arrow notation does not bind this keyword or argument array
  module.exports.addNote = () => {};

must start loading third party modules in the terminal with
  npm init
answer questions
find name of module then user in terminal
  npm install moduleName --save
  (save flag updates package.json automatically)
  (using moduleName@1.1.1 allows you to specify version number)
order is important: node is first searching core modules then goes to modules
  folder

you can delete node-modules folder--since everything is defined in the
  package.json, the information persists even though the files do not
  to get folder back, just run in terminal without arguments or flags
    npm install
  this restores the node-modules folder
be sure to put folder in .gitignore before pushing to github

MODULES
'fs' file system
'lodash' allows methods that manipulat objects, arrays, numbers, strings, etc.
'yargs' validates and allows formatting of input

OBJECTS
process is global environment--the node version of 'browser'
  process.argv (arguments vector, array of arguments)
  console.log(process.argv)
    [ '/usr/local/Cellar/node/9.5.0/bin/node', //executable for node that was used
      '/Users/jimpublicover/Desktop/udemy/node/notes-node/app.js', //app file started
      'list' ] //CLI argruments

METHODS

from lodash:
  _.isString('string') //true
  _.uniq([1, 2, 2, 2, 3, 4]) //[1, 2, 3, 4]

when using module.exports = {};, you can omit colon and second string if they
  are exactly the same
