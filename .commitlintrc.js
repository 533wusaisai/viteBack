module.exports = {
  extends: ['@commitlint/config-conventional'],
  'type-enum': [
    2,
    'always',
    [
      'build', // 主要目的是修改项目构建内容
      'ci', // 修改集成流程
      'docs', // 文档修改
      'feat', // 新功能
      'fix', //  bug修复
      'merge', // 分支合并
      'perf', // 性能体验优化
      'refactor', // 重构
      'style', // 不影响逻辑代码修改  例如：样式
      'test', // 新增测试用例或更新测试功能
      'revert', // 回滚某个更早之前的版本
      'chore' // 不属于以上类型的其他类型
    ]
  ],
  'type-case': [0],
  'type-empty': [0],
  'scope-empty': [0],
  'scope-case': [0],
  'subject-full-stop': [0, 'never'],
  'subject-case': [0, 'never'],
  'header-max-length': [0, 'always', 72]
}
