/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        primaryBlk: "#000000",
        menuBg: "#CBE4E8",
        productBg: "#F4F4F6",
        buttonColor: "#E11D48",
        lime: "#00FF66",
      },
    },

    screens: {
      mobile: [
        {
          min: "350px",
          max: "428px",
        },
      ],
      ipadmini: [
        {
          min: "640px",
          max: "768px",
        },
      ],
      ipad: [{ min: "768px", max: "834px" }],
      tablet: [
        {
          min: "834px",
          max: "1118px",
        },
      ],
      desktop: [
        {
          min: "1280px",
        },
      ],
    },
  },
  plugins: [],
};
