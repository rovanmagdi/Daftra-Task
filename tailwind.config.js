export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      'mobile': '800px',

      'laptop': '1024px',

      'desktop': '1280px',
    },
    extend: {
      width: {
        'fill-available': '-webkit-fill-available',
        'min-content': 'min-content',
      },
      gridTemplateColumns: {
        "auto-fill-custom": `repeat(auto-fill, minmax(40px, 1fr))`,
      },
      fontFamily: {
        customFont: ["Noto Kufi Arabic", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#3d8f41ff",

        },
        secandary: {
          DEFAULT: "#f7f7f7ff",

        },


        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

    },
  },
  plugins: [],
}