# Menu concept

Playing around with a responsive nav idea.

[View the demo](http://jonalport.github.io/menu-concept/)

## Getting it running (OSX terminal)
```
git clone git@github.com:jonalport/menu-concept.git
cd menu-concept
npm run setup
npm run server
```

You should now have a server running at:

```
http://localhost:5555/
```

##Features
 - ES6 may be used and is transpiled via Babelify
 - NPM watch scripts to monitor asset folders and build accordingly
 - NPM build scripts to compile, contatenate, minify assets
 - Bourbon, Neat, Bitters provide base styling & useful mixins
 - Modular style includes via SASS imports
 - Menu is visible when JS is off
 - BEM style class naming
 - Aria roles applied in aid of accessibility

## Notes
 - Nav animation applied with CSS & not fully browser/performance tested
 - Breakpoints set at 550 & 900px, could be tweaked
 - Nav links could use larger finger hit area on smaller devices
 - Need to cater for nav scrolling when it's taller than viewport (for large screens)
