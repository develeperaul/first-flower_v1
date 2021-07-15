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
                'border-icon' : '#7D7D7D'
                
                
            },
            width: {
                '7.5.' : '1.875rem'
            }
            
        },
        screens: {
                'sm': {'min': '300px', 'max': '400px'},
            }
        
        
    },
    
    prefix:  'tw-',
    
    variants: {},
    plugins: []
}
