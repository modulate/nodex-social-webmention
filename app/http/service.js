/**
 * Webmention service.
 *
 * This component provides an HTTP service that implements [Webmention](https://www.w3.org/TR/webmention/).
 * Webmention is a way to receive a notification when one web resource links to
 * another resource.
 *
 * In the hexagonal architecture promoted by Bixby.js, this service is an
 * adapter to a linkback port.  The adapter implements Webmention, which is
 * suitable for use by user agents and remote services to notify the application
 * of links back to application resources.
 *
 * References:
 *   - [Webmention](https://en.wikipedia.org/wiki/Webmention)
 */
exports = module.exports = function(receiveHandler) {
  var express = require('express');
  var router = new express.Router();
  
  router.post('/', receiveHandler);
  
  return router;
};

exports['@implements'] = [
  'http://i.bixbyjs.org/http/Service',
  'http://schemas.modulate.io/js/http/WebmentionService'
];
exports['@type'] = 'webmention';
exports['@require'] = [
  './handlers/receive'
];
