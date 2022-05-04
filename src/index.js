// const postcss = require('postcss')
// module.export = opts => {
//     return {
//         postcssPlugin: 'postcss-replace-css-prefix',
//         Once (root, postcss) {
//             // 此处root即为转换后的AST，此方法转换一次css将调用一次
//             },
            
//            Declaration (decl, postcss) {
//             // postcss遍历css样式时调用，在这里可以快速获得type为decl的节点(请参考第二节的AST对象)
//             },
            
//            Declaration: {
//             color(decl, postcss) {
//             // 可以进一步获得decl节点指定的属性值，这里是获得属性为color的值
//             }
//             },
            
//            Comment (comment, postcss) {
//             // 可以快速访问AST注释节点（type为comment）
//             },
            
//            AtRule(atRule, postcss) {
//             // 可以快速访问css如@media，@import等@定义的节点（type为atRule）
//             }
//     }
// }

// module.exports.postcss = true

module.exports = (opts = { }) => {
    return {
    postcssPlugin: 'postcss-test',
    
    Once (root, postcss) {
        root.nodes.forEach(node => {
            if(node.type === 'rule'&& node.selector.includes('-el')){
                const clone = node.clone()
                const reg = new RegExp(`(^|(\\s)*)\\.${prefix}(?!icon)`, 'g')
                clone.selector = selector.replace(reg, `$1.gx-`)
                node.replaceWith(clone)
            }
        })
    // 此处root即为转换后的AST，此方法转换一次css将调用一次
    },
    
   Comment(comment) {
    comment.text = ''
    }
    
   }
   }
   module.exports.postcss = true