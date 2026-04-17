const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api/exchange-rates',
    createProxyMiddleware({
      target: 'https://www.cnb.cz',
      changeOrigin: true,
      pathRewrite: {
        '^/api/exchange-rates':
          '/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt',
      },
    }),
  );
};
