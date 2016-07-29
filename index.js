const theme = require('./lib/tomorrowDark-theme');

exports.decorateConfig = config => {
  return Object.assign({}, config, theme(config));
};
