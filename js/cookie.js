$( document ).ready(function() {

  function setCookie (name, age) {
    var count =
    var today = new Date();
    var day1 = new Date(today.getTime() + 1 * 24 * 3600 * 1000);
    document.cookie = "name="+name + ";" + "age="+age + "; expires=" + day1.toGMTString();
  }

  $(document).on("click", ".btn", function() {
    // set cookies
    // update cookie table
  });

});
