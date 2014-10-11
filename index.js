'use strict';

var dimensionsRegExp = /^(.*?)(-((\d+)?x?(\d+)?))?(@(\d+)x?)?$/i;

module.exports = function (filename) {
  if (arguments.length < 1) {
    throw new Error('filename should be specified');
  }
  if ('string' !== typeof filename) {
    throw new Error('filename should be a string');
  }

  var match = filename.match(dimensionsRegExp);

  var name = match[1];
  var width = match[4] ? parseInt(match[4], 10) : null;
  var height = match[5] ? parseInt(match[5], 10) : null;
  var scale = match[7] ? parseInt(match[7], 10) : null;

  if (match) {
    return {
      name: name,
      width: width,
      height: height,
      scale: scale
    };
  }
  return null;
};
