var privKey = bsv.PrivateKey.fromRandom();
var pubKey = bsv.PublicKey.fromPrivateKey(privKey);
var address = bsv.Address.fromPublicKey(pubKey);

var p = document.querySelector("#privKey");
p.innerHTML = privKey.toString();

var y = document.querySelector("#pubKey");
y.innerHTML = pubKey.toString();

var z = document.querySelector("#address");
z.innerHTML = address.toString();