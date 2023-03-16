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