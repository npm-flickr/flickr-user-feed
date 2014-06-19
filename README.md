## flickr-user-feed

Returns list of the most recent photos from given user's contacts

## Install

```bash
$ npm install flickr-user-feed
```

## Usage

```js
var feed = require('flickr-user-feed')({
  key: 'api-key'
})

feed('user-id', function (error, result) {
  result.page
  // => 1

  result.pages
  // => 22

  result.total
  // => 2151

  result.perPage
  // => 100

  result.photos.length
  // => 98

  result.photos[0]
  // => { "id": "14444570971", "secret": "4974012683", "server": "3838", "farm": 4, "owner": "32860537@N06", "username": "foo bar", "title": "qux corge", "ispublic": 1, "isfriend": 0, "isfamily": 0 }
});
```

Options:

* count
* page

```js
feed('user-id', { page: 10 }, function (error, result) {
  result.page
  // => 10
36
});
```

[flickr-client](http://github.com/npm-flickr/flickr-client) can be passed to avoid repeating auth options:

```js
var client = require('flickr-client')({
  key: 'api-key'
});

var feed = require('flickr-user-feed')(client)
```
