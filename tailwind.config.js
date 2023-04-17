/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/{*.js,*.jsx,*.ts,*.tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'base': '#1A1B1E',
                'button': '#131010',
            }
        },
    },
    plugins: [],
}

