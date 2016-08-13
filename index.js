var fs = require('fs');
var colors = require('colors');

exports.colorString = function(string, color) {
  if(color !== null) {
    switch(color) {
      case 'black': return string.black; break;
      case 'red': return string.red; break;
      case 'green': return string.green; break;
      case 'yellow': return string.yellow; break;
      case 'blue': return string.blue; break;
      case 'magenta': return string.magenta; break;
      case 'cyan': return string.cyan; break;
      case 'white': return string.white; break;
      case 'gray': return string.gray; break;
      case 'grey': return string.grey; break;
    }
  }else {
    return string;
  }
}

exports.colorStringBG = function(string, color) {
  if(color !== null) {
    switch(color) {
      case 'black': return string.bgBlack; break;
      case 'red': return string.bgRed; break;
      case 'green': return string.bgGreen; break;
      case 'yellow': return string.bgYellow; break;
      case 'blue': return string.bgBlue; break;
      case 'magenta': return string.bgMagenta; break;
      case 'cyan': return string.bgCyan; break;
      case 'white': return string.bgWhite; break;
    }
  }else {
    return string;
  }
}

exports.styleString = function(string, style) {
  if(style !== null) {
    switch(style) {
      case 'reset': return string.reset; break;
      case 'bold': return string.bold; break;
      case 'dim': return string.dim; break;
      case 'italic': return string.italic; break;
      case 'underline': return string.underline; break;
      case 'inverse': return string.inverse; break;
      case 'hidden': return string.hidden; break;
      case 'strikethrough': return string.strikethrough; break;
    }
  }else {
    return string;
  }
}

exports.log = function(file, message) {
  fs.appendFile(file, message + "\n", function(err) {});
  console.log(message);
}

exports.printArray = function(array) {
  for(var i=0;i<array.length;i++) {
    console.log(array[i]);
  }
}

exports.printArray = function(array, color, background) {
  for(var i=0;i<array.length;i++) {
    console.log(exports.colorString(exports.colorStringBG(exports.styleString(array[i], null), background), color));
  }
}

exports.logArray = function(file, array) {
  for(var i=0;i<array.length;i++) {
    exports.log(file, array[i]);
  }
}

exports.logArray = function(file, array, color, background) {
  for(var i=0;i<array.length;i++) {
    exports.log(file, exports.colorString(exports.colorStringBG(exports.styleString(array[i], null), background), color));
  }
}