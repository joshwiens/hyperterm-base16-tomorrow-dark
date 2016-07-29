const foregroundColor = '#c5c8c6';
const backgroundColor = '#1d1f21';
const borderColor = '#161719';
const red = '#cc6666';
const green = '#b5b84d';
const yellow = '#de935f';
const blue = '#81a2be';
const pink = '#b294bb';
const cyan = '#81a2be';
const lightGrey = '#d5d9dc';
const mediumGrey = '#909898';
const white = '#ffffff';

module.exports = (config) => {
  const themeOptions = config.themeOptions || {};
  const css = config.css || '';
  const termCSS = config.termCSS || '';

  return {
    foregroundColor: themeOptions.foregroundColor || foregroundColor,
    backgroundColor: themeOptions.backgroundColor || backgroundColor,
    borderColor: themeOptions.borderColor || borderColor,
    cursorColor: themeOptions.cursorColor || '#c5c8c6',
    colors: [
      backgroundColor,
      red,
      green,
      yellow,
      blue,
      pink,
      cyan,
      lightGrey,
      mediumGrey,
      red,
      green,
      yellow,
      blue,
      pink,
      cyan,
      white,
      foregroundColor,
    ],
    termCSS: `
      ${termCSS}
      .cursor-node {
        mix-blend-mode: difference;
      }
    `,
    css: `
      ${css}
      .header_header {
        top: 0;
        right: 0;
        left: 0;
      }
      .tabs_list {
        background-color: ${themeOptions.borderColor || borderColor};
        border-bottom-color: rgba(0,0,0,.15) !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        color: ${red};
        background-color: ${themeOptions.activeTabColor || backgroundColor};
        border-color: rgba(0,0,0,.27) !important;
      }
      .tab_tab.tab_active::before {
        border-bottom-color: ${themeOptions.activeTabColor || backgroundColor};
      }
    `,
  };
};
