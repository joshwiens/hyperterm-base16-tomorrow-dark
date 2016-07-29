const lib = require('./tomorrowDark-theme');
const test = require('ava');

test('should be an object', t => {
  const theme = lib({});
  t.is(typeof theme, 'object');
});

test('should have required properties', t => {
  const theme = lib({});
  const props = [
    'foregroundColor',
    'backgroundColor',
    'borderColor',
    'cursorColor',
    'colors',
    'css',
  ];

  const hasAllProps = props.reduce((last, current) => {
    return !last ? last : theme.hasOwnProperty(current);
  }, true);

  t.is(hasAllProps, true);
});

test('should have default theme values', t => {
  const theme = lib({});

  t.is(theme.cursorColor, '#c5c8c6');
  t.is(theme.foregroundColor, '#c5c8c6');
  t.is(theme.backgroundColor, '#1d1f21');
  t.is(theme.borderColor, '#161719');
});

test('user config options should override theme values', t => {
  const userOptions = {
    themeOptions: {
      cursorColor: 'blue',
      foregroundColor: 'orange',
      backgroundColor: 'red',
    },
  };

  const theme = lib(userOptions);

  t.is(theme.cursorColor, 'blue');
  t.is(theme.foregroundColor, 'orange');
  t.is(theme.backgroundColor, 'red');
});
