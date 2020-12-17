module.exports = {
    purge: [
        './dist/**/*.html',
        './dist/**/*.js',
    ],
    theme: {
        extend: {
            animation: {
                'spin-reverse': 'spin-reverse 1s linear infinite',
            },
            colors: {
                'xrpl-ws-blue': '#0033cc',
                'xrpl-ws-red': '#dc3545',
                'xrpl-ws-red-secondary': '#FCA5A5',
                'xrpl-ws-orange': '#ffc107',
                'xrpl-ws-orange-secondary': '#FCD34D',
                'xrpl-ws-green': '#28a745',
                'xrpl-ws-green-secondary': '#6EE7B7',
                'xrpl-ws-cta': '#15db95',
                'xrpl-ws-cta-hover': '#0e9566',
                'xrpl-ws-yellow-badge-text': '#856404',
                'xrpl-ws-yellow-badge-background': '#ffeeba',
                'xrpl-ws-green-badge-text': '#155724',
                'xrpl-ws-green-badge-background': '#d4edda',

            },
            keyframes: {
                'spin-reverse': {
                    from: {
                        transform: 'rotate(360deg)'
                    },
                    to: {
                        transform: 'rotate(0deg)'
                    },
                }
            },
            maxWidth: {
                '2/3': '66%',
                '15ch': '15ch',
                '25ch': '25ch'
            }
        },
        fontFamily: {
            sans: [
                'Inter var',
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                '"Noto Sans"',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"',
            ],
            serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
            mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
        },
    },
  plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('autoprefixer'),
    ]
}