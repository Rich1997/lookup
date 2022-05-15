module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter var", "sans-serif"],
                satoshi: ["Satoshi var", "sans-serif"],
            },
        },
        screens: {
            sm: "320px",
            // => @media (min-width: 640px) { ... }

            md: "480px",
            // => @media (min-width: 768px) { ... }

            lg: "768px",
            // => @media (min-width: 1024px) { ... }

            xl: "1024px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1200px",
            // => @media (min-width: 1536px) { ... }
        },
    },
    plugins: [],
};
