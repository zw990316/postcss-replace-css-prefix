// index.js
// const html = require('./testFiles/text-html.html')
let fs = require('fs');
const css = `.pijj {
  font-size: 14px; /*this is a comment*/
}`
const postcss = require('postcss')
// let fileCont = fs.readFileSync(path.resolve(__dirname, './testFiles/text-css.css'), 'utf-8');
postcss().process(css,{from: 'text-css.css'}).then(result => {
 console.log(JSON.stringify(result.css))
})