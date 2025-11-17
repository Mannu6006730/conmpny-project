const axios = require("axios");
const qs = require("qs");

const payload = qs.stringify({
  grant_type: "authorization_code",
  authorizationCode: "YOUR_JWT_CODE"
});

axios
  .post("https://sandbox.woohoo.in/oauth2/token", payload, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "x-ibm-client-id": "3197041d1b8f9c841e6827125d413bcb",
      "User-Agent": "Mozilla/5.0"
    }
  })
  .then((res: any) => console.log(res.data))
  .catch((err: any) => console.log(err.response?.data || err));
