## Hyperterm Base16 Tomorrow Dark Theme [![Build Status](https://travis-ci.org/d3viant0ne/hyperterm-base16-tomorrow-dark.svg?branch=master)](https://travis-ci.org/d3viant0ne/hyperterm-base16-tomorrow-dark) [![codecov](https://codecov.io/gh/d3viant0ne/hyperterm-base16-tomorrow-dark/branch/master/graph/badge.svg)](https://codecov.io/gh/d3viant0ne/hyperterm-base16-tomorrow-dark)
Hyperterm Theme based on Atom's `base16-tomorrow-dark-theme` theme

Terminal
----------
![hyperterm-base16-tomorrow-dark Console](https://raw.githubusercontent.com/d3viant0ne/hyperterm-base16-tomorrow-dark/master/assets/colors.png)

### Install
1. Open HyperTerm's preferences with `Cmd+,` (or manually at `~/.hyperterm.js`) with your editor.
  - At time of writing there is a perms issue with `Cmd+` open it manually.
2. Update your list of plugins to include `hyperterm-base16-tomorrow-dark`, i.e. :

  ```js
plugins: [
  'hyperterm-base16-tomorrow-dark'
],
```
3. Fully reload HyperTerm (`Cmd+Shift+R`), and it's hyperterm secsi time :)

### Customization
You can tweak the colors used in the theme if you like., add a `themeOptions` object to `config` in the `.hyperterm.js` config.
Current Overridable Variables:
 - foregroundColor
 - backgroundColor
 - borderColor
 - cursorColor
 - inactiveTabColor
 - activeTabColor
 - accentColor

 #### Example
 ```js
 // ~/.hyperterm.js
 module.exports = {
   config: {
     fontSize: 14,
     colors: [], //
     // ......

     // Override Theme Settings
     themeOptions: {
       foregroundColor: '#ffffff',
       inactiveTabColor: 'pink',
       activeTabColor: '#232323',

     }
   },

   // add the theme
   plugins: [
     'hyperterm-base16-tomorrow-dark'
   ]
 }
 ```

### License

MIT

[Hyperterm]: https://hyperterm.org/
[base16-tomorrow-dark-theme]: https://atom.io/themes/base16-tomorrow-dark-theme
