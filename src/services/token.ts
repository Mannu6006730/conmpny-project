import axios from "axios";
import { Signature } from "lucide-react";

export const getNewToken = async () => {
  try {

    const payload = {
      clientId: "3197041d1b8f9c841e6827125d413bcb",
      clientSecret: "e105bcb60112f9102cad36e5856464b4",
      Signature: "e98dd569a2976628a278da29cdabc5a545caa5bd34b94f9c596b97fe6404c794b58fb43f78d6fd0ba77e91637786942a053d47eb56984b51f618ac3fe360568f"
    };

    const res = await axios
      .post("https://sandbox.woohoo.in/oauth2/token", payload, {
        headers: {
          "Content-Type": "application/json",
        },

      })
    console.log("res", res)
    const data = res?.json();
    console.log("Token get success fully: ", data)
  } catch (error) {
    console.error("Wrror while getting token :", error)
  }
}