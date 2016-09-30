// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,


  initialize: function(params) {
    this.on('add', function(song) {
      if ( this.length === 1) {
        this.playFirst();
      }
    }, this);

    
    this.on('ended', function(song) {
      this.dequeue(song);
    }, this);

    
    this.on('dequeue', function(song) {
      this.dequeue(song);
    }, this);
  },

  enqueue: function(song) {
    this.add(song);

  },

  dequeue: function() {
    var song = this.at(0);
    this.remove(song);
    if (this.models.length > 0) {
      this.playFirst();
    } 
  },



  playFirst: function() {
    var firstSong = this.at(0);
    firstSong.play();
  },

});