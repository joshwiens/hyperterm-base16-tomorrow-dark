// Base16 Tomorrow Dark Theme

exports.middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      action.config.foregroundColor = '#c5c8c6';
      action.config.backgroundColor = '#363a40';
      action.config.cursorColor = '#cc6666';
      action.config.colors = [
        "#1d1f21",
        "#cc6666",
        "#b5bd68",
        "#f0c674",
        "#81a2be",
        "#b57880",
        "#8abeb7",
        "#282a2e",
        "#969896",
        "#cc6666",
        "#b5bd68",
        "#f0c674",
        "#81a2be",
        "#b57880",
        "#8abeb7",
        "#ffffff",
        "#c5c8c6"
      ];
      action.config.css = '.title_1i8co95 { color: #c5c8c6 !important }'
  }
  next(action)
}
