//change that integer
var i = 16;

var hdPrivateKey = bsv.HDPrivateKey.fromString
("xprv9s21ZrQH143K33EyD9gQcb9qDFN5x1feUb1sxCKMteJUuCyFx2UuLcHu5YkwQXgsYDMFAcYdqLookKYFsr1qC4zidgdx7pTv5wjd6cuTDyg")
var privateKeyStandard = hdPrivateKey.deriveChild("m/" + i + "'/0'/0'")
var hdPublicKey = bsv.HDPublicKey.fromHDPrivateKey(privateKeyStandard)
var publicKey = hdPublicKey.publicKey;
var address = bsv.Address.fromPublicKey(publicKey)

var p = document.querySelector("#Text");
p.innerHTML = publicKey.toString();

var p = document.querySelector("#Text2");
p.innerHTML = address.toString();

new QRCode(document.getElementById("qrcode"), "bitcoinsv:" + address.toString());