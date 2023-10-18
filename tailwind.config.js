/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // purge: {
  //   // content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  //   options: {
  //     safelist: [
  //       'bg-indigo-200', 
  //       'bg-indigo-800', 
  //       'bg-slate-300', 
  //       'bg-slate-800', 
  //       'dark:bg-red-500', 
  //       'bg-slate-50'
  //     ], // Whitelist specific classes
  //   },
  // },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {
        '1200': '1200px',
      },
      colors: {
        primary: {
          1: 'var(--primary-1)',
          2: 'var(--primary-2)',
          3: 'var(--primary-3)',
          4: 'var(--primary-4)',
          5: 'var(--primary-5)',
          6: 'var(--primary-6)',
        },
        primary_rgb: {
          1: 'var(--primary-rgb-1)',
          2: 'var(--primary-rgb-2)',
          3: 'var(--primary-rgb-3)',
          4: 'var(--primary-rgb-4)',
          5: 'var(--primary-rgb-5)',
          6: 'var(--primary-rgb-6)',
        }
      }
    },
  },
  plugins: [],
}
