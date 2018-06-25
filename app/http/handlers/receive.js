/**
 * Webmention receive handler.
 *
 * This component provides an HTTP handler that receives Webmentions.
 *
 * In the hexagonal architecture promoted by Bixby.js, this handler drives a
 * linkback port.  The actual adapter that will be utilized is injected by the
 * IoC container, and is expected to be implemented by the application.
 */
exports = module.exports = function(linkbacks, parse, authenticate) {
  
  function handle(req, res, next) {
    linkbacks.link(req.body.source, req.body.target, function(err) {
      // TODO: handle errors
      
      
      // TODO: No body on 202 accepted.  Set location header on 201
      res.status(202).send('http://alice.host/webmentions/222')
    });
  }
  
  // curl --data "source=http://bob.host/post-by-bob&target=http://alice.host/post-by-alice" http://127.0.0.1:8080/
  
  return [
    parse('application/x-www-form-urlencoded'),
    authenticate([ 'anonymous' ]),
    handle
  ];
}

exports['@require'] = [
  'http://schemas.modulate.io/js/social/ILinkbackService',
  'http://i.bixbyjs.org/http/middleware/parse',
  'http://i.bixbyjs.org/http/middleware/authenticate',
];
