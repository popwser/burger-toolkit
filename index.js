var fs = require('fs');
var colors = require('colors');
var sa = require('strip-ansi')

exports.c = function(num) {
  if(num > -1 && num < 10) {
    switch(num) {
      case 0: return "black"; break;
      case 1: return "red"; break;
      case 2: return "green"; break;
      case 3: return "yellow"; break;
      case 4: return "blue"; break;
      case 5: return "magenta"; break;
      case 6: return "cyan"; break;
      case 7: return "white"; break;
      case 8: return "gray"; break;
      case 9: return "grey"; break;
    }
  }else {
    return "white"
  }
}

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
      case 'gray': return string.bgWhite; break;
      case 'grey': return string.bgWhite; break;
    }
  }else {
    return string;
  }
}

exports.strip = function(message) {
  return sa(message);
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
  fs.appendFile(file, exports.strip(message)+"\n", function(err) {});
  console.log(message);
}

exports.logArray = function(file, array) {
  for(var i=0;i<array.length;i++) {
    exports.log(file, array[i]);
  }
}

exports.logArray = function(file, array, color, background) {
  for(var i=0;i<array.length;i++) {
    exports.log(file, exports.colorString(exports.colorStringBG(array[i], background), color));
  }
}
