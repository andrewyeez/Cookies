$( document ).ready( function () {
  var c = Object.create(cookies);
  $(document).on("click", ".save", function() {
    // set cookies
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var word = document.getElementById('word').value;
    c.setCookie(name,age,word);
    // display cookies
    c.displayCookie();
    // hide the "show old cookie button"
    $(".display").hide();
  });

  $(document).on("click", ".display", function() {
    // output current cookie
    c.displayCookie();
    // hide the button
    $(this).hide();
  });

});
