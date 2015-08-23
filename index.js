'use strict';

var dimensionsRegExp = /(((\d+)?x?(\d+)?))?(@(\d+)x?)?$/i;

module.exports = function (filename) {
  if (arguments.length < 1) {
    throw new Error('filename should be specified');
  }
  if ('string' !== typeof filename) {
    throw new Error('filename should be a string');
  }

  var name;

  var match = filename.match(dimensionsRegExp);

  var width = match[3] ? parseInt(match[3], 10) : null;
  var height = match[4] ? parseInt(match[4], 10) : null;
  var scale = match[6] ? parseInt(match[6], 10) : null;

  name = filename.replace(match[0], '');
  name = name.replace(/-$/, '');
  name = name ? name : ( filename === '' ? '' : null );

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
