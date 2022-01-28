module.exports = {
  content: [
    './node_modules/@maggioli-design-system/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  important: true,
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      gridTemplateColumns: {
        section: '340px minmax(0, auto)',
      },
      opacity: {
        85: '.85',
      },
      width: {
        aside: '340px',
      },
    },
  },
  presets: [
    require('@maggioli-design-system/styles'),
  ],
}
