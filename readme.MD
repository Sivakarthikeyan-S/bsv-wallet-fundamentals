# Private Key:
```
privateKey = bsv.PrivateKey.fromRandom();
```
[ privateKey.toString(); ]

# Public Key:
```
publicKey = bsv.PublicKey.fromRandom(privateKey);
```
[ publicKey.toString(); ]

# Address:
```
address = bsv.Address.fromPublicKey(publicKey);
```
[ address.toString(); ]

# AES Encryption (Advanced Encryption Standard)
```
ciphertext = CryptoJS.AES.encrypt(privateKey.toString(), password).toString();
```
[ Encrypted Key: cypertext.toString() ]
```
bytes  = CryptoJS.AES.decrypt(ciphertext, password);
```
```
originalText = bytes.toString(CryptoJS.enc.Utf8);
```
[ Decrypted Key: originalText.toString() ]

# Bitcoin Address Insights:

![This is an image](https://i.pinimg.com/originals/4a/f0/c9/4af0c988a05e3607a6dfe6a49c2c4b45.png)