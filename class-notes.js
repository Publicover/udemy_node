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

SPECIAL NODE VARIABLES
  module //program info: name, exports, etc
  arguments //gives array of arguments--if in arrow function with standard
            // notation, gives arguments of container


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
var varName = (arg1, arg2) => {block}
  ARROW NOTATION lets you call anonymous function without binding;
  if there is only one line in the block, it can change to
  var varName = (arg1) => 1 === 'one';
`string interpolation with slanted quotes: ${interpolated object}`
from fs:
  fs.appendFile('filename.txt', 'what you want to append')
  fs.writeFileSync('fileName', obj) //creates file and writes to it
  fs.readFileSync('fileName') //reads file
from lodash:
  _.isString('string') //true
  _.uniq([1, 2, 2, 2, 3, 4]) //[1, 2, 3, 4]
JSON.stringify('object') //turns JSON into string
JSON.parse('object') //turns string into JSON
typeof --takes no camelcase
try {} catch (e) {}; lets you try something in the first code block and run the
  second block if there is an error resulting from the first
setTimeout(() => {function}, 2000) //args: function, time in miliseconds until
                                   //call
pretty print:
  use JSON.stringify(object, filter-out-properties, spaces-per-identation)

when using module.exports = {};, you can omit colon and second string if they
  are exactly the same

DEBUGGING
to get debug mode, start with
  node inspect fileName.js
in debug mode:
  list(n) gives you n lines above and below break point
  n (short for 'next') advances to the next part of code in wrapper function
  c (short for 'continue') continues to the end of the program
  repl (short for 'read evaluate print loop') like a js console
    use variable name to view it
    setting a value (such as person.age) in repl sets value in program
  debugger; in code makes the inspector stop at the line it is on in program
    typing c in debug mode takes you to line with debugger on it
  this all works with nodemon, too
Google Dev Tools
  in terminal:
    node --inspect-brk playground/debugging.js
    (can also call nodemon)
  in chrome:
    chrome://inspect
  click 'Open Dedicated DevTools for Node'

ARROW FUNCTIONS
no need to use curly braces when statment is one line
  var square = (x) => x * x;
no need to use parens if there is only one argument
  var square = x => x * x;
arrow functions do not bind 'this' keyword
  if you need 'this' keyword, use following syntax:
    var sayHiAlt () {console.log(`${this.whatever}`)}
arguments keyword array returns argument array of global object
fax to handwritten request:
  name dob
  where records sent dr name fax number
  what records you want to send (all of them)
  signature
  contact phone number
  fax to 919-684-1777 write urgent at the top


ASYNC
need to use callbacks
callback function: function that gets passed as argument of another function and
  is executed after an event
