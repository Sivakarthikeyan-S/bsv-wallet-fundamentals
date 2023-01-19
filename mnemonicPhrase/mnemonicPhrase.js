var bsvMnemonic = window.bsvMnemonic;
var words = bsvMnemonic.fromRandom();

var hdPrivateKey = bsv.HDPrivateKey.fromSeed(words.toSeed())
var privateKey = hdPrivateKey.deriveChild("m/44'/0'/0'").privateKey;
var address = bsv.Address.fromPrivateKey(privateKey).toString();

var p = document.querySelector("#phrase");
p.innerHTML = words.toString();

var p = document.querySelector("#privText");
p.innerHTML = privateKey.toString();

var y = document.querySelector("#addressText");
y.innerHTML = address;

var addressCode = 'bitcoinsv:' + address;

new QRCode(document.getElementById("qrcode"), addressCode);