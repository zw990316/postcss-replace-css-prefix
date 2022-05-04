// index.js
const postcss = require('postcss')
postcss().process(`
.demo {
 font-size: 14px; /*this is a comment*/
}
`).then(result => {
 console.log(result)
})