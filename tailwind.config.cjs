const plugin = require('tailwindcss/plugin');
const { spacing, fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const waveAnimation = '0.5s linear infinite alternate';
const waveLength = spacing[1];
const getWaveKeyframes = (length) => ({
  from: { transform: 'translateY(0)' },
  to: { transform: `translateY(${length})` },
});

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    transitionDuration: {
      DEFAULT: '250ms',
    },
    extend: {
      screens: { xs: '480px', '2xs': '360px' },
      fontFamily: {
        mono: ['Iosevka', ...fontFamily.mono],
        sans: ['Inter', ...fontFamily.sans],
        optician: ['Optician', ...fontFamily.sans],
      },
      animation: {
        'wave-up': `wave-up ${waveAnimation}`,
        'wave-down': `wave-down ${waveAnimation}`,
      },
      keyframes: {
        'wave-up': getWaveKeyframes(`-${waveLength}`),
        'wave-down': getWaveKeyframes(waveLength),
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => addUtilities({
      '.animate-run': {
        'animation-play-state': 'running',
      },
      '.animate-pause': {
        'animation-play-state': 'paused',
      },
      '.scrollbar': {
        '&::-webkit-scrollbar': {
          width: '0.5rem',
          height: '0.5rem',
          'background-color': 'transaprent',
        },
        '&::-webkit-scrollbar-track': {
          'background-color': 'rgb(163 163 163 / 0.15)',
        },
        '&::-webkit-scrollbar-thumb': {
          'border-radius': '9999px',
          'background-color': '#fff',
        },
      },
    })),
    plugin(({ matchUtilities, theme }) => matchUtilities(
      {
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') }
    )),
  ],
};
