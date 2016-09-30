// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({
  url: 'https://api.parse.com/1/classes/songs',
  model: SongModel,

  initialize: function() {
    this.fetch();
  },

  parse: function(response) {
    return response.results;
  }
});