// https://tailwindcss.com/docs/configuration
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

export default {
  content: [
    './app/**/*.php',
    './resources/**/*.{php,js,ts,tsx,vue}',
    './resources/views/**/*.php',
    './public/content/themes/radicle/index.php',
  ],
  theme: {
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
        950: '#030712',
      },
      indigo: {
        50: '#eef2ff',
        100: '#e0e7ff',
        200: '#c7d2fe',
        300: '#a5b4fc',
        400: '#818cf8',
        500: '#6366f1',
        600: '#4f46e5',
        700: '#4338ca',
        800: '#3730a3',
        900: '#312e81',
        950: '#1e1b4b',
      },
    },
    screens: {
      galaxyflold: '280px',
      xxs: '320px',
      galaxys5: '360px',
      iphone5: '375px',
      iphone11: '425px',
      xs: '480px',
      mobile: '575px',
      sm: '640px',
      iphone6: '667px',
      md: '768px',
      galaxytabs: '800px',
      tab: '993px',
      lg: '1024px',
      notebook: '1200px',
      xl: '1280px',
      latop: '1350px',
      macbook: '1440px',
      '2xl': '1536px',
      desktop: '1600px',
      '3xl': '1920px',
      '4xl': '2560px',
      '5xl': '3840px',
    },
    maxWidth: {
      site: '1440px',
    },
    fontFamily: {
      'primary': ['Roboto', 'sans-serif'],
      'secondary': ['Roboto', 'sans-serif'],
   },
    fontSize: {
      // 'xs': '0.75rem', // 12px
      // 'sm': '0.875rem', // 14px
      // 'base': '1rem', // 16px
      // 'lg': '1.125rem', // 18px
      // 'xl': '1.25rem', // 20px
      // '2xl': '1.5rem', // 24px
      // '3xl': '1.875rem', // 30px
      // '4xl': '2.25rem', // 36px
      // '5xl': '3rem', // 48px
      // '6xl': '3.75rem', // 60px
      // '7xl': '4.5rem', // 72px
      // '8xl': '6rem', // 96px
      // '9xl': '8rem', // 128px
    },
  },
  plugins: [
    forms,
  ],
} satisfies Config;

