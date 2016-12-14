/**
 * Created by andre on 13.11.2016.
 */
var nowTemp = new Date();
var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
$('#start-date').fdatepicker({
  initialDate: now,
  format: 'yyyy-mm-dd',
  leftArrow:'<<',
  rightArrow:'>>',
  onRender: function (date) {
    return date.valueOf() < now.valueOf() ? 'disabled' : '';
  }
});
$('#end-date').fdatepicker({
  initialDate: now,
  format: 'yyyy-mm-dd',
  leftArrow: '<<',
  rightArrow: '>>',
  onRender: function (date) {
    return date.valueOf() < now.valueOf() ? 'disabled' : '';
  }
});
