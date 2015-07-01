$('a[data-id]').click(function(event) {
  $('*[data-parent="' + $(this).data('id') + '"]').addClass('show');
  $(this).removeAttr('data-id');
  $(this).removeAttr('tabindex');
  if ($($(this)).data('replace') != undefined) {
    $(this).addClass('hide');
  }
});

$('a[data-id]').keypress(function(event) {
  if (event.keyCode == 13) {
    $(this).trigger('click');
  }
});