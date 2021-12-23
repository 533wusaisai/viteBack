module.exports = {
  disableEmoji: false, // 表情
  list: [
    'test', // 测试
    'feat', // 新特性 or 新功能
    'fix', // 修复问题bug
    'chore', // 项目依赖升级或修改
    'docs', // 项目文档修改
    'refactor', // 目录结构优化
    'style', // style 样式修改
    'ci', // CI/CO配置
    'perf' // 性能优化
  ],
  maxMessageLength: 64, // 最大长度
  minMessageLength: 3, // 最短长度
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
  scopes: [],
  types: {
    chore: {
      description: '构建依赖更新',
      emoji: '🤖',
      value: 'chore'
    },
    ci: {
      description: '自动化配置',
      emoji: '🎡',
      value: 'ci'
    },
    docs: {
      description: '文档更新',
      emoji: '✏️',
      value: 'docs'
    },
    feat: {
      description: '新特性',
      emoji: '🎸',
      value: 'feat'
    },
    fix: {
      description: '问题修复bug',
      emoji: '🐛',
      value: 'fix'
    },
    perf: {
      description: '性能优化',
      emoji: '⚡️',
      value: 'perf'
    },
    refactor: {
      description: '结构优化',
      emoji: '💡',
      value: 'refactor'
    },
    release: {
      description: '版本提交',
      emoji: '🏹',
      value: 'release'
    },
    style: {
      description: '样式优化',
      emoji: '💄',
      value: 'style'
    },
    test: {
      description: '新增测试内容',
      emoji: '💍',
      value: 'test'
    }
  }
}
