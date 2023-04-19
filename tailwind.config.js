/** @type {import('tailwindcss').Config} */

const theme = require("tailwindcss/defaultTheme");
module.exports = {
    content: [
        "./src/**/{*.js,*.jsx,*.ts,*.tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'base': '#1A1B1E',
                'button': '#131010',
                "content": "#0D0E0D",
                "other": "#191C1E",
            }
        },
    },
    plugins: [],
}

