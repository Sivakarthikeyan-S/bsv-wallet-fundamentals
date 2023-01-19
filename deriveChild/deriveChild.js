var hdPrivateKey = bsv.HDPrivateKey.fromRandom();
    
var childPrivateKey = hdPrivateKey.deriveChild("m/44/0/0");

var hardenedPrivateKey = hdPrivateKey.deriveChild("m/44'/0'/0'");

var p = document.querySelector("#Text");
p.innerHTML = childPrivateKey.toString();

var q = document.querySelector("#Text1");
q.innerHTML = hardenedPrivateKey.toString();