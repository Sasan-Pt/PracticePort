
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns:{
        "custom":"1fr 15fr 1fr",
        "sevColumn":"1fr 1fr 1fr 1fr",
        "RowCustom": "1fr 1fr 1fr 1fr",
        "bColumn":"1fr 1fr 1fr",
        "bColumnc":"1fr 1fr"
      },
      cursor:{
        "custom":"url(/mail.png),pointer",
        "twitter":"url(/twitters.png),pointer",
        "doc":"url(/docs.png),pointer",
        "view":"url(/eye.png),pointer"
      },
      padding:{
      "custom": "80%"
      },
      spacing:{
        "90p":"90%",
        "80p":"80%",
        "cus":"300px",
        "30p":"30%",
        "40p":"42%",
        "44p":"100%",
        "20p":"40vw",
      },
      screens: {
        "cResp": {"max":"1198px"},
        "cResH":"1198px",
        "cRes":{"max":"819px"},
        "cBrands":{"max":"1159px"},
        "cBrandc":{"max":"788px"},
        "FontSize":{"max":"1300px"},
        "FooterC":{"max":"625px"}
      },
      brightness: {
        "percent": '50%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}

