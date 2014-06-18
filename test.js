require('with-env')();

var test = require("prova");
var feed = require("./")({
  key: process.env.FLICKR_API_KEY
});

test('recent photos from contacts', function (t) {
  feed('98269877@N00', function (error, result) {
    t.plan(7);
    t.error(error);
    t.equal(result.page, 1);
    t.ok(result.pages > 5);
    t.ok(result.total > 500);
    t.equal(result.perpage, 10);
    t.ok(result.photos[0].id);
    t.ok(result.photos[0].owner);
  });
});
