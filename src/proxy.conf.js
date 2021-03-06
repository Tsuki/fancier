const PROXY_CONFIG = [
  {
    context: ['/**/**.json', '/**/**.png', '/**/**.jpg', '/**/**.webp'],
    target: "http://localhost:4000/",
    secure: false,
    logLevel: "debug",
    changeOrigin: true
  }
];

module.exports = PROXY_CONFIG;
