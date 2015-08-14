$(document).ready(function() {
  $('.show-comments').on('click', function(){
    var disqus_shortname = 'kitctf';
    // load disqus
    $.ajax({
      type: "GET",
      url: "//" + disqus_shortname + ".disqus.com/embed.js",
      dataType: "script",
      cache: true
    });
    $(this).fadeOut();
  });
});
