var nowTemp = new Date();
var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

$(function(){
  $('#timeRegistryEntryDate').fdatepicker({
    initialDate: now,
    format: 'mm-dd-yyyy',
    disableDblClickSelection: true,
    leftArrow:'<<',
    rightArrow:'>>'
  });
});

$(document).ready(function(){
  $('#chargeable').click(function(){
    $('#chargeableTime-container').toggle(this.checked);
  });
});
