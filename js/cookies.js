var cookies = new Object({
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
  displayCookie: function displayCookie () {
    var data = JSON.parse(document.cookie.split('=')[1]);
    document.getElementById('ans1').innerHTML = data.name;
    document.getElementById('ans2').innerHTML = data.age;
    document.getElementById('ans3').innerHTML = data.word;
  },
  deleteCookie: function deleteCookie () {
    document.cookie = "name=;expires=Thu, 01 Jan 1970 00:00:00 UTC";
  }
});
