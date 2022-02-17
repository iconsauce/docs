module.exports = {
  content: [
    './src/**/*.{tsx,ts}',
  ],
  fontSize: '24px',
  plugin: [
    require('@iconsauce/material-design-icons-updated'),
    require('@iconsauce/mdi-svg'),
    require('@iconsauce/mgg-icons'),
    {
      prefix: 'is',
      regex: {
        code: /(is)(\/{1}[0-9a-z-]+){1}/gm,
        lib: /([a-zA-Z_\-/]+\/([0-9a-zA-Z_-]+)\.svg)/,
      },
      selector: path => `is/${path[2].replace(/[_]+/g, '-')}`,
      path: './src/svg/*.svg',
    },
  ],
}
