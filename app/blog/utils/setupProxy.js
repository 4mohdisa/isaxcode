const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/wp-json',
    createProxyMiddleware({
      target: 'https://next.isaxcode.com',
      changeOrigin: true,
      proxy: {
        // Set the proxy to the target URL
        path: '/wp-json',
      },
    })
  );
};
