module.exports = {
  semi: false, // 是否在语句末尾打印分号
  singleQuote: true, // 是否使用单引号
  printWidth: 100, // 单行输出（不折行）的（最大）长度
  quoteProps: 'as-needed', // 仅在需要时在对象属性周围添加引号
  tabWidth: 2, // 每个缩进级别的空格数
  tabs: false, // 使用制表符 (tab) 缩进行而不是空格 (space)
  bracketSpacing: true, // 是否在对象属性添加空格
  jsxBracketSameLine: true, // 将 > 多行 JSX 元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭元素）,默认false,这里选择>不另起一行
  htmlWhitespaceSensitivity: 'ignore', // 指定 HTML 文件的全局空白区域敏感度, "ignore" - 空格被认为是不敏感的
  trailingComma: 'es5', // 去除对象最末尾元素跟随的逗号
  useTabs: false, // 不使用缩进符，而使用空格
  jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号
  arrowParens: 'always', // 箭头函数，只有一个参数的时候，也需要括号
  rangeStart: 0, // 每个文件格式化的范围是文件的全部内容
  proseWrap: 'always', // 当超出print width（上面有这个参数）时就折行
  endOfLine: 'lf', // 换行符使用 lf
  JSXBrackets: false, //将多行JSX元素的 > 放在最后一行的末尾，而不是单独放在下一行（不适用于自闭元素）。
  // ArrowFunctionParentheses: 'avoid',
  // 围绕一个唯一的箭头函数参数包括括号,
}
// module.exports = {
//   // 一行最多 100 字符
//   printWidth: 100,
//   // 使用 4 个空格缩进
//   tabWidth: 4,
//   // 不使用缩进符，而使用空格
//   useTabs: false,
//   // 行尾不需要有分号
//   semi: false,
//   // 使用单引号
//   singleQuote: true,
//   // 对象的 key 仅在必要时用引号
//   quoteProps: 'as-needed',
//   // jsx 不使用单引号，而使用双引号
//   jsxSingleQuote: false,
//   // 尾随逗号
//   trailingComma: 'all',
//   // 大括号内的首尾需要空格
//   bracketSpacing: true,
//   // jsx 标签的反尖括号需要换行
//   jsxBracketSameLine: false,
//   // 箭头函数，只有一个参数的时候，也需要括号
//   arrowParens: 'always',
//   // 每个文件格式化的范围是文件的全部内容
//   rangeStart: 0,
//   rangeEnd: Infinity,
//   // 不需要写文件开头的 @prettier
//   requirePragma: false,
//   // 不需要自动在文件开头插入 @prettier
//   insertPragma: false,
//   // 使用默认的折行标准
//   proseWrap: 'preserve',
//   // 根据显示样式决定 html 要不要折行
//   htmlWhitespaceSensitivity: 'css',
//   // 换行符使用 lf
//   endOfLine: 'lf',
// }
