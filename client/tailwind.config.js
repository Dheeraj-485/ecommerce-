/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
 
      './index.html', // Main HTML entry point
      './src/**/*.{js,jsx,ts,tsx}', // All React components
      './node_modules/@shadcn/ui/**/*.{js,jsx,ts,tsx}', // shadcn components
    
    
  ],

    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
  plugins: [require('@tailwindcss/aspect-ratio'),require('@tailwindcss/forms')],
}

