import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    purple: {
      default: '#8047F8',
      dark: '#4B2995',
      light: '#EBE5F9'
    },
    yellow: '#DBAC2C',
    yellow_dark: '#C47F17',
    gray: {
      900: '#FAFAFA',
      800: '#F3F2F2',
      700: '#EDEDED',
      600: '#E6E5E5',
      500: '#D7D5D5',
      400: '#8D8686',
      300: '#574F4D',
      200: '#403937',
      100: '#272221'
    },
    white: '#FFFFFF',
    red: '#C44117',
    red_light: '#F2DFD8',
    red_dark: '#E8BAAB',
  },
  fonts: {
    heading: 'Baloo2_700Bold',
    body: 'Roboto_400Regular',
  },
  fontSizes: {
    text: {
     xs: 12,
     sm: 14,
     md: 16,
     lg: 20,
    },
    heading: {
      xs: 14,
      sm: 16,
      md: 20,
      lg: 24,
      xl: 36,
    }
  },
  sizes: {
    14: 56,
    33: 148
  }
})