module.exports = {
    purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],

    theme: {
        textColor: theme => {
            return {
                ...theme('colors'),
                purple: "rgb(117, 16, 247)"
            }
        },
    }
};
