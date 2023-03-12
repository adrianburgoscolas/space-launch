const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/3.3.0/launch/upcoming',
    createProxyMiddleware({
      target: 'https://spacelaunchnow.me',
      changeOrigin: true,
    })
  );
};
