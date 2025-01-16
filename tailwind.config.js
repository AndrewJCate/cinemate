/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'dark-gray': 'rgb(17 24 39)',
                'medium-gray': 'rgb(55 65 81)',
                'light-gray': 'rgb(209 213 219)',
                'bg-gray': 'rgb(229 231 235)',
                'hover-yellow': 'rgb(250 204 21)',
                'hover-blue': 'rgb(59 130 246)',
            },
        },
    },
    plugins: [],
}