// import { md } from './plugin/md';

// export default {
//     plugins: [md()]
// }
// @ts-nocheck
import { md } from "./plugin/md";
import fs from 'fs'
import { baseParse } from '@vue/compiler-core'

// export default {
//     plugins: [md()],
//     vueCustomBlockTransforms: {
//         demo: (options) => {
//             const { code, path } = options
//             const file = fs.readFileSync(path).toString()
//             const parsed = baseParse(file).children.find(n => n.tag === 'demo')
//             const title = parsed.children[0].content
//             const main = file.split(parsed.loc.source).join('').trim()
//             return `export default function (Component) {Component.__sourceCode = ${JSON.stringify(main)}}`.trim()
//         }
//     }
// };


export default {
    base: './',
    assetsDir: 'assets',
    plugins: [md()],
    vueCustomBlockTransforms: {
        // 遇到demo标签就执行以下代码
        demo: (options) => {
            const { code, path } = options;
            const file = fs.readFileSync(path).toString();
            // 判断虚拟节点是否存在tag为deom的标签
            const parsed = baseParse(file).children.find((n) => n.tag === 'demo');
            // demo 标签里的文字
            const title = parsed.children[0].content;
            // 删除demo标签
            const main = file.split(parsed.loc.source).join('').trim();
            // 组件对象增加__sourceCode属性，值为源代码
            return `export default function (Component) {
        Component.__sourceCode = ${JSON.stringify(main)}
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim();
        }
    }
};