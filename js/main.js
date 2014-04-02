/* jshint browser */
/* global jQuery */
(function ($) {
  'use strict';

  var form = $('#config'),
    targetUrl = $('#url'),
    targetHits = $('#hits'),
    hitInterval = $('#interval'),
    hitsCounter = $('#currentHits'),
    queue = [],
    queueInterval;

  function makeCall() {
    var url = queue.unshift();
    if (!url) {
      return
    }

    var img = new Image();
    img.src = url + '?tt_tt_tt_tt=' + new Date().getTime() + queue.length;
    $('body').append(img);


    setTimeout(makeCall, interval * 1000);
  }

  form.on('submit', function (ev) {
    ev.preventDefault();

    var url = targetUrl.val(),
      hitsToDo = parseInt(targetHits.val(), 10),
      interval = parseInt(hitInterval.val(), 10);

    queueInterval = interval;

    while (hitsToDo--) {
      var src = url;
      queue.push(src);
    }

    makeCall();
  });
})(jQuery);
