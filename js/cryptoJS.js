var key = CryptoJS.enc.Utf8.parse("93wj660t8fok9jws");
var iv  = CryptoJS.enc.Utf8.parse("r0yy7e67p49ee4d7");

function encrypt(plainText) {
  return CryptoJS.AES.encrypt(plainText, key, 
                              { iv: iv,
                               padding: CryptoJS.pad.Pkcs7,
                               mode: CryptoJS.mode.CBC
                              }).ciphertext.toString(CryptoJS.enc.Base64);
}

function decrypt(encryptedText) {  
  var cipherParams = CryptoJS.lib.CipherParams.create({
    ciphertext: CryptoJS.enc.Base64.parse(encryptedText)
  });
  return CryptoJS.AES.decrypt(cipherParams, key, 
                              { iv: iv,
                               padding: CryptoJS.pad.Pkcs7,
                               mode: CryptoJS.mode.CBC
                              }).toString(CryptoJS.enc.Utf8);
}