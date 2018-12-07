const YAML = require('yaml');
const fs = require('fs');

const file = fs.readFileSync('../../source/_data/next.yml', 'utf8');
const _file = fs.readFileSync('./_config.yml', 'utf8');

const _config = YAML.parse(_file);
const config = Object.assign(_config, YAML.parse(file));

function getProperty(obj, name) {
  name = name.replace(/\[(\w+)]/g, '.$1').replace(/^\./, '');

  const split = name.split('.');
  let key = split.shift();

  if (!obj.hasOwnProperty(key)) return '';

  let result = obj[key];
  let len = split.length;

  if (!len) return result || '';
  if (typeof result !== 'object') return '';

  for (let i = 0; i < len; i++) {
    key = split[i];
    if (!result.hasOwnProperty(key)) return '';

    result = result[split[i]];
    if (typeof result !== 'object') return result;
  }

  return result;
}

const plugin = function () {
  return function (style) {
    style.define('hexo-config', function (data) {
      return getProperty(config, data.val);
    });
  };
};

module.exports = plugin;
