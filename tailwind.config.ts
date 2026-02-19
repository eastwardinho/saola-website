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
        // Brand Key Color (RESTRICTED - brand assets only, NOT for CTAs)
        saola: {
          orange: '#FFA400',
        },
        // Supporting Colors - Full Palette
        brand: {
          // CTA Colors (use these for buttons)
          coral: '#FF7F32',
          'golden-yellow': '#FFB81C',
          // Fresh & Natural
          mint: '#80E0A7',
          teal: '#00BAB3',
          'dark-teal': '#0D5257',
          // Bold & Energetic
          'bright-red': '#F93822',
          rust: '#C04C36',
          // Calm & Professional
          'light-blue': '#8BD3E6',
          blue: '#0857C3',
          navy: '#001871',
          // Warm & Earthy
          caramel: '#AC7644',
          'dark-brown': '#3F2021',
          'golden-brown': '#C59014',
          'dark-olive': '#5A4522',
          // Soft & Feminine
          'light-pink': '#F5CDF0',
          pink: '#EF60A3',
          blush: '#F5D0C4',
          peach: '#F3CFB3',
          // Creative & Bold
          purple: '#87189D',
          // Neutrals
          gray: '#B2B4B2',
          charcoal: '#3D3935',
        },
      },
      fontFamily: {
        // Basel Classic approximation with system fonts
        // In production, load actual Basel Classic
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        // Brand typography specifications
        'heading': '-0.05em',    // -50 tracking for headings
        'body': '0.01em',        // +10 tracking for body
        'caps': '0.1em',         // +100 tracking for small caps
      },
      lineHeight: {
        'heading': '1',          // Leading = font size for headings
      },
      backgroundImage: {
        // Warm gradients (max 2 colors per brand rules)
        'warm-gradient': 'linear-gradient(135deg, #F3CFB3 0%, #F5D0C4 100%)',
        'coral-peach': 'linear-gradient(135deg, #FF7F32 0%, #F3CFB3 100%)',
        'golden-warm': 'linear-gradient(135deg, #FFB81C 0%, #F5D0C4 100%)',
        'mint-teal': 'linear-gradient(135deg, #80E0A7 0%, #00BAB3 100%)',
        'blush-pink': 'linear-gradient(135deg, #F5D0C4 0%, #F5CDF0 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
