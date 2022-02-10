console.log('POSTCSS tailwind e iconsauce')
module.exports = {
  plugins: [
    require('postcss-iconsauce'),
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
