/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class', '[data-theme="dark"]'],
    content: ['./app/**/*.{hbs,js}'],
    theme: {
        extend: {
            colors: {
                gray: {
                    50: '#F9FAFB',
                    100: '#EBF1F5',
                    200: '#D9E3EA',
                    300: '#C5D2DC',
                    400: '#9BA9B4',
                    500: '#707D86',
                    600: '#55595F',
                    700: '#33363A',
                    800: '#25282C',
                    900: '#151719',
                },
                sky: {
                    100: '#e6f0fb',
                    200: '#bad5f5',
                    300: '#8dbbef',
                    400: '#61a0e8',
                    500: '#3485e2',
                    600: '#1c6cc7',
                    700: '#16539a',
                    800: '#103b6d',
                    900: '#092341',
                },
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
