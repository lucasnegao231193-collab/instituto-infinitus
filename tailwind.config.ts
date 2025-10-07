import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Verde Institucional Instituto Infinitus
        sage: {
          50: '#f0f5f2',
          100: '#d9e8df',
          200: '#b3d1bf',
          300: '#8cba9f',
          400: '#66a37f',
          500: '#2F723E', // Verde Institucional Principal
          600: '#265a32',
          700: '#1d4325',
          800: '#132b19',
          900: '#0a140c',
        },
        corporate: {
          dark: '#2F4F4F', // Azul Corporativo
          light: '#708090', // Azul Claro
        },
        accent: {
          green: '#2F723E', // Verde Institucional
          orange: '#FF9800', // Laranja Institucional
          red: '#E53935', // Vermelho Social
        },
        gray: {
          50: '#F8F9FA',
          100: '#E9ECEF',
        }
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        // Desktop sizes
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '500' }],
        'h4': ['1.25rem', { lineHeight: '1.5', fontWeight: '500' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '300' }],
        // Mobile sizes
        'h1-mobile': ['2rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2-mobile': ['1.75rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3-mobile': ['1.375rem', { lineHeight: '1.4', fontWeight: '500' }],
      },
      maxWidth: {
        'container': '1200px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'skeleton': 'skeleton 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        skeleton: {
          '0%': {
            backgroundColor: '#f0f0f0',
          },
          '100%': {
            backgroundColor: '#e0e0e0',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
