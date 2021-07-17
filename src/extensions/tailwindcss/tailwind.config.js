module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                main: '#222222',
                primary: '#DDECE5',
                'primary-darken05': '#76B296',
                'primary-darken': '#244938',
                secondary: '#CE406A',
                'secondary-light': '#FFECF2',
                accent: '#838383',
                'accent-light': '#888888',
                info: '#EF2A62',
                // info: '#9A9A9A',
                'info-darken': '#464646',
                'info-light': '#EF2222',
                'border-icon' : '#7D7D7D',
                'border-input' : '#9A9A9A'
                
                
            },
            width: {
                '7.5.' : '1.875rem'
            },
            fontSize: {
                xs: ['0.75rem', '14.7px'],
                sm: ['0.875rem', '1.0719rem'],
                base: ['1rem', '19.6px'],
                lg: ['1.125rem', '1.3781rem'],
                xl: ['1.2rem', '1.5313rem'],
                '2xl': ['1.375rem', '1.6844rem'],
                '3xl': ['1.625rem', '1.9906rem'],
                '4xl': ['1.75rem', '2.1437rem'],
                '5xl': ['1.875rem', '2.2969rem']
            }
            
        },
        screens: {
                'sm': {'min': '300px', 'max': '400px'},
        },

        
        
    },
    
    prefix:  'tw-',
    
    variants: {},
    plugins: []
}
