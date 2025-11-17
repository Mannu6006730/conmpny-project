const axios = require("axios");
const qs = require("qs");

export const getNewToken = async () => {
  try {

    const payload = qs.stringify({
      clientId: "3197041d1b8f9c841e6827125d413bcb",
      username: "smartpayflexapisandbox@woohoo.in",
      password: "smartpayflexapisandbox@123"
    });

    const res = await axios
      .post("https://sandbox.woohoo.in/oauth2/token", payload, {
        headers: {
          "signature": "15c09fb7245a8a1ba949f9e39a773621fed0a2753e7803826c2be96cbae4242f218e564fce3e5638104af596c31d0a4357b3475fcc6cc2f5d4d37854dd9fce6a",
        },

      })
    console.log("res",res)
    const data = res.json();
    console.log("Token get success fully: ", data)
  } catch (error) {
    console.error("Wrror while getting token :", error)
  }
}