
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['rNQroqoMQ8Msa2VYR8Uycp'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  