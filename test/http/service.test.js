/* global describe, it, expect */

var expect = require('chai').expect;
var factory = require('../../app/http/service');


describe('http/service', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.deep.equal([
      'http://i.bixbyjs.org/http/Service',
      'http://schemas.modulate.io/js/http/WebmentionService'
    ]);
    expect(factory['@type']).to.equal('webmention');
    expect(factory['@singleton']).to.be.undefined;
  });
  
});
