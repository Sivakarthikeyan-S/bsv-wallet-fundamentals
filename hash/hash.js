var hash = CryptoJS.SHA256("bitcoin");

var p = document.querySelector("#privText");
p.innerHTML = hash.toString();