# Private Key:
```
privateKey = bsv.PrivateKey.fromRandom();
```
- privateKey.toString();

# Public Key:
```
publicKey = bsv.PublicKey.fromRandom(privateKey);
```
- publicKey.toString(); 

# Address:
```
address = bsv.Address.fromPublicKey(publicKey);
```
- address.toString();

# AES Encryption (Advanced Encryption Standard)
```
ciphertext = CryptoJS.AES.encrypt(privateKey.toString(), password).toString();
```
- Encrypted Key: cypertext.toString()
```
bytes  = CryptoJS.AES.decrypt(ciphertext, password);
```
```
originalText = bytes.toString(CryptoJS.enc.Utf8);
```
- Decrypted Key: originalText.toString() 

# Bitcoin Address Insights:

![This is an image](https://i.pinimg.com/originals/4a/f0/c9/4af0c988a05e3607a6dfe6a49c2c4b45.png)

# Create QR Code: 

```
var addressCode = 'bitcoinsv:' + address;

new QRCode(document.getElementById("qrcode"), addressCode);

```

# WhatsOnChain API:

![This is an image](https://i.pinimg.com/originals/11/37/1f/11371f9875d8db91a66bc29aafee88ca.png)


```

    var config = {
        method: 'get',
        url: "https://api.whatsonchain.com/v1/bsv/main/exchangerate",
    };

```

# Wallet with Balance:

```

    var config = {
        method: 'get',
        url: "https://api.whatsonchain.com/v1/bsv/main/address/" + address + "/balance",
    };
    
```

# Hierarchial Deterministic Keys(HDKs) :

- randomly generate a HD private key
- get the corresponding HD public key
- derive regular private and public keys from a HD key pair

# HD Private Keys :

```

hdPrivateKey = bsv.HDPrivateKey.fromRandom();

```

- hdPrivateKey.toString();

# HD Public Keys :

```

hdPublicKey = bsv.HDPublicKey(hdPrivateKey);

```

- hdPublicKey.toString();

# Regular Key Pairs from HD Keys :

```

publicKey1 = hdPublicKey.publicKey.toString();

privateKey1 = hdPrivateKey.privateKey.toString();

```


# Packages:

```
    <script type="text/javascript" src="https://unpkg.com/bsv@1.5.3/bsv.min.js"></script>

    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js"></script>
    
    <script type="text/javascript" src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>

```