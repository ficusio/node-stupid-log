var log = makeLogWithName(undefined);
log.for = makeLogWithName;


function makeLogWithName(name) {
  var log = makeLogFunc(name);
      log.TODO = makeLogFunc(name, 'TODO');
      log.info = makeLogFunc(name, 'INFO');
      log.warn = makeLogFunc(name, 'WARN');
      log.error = makeLogFunc(name, 'ERROR');
  return log;
}


function makeLogFunc(name, type) {
  if (name == undefined && type == undefined) {
    return function() {
      console.error.apply(console, arguments);
    };
  }
  var header = (name == undefined)
    ? '{' + type + '}'
    : (type == undefined)
      ? '[' + name + ']'
      : '[' + name + '] {' + type + '}';
  return function() {
    var args = arguments.length == 1 ? [arguments[0]] : Array.apply(null, arguments);
    args.unshift(header);
    console.error.apply(console, args);
  };
}


module.exports = log;
