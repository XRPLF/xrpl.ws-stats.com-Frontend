module.exports = {
    purge: [
        './dist/**/*.html',
        './dist/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                'xrpl-ws-blue': '#0033cc',
                'xrpl-ws-red': '#dc3545',
                'xrpl-ws-orange': '#ffc107',
                'xrpl-ws-green': '#28a745',
                'xrpl-ws-cta': '#15db95',
                'xrpl-ws-cta-hover': '#0e9566',
                'xrpl-ws-yellow-badge-text': '#856404',
                'xrpl-ws-yellow-badge-background': '#ffeeba',
                'xrpl-ws-green-badge-text': '#155724',
                'xrpl-ws-green-badge-background': '#d4edda',

            },
            maxWidth: {
                '2/3': '66%'
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