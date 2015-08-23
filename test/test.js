/*global describe, it */
'use strict';

var expect = require('chai').expect;
var parse = require('../');

describe('parse-image-dimensions', function () {

  it('should raise error', function () {
    expect(function (){
      parse();
    }).to.throw(/filename should be specified/);
  });

  it('should raise error when argument not a string', function () {
    expect(function (){
      parse({});
    }).to.throw(/filename should be a string/);
  });

  it('should parse nothing', function () {
    var data = parse('');
    expect(data).to.have.property('name', '');
    expect(data).to.have.property('width', null);
    expect(data).to.have.property('height', null);
    expect(data).to.have.property('scale', null);
  });

  it('should parse only name', function () {
    var data = parse('image');
    expect(data).to.have.property('name', 'image');
    expect(data).to.have.property('width', null);
    expect(data).to.have.property('height', null);
    expect(data).to.have.property('scale', null);
  });

  it('should parse name with minus', function () {
    var data = parse('image-name');
    expect(data).to.have.property('name', 'image-name');
    expect(data).to.have.property('width', null);
    expect(data).to.have.property('height', null);
    expect(data).to.have.property('scale', null);
  });

  it('should parse width when <width> is specified', function () {
    var data = parse('image-100');
    expect(data).to.have.property('name', 'image');
    expect(data).to.have.property('width', 100);
    expect(data).to.have.property('height', null);
    expect(data).to.have.property('scale', null);
  });

  it('should parse width when <width>x is specified', function () {
    var data = parse('image-200x');
    expect(data).to.have.property('name', 'image');
    expect(data).to.have.property('width', 200);
    expect(data).to.have.property('height', null);
    expect(data).to.have.property('scale', null);
  });

  it('should parse height when x<height> is specified', function () {
    var data = parse('image-x300');
    expect(data).to.have.property('name', 'image');
    expect(data).to.have.property('width', null);
    expect(data).to.have.property('height', 300);
    expect(data).to.have.property('scale', null);
  });

  it('should parse width and height when both are specified', function () {
    var data = parse('image-200x300');
    expect(data).to.have.property('name', 'image');
    expect(data).to.have.property('width', 200);
    expect(data).to.have.property('height', 300);
    expect(data).to.have.property('scale', null);
  });

  it('should parse scale', function () {
    var data = parse('image@2x');
    expect(data).to.have.property('name', 'image');
    expect(data).to.have.property('width', null);
    expect(data).to.have.property('height', null);
    expect(data).to.have.property('scale', 2);
  });

  it('should parse width, height and scale', function () {
    var data = parse('image-500x600@3x');
    expect(data).to.have.property('name', 'image');
    expect(data).to.have.property('width', 500);
    expect(data).to.have.property('height', 600);
    expect(data).to.have.property('scale', 3);
  });

  it('should parse with no name', function () {
    var data = parse('500x600@3x');
    expect(data).to.have.property('name', null);
    expect(data).to.have.property('width', 500);
    expect(data).to.have.property('height', 600);
    expect(data).to.have.property('scale', 3);
  });

  it('should parse with no name and no scale', function () {
    var data = parse('500x600');
    expect(data).to.have.property('name', null);
    expect(data).to.have.property('width', 500);
    expect(data).to.have.property('height', 600);
    expect(data).to.have.property('scale', null);
  });

});
