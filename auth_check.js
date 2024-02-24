var log = document.getElementById("login");
var passwd = document.getElementById("passwd");
var buf = null;

var users = new Map();
users.set("admin","nimda");
users.set("root","root");

function get_log() {
  if (passwd.value = users.get(log.value)) {
    alert("Успешный вход!");
  }
  else {
    alert("Не очень успешный вход..");
  }
  log.value = null;
  passwd.value = null;
}
