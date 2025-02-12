module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint',
  ],
  globals: {
    process: true,
    __dirname: true,
    __filename: true,
    global: true
  },
  rules: {
    // 禁止条件表达式中出现赋值操作符
    'no-cond-assign': ['error', 'always'],
    // 禁止在条件中使用常量表达式
    'no-constant-condition': ['error', { checkLoops: true }],
    // 禁止在正则表达式中使用控制字符
    'no-control-regex': ['error'],
    // 禁止 function 定义中出现重名参数
    'no-dupe-args': ['error'],
    // 禁止对象字面量中出现重复的 key
    'no-dupe-keys': ['error'],
    // 禁止出现重复的 case 标签
    'no-duplicate-case': ['error'],
    // 禁止出现空语句块
    'no-empty': ['error', { allowEmptyCatch: true }],
    // 禁止在正则表达式中使用空字符集
    'no-empty-character-class': ['error'],
    // 禁止对 catch 子句的参数重新赋值
    'no-ex-assign': ['error'],
    // 禁止不必要的布尔转换
    'no-extra-boolean-cast': ['error'],
    // 禁止不必要的分号
    'no-extra-semi': ['error'],
    // 禁止对 function 声明重新赋值
    'no-func-assign': ['warn'],
    // 禁止在嵌套的块中出现变量声明或 function 声明
    'no-inner-declarations': ['error'],
    // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-invalid-regexp': ['error', { allowConstructorFlags: [] }],
    // 禁止在字符串和注释之外不规则的空白
    'no-irregular-whitespace': ['error'],
    // 禁止把全局对象作为函数调用
    'no-obj-calls': ['error'],
    // 禁止正则表达式字面量中出现多个空格
    'no-regex-spaces': ['error'],
    // 禁用稀疏数组
    'no-sparse-arrays': ['error'],
    // 禁止出现令人困惑的多行表达式
    'no-unexpected-multiline': ['error'],
    // 禁止在 finally 语句块中出现控制流语句
    'no-unsafe-finally': ['error'],
    // 禁止对关系运算符的左操作数使用否定操作符
    'no-unsafe-negation': ['error'],
    // 要求使用 isNaN() 检查 NaN
    'use-isnan': ['error'],
    // 要求 switch 语句中有 default 分支
    'default-case': ['error'],
    // 强制尽可能地使用点号
    'dot-notation': ['error'],
    // 要求使用 === 和 !==
    eqeqeq: ['error'],
    // 禁用 arguments.caller 或 arguments.callee
    'no-caller': ['error'],
    // 不允许在 case 子句中使用词法声明
    'no-case-declarations': ['error'],
    // 允许出现空函数
    'no-empty-function': ['warn'],
    // 禁止使用空解构模式
    'no-empty-pattern': ['error'],
    // 禁用 eval()
    'no-eval': ['error'],
    // 禁止对原生对象或只读的全局对象进行赋值
    'no-global-assign': ['error'],
    // 禁止重新声明变量
    'no-redeclare': ['error', { builtinGlobals: true }],
    // 禁止自我赋值
    'no-self-assign': ['error', { props: true }],
    // 禁用出现未使用过的标
    'no-unused-labels': ['error'],
    // 禁用不必要的转义字符
    'no-useless-escape': ['error'],
    // 强制在 parseInt() 使用基数参数
    radix: ['error'],
    // 禁止删除变量
    'no-delete-var': ['error'],
    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef': ['error'],
    // 禁止出现未使用过的变量
    'no-unused-vars': ['error'],
    // 禁止在变量定义之前使用它们
    'no-use-before-define': ['off'],
    // 在数组开括号后和闭括号前强制换行
    'array-bracket-newline': ['off', { multiline: true }],
    // 强制数组方括号中使用一致的空格
    'array-bracket-spacing': ['error', 'never'],
    // 禁止或强制在代码块中开括号前和闭括号后有空格
    'block-spacing': ['error', 'never'],
    // 强制在代码块中使用一致的大括号风格
    'brace-style': ['error', '1tbs'],
    // 要求或禁止末尾逗号
    'comma-dangle': ['error', 'never'],
    // 强制在逗号前后使用一致的空格
    'comma-spacing': ['error', { before: false, after: true }],
    // 强制使用一致的逗号风格
    'comma-style': ['error', 'last'],
    // 强制在计算的属性的方括号中使用一致的空格
    'computed-property-spacing': ['error', 'never'],
    // 当获取当前执行环境的上下文时，强制使用一致的命名
    'consistent-this': ['error', 'that'],
    // 要求或禁止文件末尾存在空行
    'eol-last': ['error', 'always'],
    // 要求或禁止在函数标识符和其调用之间有空格
    'func-call-spacing': ['error', 'never'],
    // 要求或禁止使用命名的 function 表达式
    'func-names': ['off'],
    // 强制一致地使用 function 声明或表达式
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    // 强制在函数括号内使用一致的换行
    'function-paren-newline': 'off',
    // 强制隐式返回的箭头函数体的位置
    'implicit-arrow-linebreak': ['error', 'beside'],
    // 两个空格缩进
    indent: ['error', 2, { SwitchCase: 1 }],
    // 强制在 JSX 属性中一致地使用双引号或单引号
    'jsx-quotes': ['error', 'prefer-single'],
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    // 强制行注释的位置
    'line-comment-position': ['error', { position: 'above', ignorePattern: 'ETC' }],
    // 换行符风格
    'linebreak-style': 'off',
    // 强制可嵌套的块的最大深度
    'max-depth': ['error', 4],
    // 强制回调函数最大嵌套深度
    'max-nested-callbacks': ['error', 3],
    // 强制函数定义中最多允许的参数数量
    'max-params': ['error', 6],
    // 强制对多行注释使用特定风格
    'multiline-comment-style': 'off',
    // 要求或禁止在三元操作数中间换行
    'multiline-ternary': ['error', 'always-multiline'],
    // 要求构造函数首字母大写
    'new-cap': ['error', { capIsNew: false }],
    // 禁用 Array 构造函数
    'no-array-constructor': ['error'],
    // 禁止混合使用不同的操作符
    'no-mixed-operators': ['error'],
    // 禁止空格和 tab 的混合缩进
    'no-mixed-spaces-and-tabs': ['error'],
    // 禁止出现多行空行
    'no-multiple-empty-lines': ['error'],
    // 禁用 Object 的构造函数
    'no-new-object': ['error'],
    // 禁用 tab
    'no-tabs': ['error'],
    // 禁用行尾空白
    'no-trailing-spaces': ['error', { skipBlankLines: false, ignoreComments: false }],
    // 禁止属性前有空白
    'no-whitespace-before-property': ['error'],
    // 强制单个语句的位置
    'nonblock-statement-body-position': ['error', 'beside'],
    // 强制在大括号中使用一致的空格
    'object-curly-spacing': ['error', 'always'],
    // 强制操作符使用一致的换行符
    'operator-linebreak': ['error', 'before'],
    // 使用单引号
    quotes: ['error', 'single'],
    // 要求或禁止使用分号代替 ASI
    semi: ['error', 'never'],
    // 强制分号之前和之后使用一致的空格
    'semi-spacing': ['error', { before: false, after: true }],
    // 强制在 function 的左括号之前使用一致的空格
    'space-before-function-paren': 'off',
    // 强制在圆括号内使用一致的空格
    'space-in-parens': ['error', 'never'],
    // 要求操作符周围有空格
    'space-infix-ops': ['error'],
    // 强制在一元操作符前后使用一致的空格
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': ['off'],
    // 强制箭头函数的箭头前后使用一致的空格
    'arrow-spacing': ['error', { before: true, after: true }],
    // 要求使用 let 或 const 而不是 var
    'no-var': ['error'],
    // 要求或禁止对象字面量中方法和属性使用简写语法
    'object-shorthand': ['error', 'always'],
    // 要求回调函数使用箭头函数
    'prefer-arrow-callback': ['error', { allowNamedFunctions: false }],
    // 禁止使用异步函数作为 Promise executor
    'no-async-promise-executor': 'off',
    // 允许使用 any
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      // {
      //   // 默认所有代码元素使用 camelCase 命名方式
      //   'selector': 'default',
      //   'format': ['camelCase'],
      // },
      {
        // 变量可以使用 camelCase 或 UPPER_CASE 命名方式
        'selector': 'variable',
        'format': ['camelCase', 'UPPER_CASE']
      },
      {
        // 函数参数使用 camelCase，可以使用前导下划线（通常用于未使用的参数）
        'selector': 'parameter',
        'format': ['camelCase'],
        'leadingUnderscore': 'allow'
      },
      // {
      //   // 类的私有成员（private）使用 camelCase，且必须使用前导下划线
      //   'selector': 'memberLike',
      //   'modifiers': ['private'],
      //   'format': ['camelCase'],
      //   'leadingUnderscore': 'require',
      // },
      {
        // 类型（如类、接口、枚举）使用 PascalCase 命名方式
        'selector': 'typeLike',
        'format': ['PascalCase']
      }
    ],
    // 严格的空格和换行符规则
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' }
    ],
    'max-lines': ['error', { max: 300, skipComments: true }],
    'max-lines-per-function': ['error', { max: 50, skipComments: true, skipBlankLines: true }],
    'max-statements-per-line': ['error', { max: 1 }],
    // 代码性能优化
    'no-useless-concat': 'error',
    'prefer-template': 'error',
    'no-new-wrappers': 'error',
    // 代码安全性
    'no-implied-eval': 'error',
    'no-throw-literal': 'error',
    // 'require-await': 'error',
    'no-return-await': 'error',
    // 保证函数始终返回一个值，或者始终不返回值
    'consistent-return': ['error'],
    // 禁用 alert、confirm 和 prompt
    'no-alert': ['error'],
    // 禁用 console 语句，生产环境中应避免使用 console
    'no-console': ['warn'],
    // 禁止 if 语句在 return 语句后有 else 块
    'no-else-return': ['error'],
    // 禁止 else 语句中只有 if 语句
    'no-lonely-if': ['error'],
    // 禁止重复导入
    'no-duplicate-imports': ['error'],
    // 禁止不必要的 return 语句
    'no-useless-return': ['error'],
    // 当变量不会被重新赋值时，使用 const 声明
    'prefer-const': ['error'],
    // 使用剩余参数代替 arguments 对象
    'prefer-rest-params': ['error'],
    // 使用展开运算符而不是 Function.prototype.apply
    'prefer-spread': ['error'],
    // 强制显式定义函数的返回类型
    '@typescript-eslint/explicit-function-return-type': ['warn'],
    // 强制显式定义模块的导出边界类型
    '@typescript-eslint/explicit-module-boundary-types': ['warn'],
    // 禁止出现未使用过的变量
    '@typescript-eslint/no-unused-vars': ['error'],
    // 禁止使用空的接口
    '@typescript-eslint/no-empty-interface': ['error'],
    // 强制使用 interface 而不是 type
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    // 禁止没有处理错误的 Promise
    '@typescript-eslint/no-floating-promises': 'error',
    // 禁止误用 Promise
    '@typescript-eslint/no-misused-promises': 'error',
    // 禁止不必要的类型断言
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    // 强制使用 includes 而不是 indexOf
    '@typescript-eslint/prefer-includes': 'error',
    // 强制使用 readonly 修饰符
    '@typescript-eslint/prefer-readonly': 'error',
    // 强制 Promise 函数是异步函数
    '@typescript-eslint/promise-function-async': 'error'
  }
}
