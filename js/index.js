$( document ).ready( function () {
  var c = Object.create(cookies);
  // event when a user clicks on the btn "Save Cookies"
  $(document).on("click", ".save", function() {
    // set variables
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var word = document.getElementById('word').value;
    // set cookies
    c.setCookie(name,age,word);
    // display cookies
    c.displayCookie();
    // hide the btn "Show Old Cookies"
    $(".display").hide();
  });
  // event when a user clicks on the btn "Show Old Cookies"
  $(document).on("click", ".display", function() {
    // output current cookie
    c.displayCookie();
    // hide the btn "Show Old Cookies"
    $(this).hide();
  });

  // event when a user clicks on the btn "Show Old Cookies"
  $(document).on("click", ".delete", function() {
    // delete current cookie
    c.deleteCookie();
    // output current cookie (should be undefined now)
    c.displayCookie();
  });

});
