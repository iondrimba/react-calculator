module.exports = {
  swDest: 'public/sw.js',
  runtimeCaching: [
    {
      urlPattern: /^calculator\.iondrimbafilho\.me$/,
      handler: 'cacheFirst',
      options: {
        expiration: {
          maxEntries: 100,
        },
      },
    },
  ],
  globPatterns: ['**/*.{js,png,html,css,woff2,woff,svg}'],
  globDirectory: './public'
}
