/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c'
      },
      red: {
        100: '#fff5f5',
        200: '#fed7d7',
        300: '#feb2b2',
        400: '#fc8181',
        500: '#f56565',
        600: '#e53e3e',
        700: '#c53030',
        800: '#9b2c2c',
        900: '#742a2a'
      },
      orange: {
        100: '#fffaf0',
        200: '#feebc8',
        300: '#fbd38d',
        400: '#f6ad55',
        500: '#ed8936',
        600: '#dd6b20',
        700: '#c05621',
        800: '#9c4221',
        900: '#7b341e'
      },
      yellow: {
        100: '#fffff0',
        200: '#fefcbf',
        300: '#faf089',
        400: '#f6e05e',
        500: '#ecc94b',
        600: '#d69e2e',
        700: '#b7791f',
        800: '#975a16',
        900: '#744210'
      },
      green: {
        100: '#f0fff4',
        200: '#c6f6d5',
        300: '#9ae6b4',
        400: '#68d391',
        500: '#48bb78',
        600: '#38a169',
        700: '#2f855a',
        800: '#276749',
        900: '#22543d'
      },
      teal: {
        100: '#e6fffa',
        200: '#b2f5ea',
        300: '#81e6d9',
        400: '#4fd1c5',
        500: '#38b2ac',
        600: '#319795',
        700: '#2c7a7b',
        800: '#285e61',
        900: '#234e52'
      },
      blue: {
        100: '#ebf8ff',
        200: '#bee3f8',
        300: '#90cdf4',
        400: '#63b3ed',
        500: '#4299e1',
        600: '#3182ce',
        700: '#2b6cb0',
        800: '#2c5282',
        900: '#2a4365'
      },
      indigo: {
        100: '#ebf4ff',
        200: '#c3dafe',
        300: '#a3bffa',
        400: '#7f9cf5',
        500: '#667eea',
        600: '#5a67d8',
        700: '#4c51bf',
        800: '#434190',
        900: '#3c366b'
      },
      primary: '#0747A6',
      tertiary: '#e6e9f0',
      textDarkest: '#172b4d',
      textDark: '#42526E',
      textMedium: '#5E6C84',
      textLight: '#8993a4',
      textLink: '#0052cc',
      textLogo: '#DEEBFF',

      backgroundDarkPrimary: '#0747A6',
      backgroundMedium: '#dfe1e6',
      backgroundLight: '#ebecf0',
      backgroundLightest: '#F4F5F7',
      backgroundLightPrimary: '#D2E5FE',
      backgroundLightSuccess: '#E4FCEF',

      borderLightest: '#dfe1e6',
      borderLight: '#C1C7D0',
      borderInputFocus: '#4c9aff'
    },
    fontSize: {
      xs: '0.75rem',
      13: '0.8125rem',
      sm: '0.875rem',
      15: '0.9375rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      btn: '14.5px', //added
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem'
    },
    spacing: {
      sidebar: '240px',
      navbarLeft: '64px',
      px: '1px',
      1: '0.25rem', //4px
      '1-25': '0.3125rem', //5px
      '1-5': '0.375rem', //6px
      2: '0.5rem', //8px
      3: '0.75rem', //12px
      4: '1rem', //16px
      5: '1.25rem', //20px
      6: '1.5rem', //24px
      7: '1.75rem', //28px
      8: '2rem', //32px
      10: '2.5rem', //40px
      12: '3rem', //48px
      14: '3.5rem', //56px
      16: '4rem', //64px
      40: '10rem', //160px
    },
    boxShadow: {
      none: 'none',
      sidebar: '1px 0 0 0 #e6e6e6;',
      'outline-white': '0 0 0 2px #fff'
    },
    extend: {},
  },
  plugins: [],
  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.ts'],
  },
}

