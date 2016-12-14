/**
 * Created by Andreas on 28.11.2016.
 */
$(document).ready(function () {
  $('#navision').click(function () {
    $('.navision').toggle(this.checked);
  });

  $('#stable-net-dev').click(function () {
    $('.stable-net-dev').toggle(this.checked);
  });

  $('#management').click(function () {
    $('.management').toggle(this.checked);
  });

  $('#not-assigned').click(function () {
    $('.not-assigned').toggle(this.checked);
  });

  $('#matrix-has-entries').click(function () {
    $('.matrix-has-entries').toggle(this.checked);
  });

  $('#matrix-no-entries').click(function () {
    $('.matrix-no-entries').toggle(this.checked);
  });

  $('#illness').click(function () {
    $('.illness').toggle(this.checked);
  });
});
