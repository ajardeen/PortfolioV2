module.exports = {
  content: [
    "./index.html", // If you're using Vite, include this
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust paths based on your folder structure
  ],
  theme: {
    theme: {
          extend: {
            animation: {
              'spin-slow': 'spin 10s linear infinite',
            }
          }
        }
  },
  plugins: [],
};
