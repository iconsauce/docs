setTimeout(() => { console.log('POSTCSS tailwind e iconsauce') }, 3000)
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-iconsauce'),
    require('autoprefixer'),
  ],
}
