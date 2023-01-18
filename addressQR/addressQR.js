var privateKey = bsv.PrivateKey.fromRandom();
var address = bsv.Address.fromPrivateKey(privateKey).toString();

var p = document.querySelector("#privText");
p.innerHTML = privateKey.toString();

var y = document.querySelector("#addressText");
y.innerHTML = address;

var addressCode = 'bitcoinsv:' + address;

new QRCode(document.getElementById("qrcode"), addressCode);