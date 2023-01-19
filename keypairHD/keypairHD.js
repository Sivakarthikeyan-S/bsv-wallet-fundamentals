var hdPrivateKey = bsv.HDPrivateKey.fromRandom();

var hdPublicKey = bsv.HDPublicKey.fromHDPrivateKey(hdPrivateKey);

var p = document.querySelector("#Text");
p.innerHTML = hdPrivateKey.toString();

var q = document.querySelector("#Text1");
q.innerHTML = hdPublicKey.toString();