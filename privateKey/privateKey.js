var privateKey = bsv.PrivateKey.fromRandom();

var p = document.querySelector("#library");
p.innerHTML = "BSV.js library Initialized! <br /><br /> Your Random Private Key: <br /><br />"+privateKey.toString();