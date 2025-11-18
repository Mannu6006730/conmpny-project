import axios from "axios";

export const getNewToken = async () => {
  try {

    const payload = {
      clientId: "3197041d1b8f9c841e6827125d413bcb",
      username: "smartpayflexapisandbox@woohoo.in",
      password: "smartpayflexapisandbox@123"
    };

    const res = await axios
      .post("https://sandbox.woohoo.in/oauth2/token", payload, {
        headers: {
          "signature": "e98dd569a2976628a278da29cdabc5a545caa5bd34b94f9c596b97fe6404c794b58fb43f78d6fd0ba77e91637786942a053d47eb56984b51f618ac3fe360568f",
        },

      })
    console.log("res", res)
    const data = res?.json();
    console.log("Token get success fully: ", data)
  } catch (error) {
    console.error("Wrror while getting token :", error)
  }
}