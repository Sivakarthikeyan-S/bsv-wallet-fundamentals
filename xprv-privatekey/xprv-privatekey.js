var hdPrivateKey = bsv.HDPrivateKey.fromString
("xprv9s21ZrQH143K33EyD9gQcb9qDFN5x1feUb1sxCKMteJUuCyFx2UuLcHu5YkwQXgsYDMFAcYdqLookKYFsr1qC4zidgdx7pTv5wjd6cuTDyg")

var privateKeyStandard = hdPrivateKey.deriveChild("m/44'/0'/0'")
var privateKey = privateKeyStandard.privateKey;

var privateKeyStandard2 = hdPrivateKey.deriveChild("m/45'/0'/0'")
var privateKey2 = privateKeyStandard2.privateKey;

var privateKeyStandard3 = hdPrivateKey.deriveChild("m/46'/0'/0'");
var privateKey3 = privateKeyStandard3.privateKey;

var p = document.querySelector("#Text");
p.innerHTML = privateKey.toString();

var p = document.querySelector("#Text2");
p.innerHTML = privateKey2.toString();

var p = document.querySelector("#Text3");
p.innerHTML = privateKey3.toString();