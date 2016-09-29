// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,


  initialize: function(params) {
    this.on('add', function(song) {
      if ( this.models.length === 1) {
        this.playFirst();
      }
    }, this);

    
    this.on('ended', function(song) {
      this.dequeue();
    }, this);

    
    this.on('dequeue', function() {
      this.dequeue();
      //debugger;
    }, this);
  },

  enqueue: function(song) {
    this.add(song);
  },

  dequeue: function(song) {
    this.remove(this.at(0));
    if (this.models.length > 0) {
      this.playFirst();
    } 
  },



  playFirst: function() {
    var firstSong = this.at(0);
    firstSong.play();
  },

  /*
  add: function() {
    Backbone.Collection.apply(this, arguments);
  }
  */

});