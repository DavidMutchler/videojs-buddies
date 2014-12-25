/*! videojs-buddies - v0.0.0 - 2014-12-25
 * Copyright (c) 2014 David Mutchler
 * Licensed under the Apache-2.0 license. */
(function(window, videojs) {
  'use strict';

  var defaults = {
        option: true
      },
      buddies;

  /**
   * Initialize the plugin.
   * @param options (optional) {object} configuration for the plugin
   */
  buddies = function(options) {
    var settings = videojs.util.mergeOptions(defaults, options),
        player = this;

    // TODO: write some amazing plugin code
  };

  // register the plugin
  videojs.plugin('buddies', buddies);
})(window, window.videojs);
