$.get("./aad.json", function(data, status) {
  for (var myuser in data) {
    Cookies.set("aadUser", data[myuser].user_id);
  }
});
