var address = "1BD5Y5wDVTTnAd6KZkcCSUnJ6hpoB3fczj"
    
var y = document.querySelector("#addressText");
y.innerHTML = address;

var addressCode = 'bitcoinsv:' + address;

new QRCode(document.getElementById("qrcode"), addressCode);

var config = {
    method: 'get',
    url: "https://api.whatsonchain.com/v1/bsv/main/address/" +
    address + "/balance",
};

axios(config)
.then((response) => {
  let data = JSON.stringify(response.data);
  let p = document.getElementById("balance");
  p.innerHTML = data;
})