/* global jQuery */
(function ($) {
  'use strict';

  var form = $('#config'),
    targetUrl = $('#url'),
    targetHits = $('#hits'),
    hitInterval = $('#interval'),
    hitsCounter = $('#currentHits');


  var hits = 0,
    timer;

  form.on('submit', function (ev) {
    ev.preventDefault();

    var url = targetUrl.val(),
      hitsToDo = parseInt(targetHits.val(), 10),
      interval = parseInt(hitInterval.val(), 10);

    timer = setInterval(function () {
      if (hits >= hitsToDo) {
        return clearInterval(timer);
      }

      var img = new Image();
      img.src = url + '?tt_tt_tt_tt=' + new Date().getTime() + hits;
      $('#imgs').append(img);

      hitsCounter.text(++hits);
    }, interval * 1000);
  });
})(jQuery);
