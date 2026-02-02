/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                zuboc: {
                    dustyRose: '#D18E9E',
                    mutedGold: '#D4AF37',
                    sage: '#8DA399',
                    slateBlue: '#6A7DAB',
                    dustyCoral: '#D36A6A',
                    plum: '#8E4585',
                    teal: '#367588',
                    lavender: '#D8BFD8',
                    mutedCoral: '#FFB6C1',
                    pastelBlue: '#B0E0E6',
                    creamyYellow: '#FFFACD',
                    sageAlt: '#98FB98',
                },
                neutral: {
                    bg: '#FFFFFF',
                    text: '#111111',
                    muted: '#6B7280',
                    border: '#E5E7EB',
                }
            },
            fontFamily: {
                body: ['"Momo Trust Sans"', 'Poppins', 'sans-serif'],
                heading: ['"Momo Trust Sans"', 'Poppins', 'sans-serif'],
            },
            borderRadius: {
                'pill': '30px',
            },
            letterSpacing: {
                'tight-heading': '-0.02em',
            }
        },
    },
    plugins: [],
}
