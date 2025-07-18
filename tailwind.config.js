/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    // textStyles: {
    //   display: {
    //     fontFamily: "primary",
    //     fontWeight: "bold",
    //     fontSize: "xxl", // 40px
    //     lineHeight: "auto",
    //   },
    //   heading_1: {
    //     fontFamily: "secondary",
    //     fontWeight: "bold",
    //     fontSize: "xl", // 32px
    //     lineHeight: "auto",
    //   },
    //   heading_2: {
    //     fontFamily: "secondary",
    //     fontWeight: "bold",
    //     fontSize: "22px", // 22px
    //     lineHeight: "auto",
    //   },
    //   heading_3: {
    //     fontFamily: "secondary",
    //     fontWeight: "bold",
    //     fontSize: "lg", // 20px
    //     lineHeight: "auto",
    //   },
    //   heading_4: {
    //     fontFamily: "secondary",
    //     fontWeight: "semibold",
    //     fontSize: "md", // 18px
    //     lineHeight: "auto",
    //   },
    //   body_text: {
    //     fontFamily: "secondary",
    //     fontWeight: "regular",
    //     fontSize: "sm", // 14px
    //     lineHeight: "relaxed", // 27
    //   },
    //   body_text_small: {
    //     fontFamily: "secondary",
    //     fontWeight: "regular",
    //     fontSize: "xs", // 12px
    //     lineHeight: "tight", // 21
    //   },
    //   label: {
    //     fontFamily: "secondary",
    //     fontWeight: "semibold",
    //     fontSize: "sm", // 14px
    //     lineHeight: "auto",
    //   },
    //   label_italic: {
    //     fontFamily: "secondary",
    //     fontWeight: "semibold",
    //     fontSize: "sm", // 14px
    //     lineHeight: "auto",
    //     fontStyle: "italic",
    //   },
    //   label_small: {
    //     fontFamily: "secondary",
    //     fontWeight: "bold",
    //     fontSize: "xs", // 12px
    //     lineHeight: "auto",
    //   },
    // },
    // // Buttons
    // buttons: {
    //   primary: {
    //     default: {
    //       background: "green",
    //       color: "white",
    //       border: "none",
    //       padding: "14px 64px",
    //       height: "56px",
    //       gap: "10px",
    //       width: "100%", // 412px
    //       fontSize: "16px",
    //       fontFamily: "secondary",
    //       borderRadius: "30px",
    //       fontStyle: "normal",
    //       fontWeight: "500",
    //       lineHeight: "normal",
    //     },
    //     hover: {
    //       boxShadow: "4px 5px 7px 0px rgba(0, 0, 0, 0.35)",
    //     },
    //     active: {
    //       boxShadow: "2px 3px 4px 0px rgba(0, 0, 0, 0.35) inset",
    //     },
    //     disabled: {
    //       background: "disabled",
    //       color: "white",
    //       border: "1px solid white",
    //     },
    //   },
    //   secondaryNormal: {
    //     default: {
    //       background: "teal",
    //       color: "white",
    //       border: "1px solid white",
    //       gap: "12px",
    //       padding: "14px 56px",
    //       width: "152px",
    //       // width: "100%",
    //       // height: "auto",
    //       fontSize: "14px",
    //       fontFamily: "secondary",
    //       borderRadius: "30px",
    //       fontStyle: "normal",
    //       fontWeight: "500",
    //       lineHeight: "auto",
    //     },
    //     hover: {
    //       boxShadow: "4px 5px 7px 0px rgba(0, 0, 0, 0.35)",
    //     },
    //     active: {
    //       boxShadow: "2px 3px 4px 0px rgba(0, 0, 0, 0.35) inset",
    //     },
    //     disabled: {
    //       background: "disabled",
    //       color: "white",
    //       border: "1px solid white",
    //     },
    //   },
    //   secondarySmall: {
    //     default: {
    //       background: "transparent",
    //       color: "teal",
    //       border: "1px solid teal",
    //       gap: "10px",
    //       width: "115px",
    //       // width: "100%",
    //       height: "36px",
    //       padding: "14px 62px",
    //       fontSize: "12px",
    //       fontFamily: "secondary",
    //       borderRadius: "30px",
    //       fontStyle: "normal",
    //       fontWeight: "500",
    //       lineHeight: "auto",
    //     },
    //     hover: {
    //       boxShadow: "4px 5px 7px 0px rgba(0, 0, 0, 0.35)",
    //     },
    //     active: {
    //       background: "teal",
    //       color: "white",
    //     },
    //     disabled: {
    //       background: "transparent",
    //       color: "disabled",
    //       border: "1px solid disabled",
    //     },
    //   },
    //   subMenu: {
    //     default: {
    //       background: "teal",
    //       color: "white",
    //       gap: "10px",
    //       padding: "14px 62px",
    //       width: "92px",
    //       // width: "100%",
    //       height: "36px",
    //       fontSize: "14px",
    //       fontFamily: "secondary",
    //       borderRadius: "30px",
    //       fontStyle: "normal",
    //       fontWeight: "500",
    //       lineHeight: "auto",
    //     },
    //     hover: {
    //       background: "green",
    //     },
    //     active: {
    //       background: "green",
    //     },
    //     disabled: {
    //       background: "disabled",
    //     },
    //   },
    // },
    extend: {
      screens: {
        xs: "400px",
      },
      colors: {
        teal: "#172D40",
        darkTeal: "#0A1926",
        grey: "#88898C",
        mediumGrey: "#BFBFBF ",
        lightGrey: "#F0F0F2",
        white: "#FFFFFF",
        black: "#000000",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontSize: {
        xs: "12px", // (label small)
        sm: "14px", // (body text, body text small, label)
        md: "18px", // (h4)
        lg: "20px", // (h2, h3)
        xl: "32px", // (h1)
        xxl: "40px", // (display)
      },
      lineHeight: {
        auto: "normal",
        tight: "21px",
        regular: "24px",
        relaxed: "27px",
      },
      fontWeight: {
        light: 300,
        regular: 400,
        semibold: 600,
        bold: 700,
      },
      fontFamily: {
        heading: ["Sour Gummy", "sans-serif"],
        main: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        cards: "1px 3px 24px 0px rgba(33, 58, 89, 0.31)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        floating: {
          "0%, 100%": {
            transform: "translateX(0%) translateY(0%) scale(3) rotate(0deg)",
          },
          "50%": {
            transform:
              "translateX(100%) translateY(100%) scale(5) rotate(60deg)",
          },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(80%)" },
          "100%": { opacity: "1", transform: "translateY(0%)" },
        },
        collapse: {
          "0%": { transform: "translateY(150%)" },
          "100%": { height: "0", transform: "translateY(150%)" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0%)", zIndex: -1 },
          "100%": { opacity: "0", transform: "translateY(150%)", zIndex: -1 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        floating: "floating 20s linear infinite",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "fade-in": "fade-in 0.15s ease-out forwards",
        "fade-out":
          " fade-out 0.35s ease-in forwards, collapse 0.2s linear forwards 0.2s",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

