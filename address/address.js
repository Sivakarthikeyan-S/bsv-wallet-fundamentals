var privKey = bsv.PrivateKey.fromRandom();
var pubKey = bsv.PublicKey.fromPrivateKey(privKey);
var address = bsv.Address.fromPublicKey(pubKey);
var address1 = bsv.Address.fromPrivateKey(privKey);

var p = document.querySelector("#privKey");
p.innerHTML = privKey.toString();

var x = document.querySelector("#pubKey");
x.innerHTML = pubKey.toString();

var y = document.querySelector("#address");
y.innerHTML = address.toString();

var z = document.querySelector("#address1");
z.innerHTML = address1.toString();