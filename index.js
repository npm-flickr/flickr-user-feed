var createClient = require("flickr-client");
var client;

module.exports = setup;

function setup (options) {
  client = createClient(options);
  return favs;
}

function favs (userId, options, callback) {
  if (typeof options == 'function') {
    callback = options;
    options = {};
  }

  options.user_id = userId;

  client('photos.getContactsPublicPhotos', options, function (error, response) {
    if (error) return callback(error);

    callback(undefined, {
      page: Number(response.photos.page),
      pages: Number(response.photos.pages),
      perpage: Number(response.photos.per_page),
      total: Number(response.photos.total),
      photos: response.photos.photo
    });
  });
}
