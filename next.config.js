// required file according to next.js documentation in order to render images from external domains
module.exports = {
  images: {
    remotePatterns: [new URL('https://cdn2.thedogapi.com/images/**')],
  },
}