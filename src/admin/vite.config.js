const { mergeConfig } = require('vite');

module.exports = (config) => {
  return mergeConfig(config, {
    server: {
      host: true,
      allowedHosts: true,
	   hmr: false,
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  });
};
