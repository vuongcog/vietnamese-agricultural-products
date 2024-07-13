import CryptoJS from 'crypto-js';

export const decryptData = (encryptedData, secretKey) => {
  try {
    const decodedData = decodeURIComponent(encryptedData);
    const bytes = CryptoJS.AES.decrypt(decodedData, secretKey);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  } catch (error) {
    console.error('Error decrypting data:', error);
    return null;
  }
};
export const encrypData = (data, key) => {
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    key
  ).toString();
  return encodeURIComponent(encryptedData);
};
