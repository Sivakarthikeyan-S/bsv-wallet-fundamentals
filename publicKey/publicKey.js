var privKey = bsv.PrivateKey.fromRandom();
var pubKey = bsv.PublicKey.fromPrivateKey(privKey);;

var p = document.querySelector("#privText");
p.innerHTML = privKey.toString();

var y = document.querySelector("#pubText");
y.innerHTML = pubKey.toString();