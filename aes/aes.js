var privateKey = bsv.PrivateKey.fromRandom();
var password = "userPassword";

var ciphertext = CryptoJS.AES.encrypt(privateKey.toString(), password).toString();

var bytes = CryptoJS.AES.decrypt(ciphertext, password);
var originalText = bytes.toString(CryptoJS.enc.Utf8);

var priv = document.querySelector('#privText');
priv.innerHTML = privateKey.toString();

var encrypt = document.querySelector('#encrypted');
encrypt.innerHTML = ciphertext.toString();

var decrypt = document.querySelector('#decrypted');
decrypt.innerHTML = originalText.toString();