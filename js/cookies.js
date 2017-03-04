/**
 * Cookies is a class that will hold all the function needed for the Cookie app.
 * @type {Object}
 */
var cookies = new Object({
  // function to set the cookie with a 1 day expiration
  setCookie: function setCookie (name, age, word) {
    var today = new Date();
    var oneDayExpiry = new Date(today.getTime() + 1 * 24 * 3600 * 1000);
    var cExpire = "expires=" + oneDayExpiry.toGMTString();
    var cookie = JSON.stringify({
      name: name,
      age: age,
      word: word
    });
    document.cookie = "demoCookie=" + cookie + ";" + cExpire;
  },
  // function to output the cookie data to our table on _table.html
  displayCookie: function displayCookie () {
    var cookie = document.cookie.split('=')[1];
    console.log(cookie);
    if (cookie == null){
      //alert('No more cookies :(');
    } else {
      var data = JSON.parse(cookie);
      document.getElementById('ans1').innerHTML = data.name;
      document.getElementById('ans2').innerHTML = data.age;
      document.getElementById('ans3').innerHTML = data.word;
    }
  },
  // function to delete the cookie
  deleteCookie: function deleteCookie () {
    document.cookie = "demoCookie=;expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.getElementById('ans1').innerHTML = "";
    document.getElementById('ans2').innerHTML = "";
    document.getElementById('ans3').innerHTML = "";
  }
});
