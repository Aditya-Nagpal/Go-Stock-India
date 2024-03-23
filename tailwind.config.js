/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,tsx,jsx,mdx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({addUtilities}){
      addUtilities({
        '.discuss-card-width': {
            width: '97%',
        },
        '.card-box-shadow': {
            '-moz-box-shadow': '6px 6px 6px #0004',
            '-webkit-box-shadow': '6px 6px 6px #0004',
            'box-shadow': '6px 6px 6px #0004'
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none'
        },
        '.sidenavbar-item-hover:hover': {
          '@apply bg-sky-950': {}
        },
        '.min-w-half': {
          'min-width': '50vw'
        },
        '.-left-50vw': {
          left: '-50vw'
        },
        '.min-w-22': {
          width: '22vw'
        },
        '.-left-22vw': {
          left: '-22vw'
        },
        '.round': {
          'border-radius': '50%'
        },
      });
    }
  ],
}

