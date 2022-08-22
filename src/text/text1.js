// index.js
const postcss = require('postcss')
postcss().process(`
.el-demo {
 font-size: 14px; /*this is a comment*/
}
.el-table td .el-rows {
  font-size: 14px; /*this is a comment*/
 }
`).then(result => {
 console.log(JSON.stringify(result))
})