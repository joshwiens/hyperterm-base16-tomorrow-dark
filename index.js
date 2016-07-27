const backgroundColor = '#1d1f21'
const foregroundColor = '#c5c8c6'
const cursorColor = foregroundColor
const borderColor = backgroundColor

const colors = [
  backgroundColor,
  '#cc6666', // red
  '#b5b84d', // green
  '#de935f', // yellow
  '#81a2be', // blue
  '#b294bb', // pink
  '#81a2be', // cyan
  '#d5d9dc', // light gray
  '#909898', // medium gray
  '#cc6666', // red
  '#b5b84d', // green
  '#d19a66', // yellow
  '#81a2be', // blue
  '#b294bb', // pink
  '#81a2be', // cyan
  '#ffffff', // white
  foregroundColor
]

exports.decorateConfig = config => {
  console.log('Style Loaded!')

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node {
        mix-blend-mode: difference;
      }
    `,
    css: `
      ${config.css || ''}
      .header_header {
        top: 0;
        right: 0;
        left: 0;
      }
      .tabs_list {
        background-color: #161719 !important;
        border-bottom-color: rgba(0,0,0,.15) !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        background-color: ${backgroundColor};
        border-color: rgba(0,0,0,.27) !important;
      }
      .tab_tab.tab_active::before {
        border-bottom-color: ${backgroundColor};
      }
    `
  })
}
