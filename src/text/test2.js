const plugin = require('../index.js')
const postcss = require('postcss')
postcss([plugin]).process(`
.el-demo {
 font-size: 14px; /*this is a comment*/
 color: #ffffff;
}
`).then(result => {
 console.log(result)
})