$('a[href]').click(function(event) {
  ga('send', 'event', 'link', $(this).text());
});