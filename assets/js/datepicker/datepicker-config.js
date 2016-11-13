/**
 * Created by andre on 13.11.2016.
 */
var nowTemp = new Date();
var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
var leaveStart = $('#start-date').fdatepicker({
  format: 'mm-dd-yyyy',
  leftArrow:'<<',
  rightArrow:'>>',
  onRender: function (date) {
    return date.valueOf() < now.valueOf() ? 'disabled' : '';
  }
}).on('changeDate', function (ev) {
  if (ev.date.valueOf() > leaveEnd.date.valueOf()) {
    var newDate = new Date(ev.date);
    newDate.setDate(newDate.getDate() + 1);
    leaveEnd.update(newDate);
  }
  leaveStart.hide();
  $('#end-date')[0].focus();
}).data('datepicker');
var leaveEnd = $('#end-date').fdatepicker({
  format: 'mm-dd-yyyy',
  leftArrow:'<<',
  rightArrow:'>>',
  onRender: function (date) {
    return date.valueOf() <= leaveStart.date.valueOf() ? 'disabled' : '';
  }
}).on('changeDate', function (ev) {
  leaveEnd.hide();
}).data('datepicker');
